import _ from 'lodash';
import {A1_LETTERS, A1_NUMBERS, RESOURCES} from './const';
import {Theme, Ki} from './types';
import {zeros, empty} from './utils';

import {Center, Markup} from './types';
import {calcVisibleArea} from './utils';
import {ImageStone} from './stones';
import BwStone from './stones/bwStone';
import {
  CircleMarkup,
  CrossMarkup,
  TextMarkup,
  SquareMarkup,
  TriangleMarkup,
} from './markups';

// const devicePixelRatio = window.devicePixelRatio;
let devicePixelRatio = 1.0;
if (typeof window !== 'undefined') {
  devicePixelRatio = window.devicePixelRatio;
  // browser code
}

const images: {
  [key: string]: HTMLImageElement;
} = {};

function preload(urls: string[], done: () => void) {
  let loaded = 0;
  const imageLoaded = () => {
    loaded++;
    if (loaded === urls.length) {
      done();
    }
  };
  for (let i = 0; i < urls.length; i++) {
    if (!images[urls[i]]) {
      images[urls[i]] = new Image();
      images[urls[i]].src = urls[i];
      images[urls[i]].onload = function () {
        imageLoaded();
      };
      images[urls[i]].onerror = function () {
        imageLoaded();
      };
    }
  }
}

export type GhostBanOptions = {
  boardSize: number;
  size?: number;
  padding: number;
  zoom?: boolean;
  extend: number;
  theme: Theme;
  coordinate: boolean;
  interactive: boolean;
  background?: boolean;
};

export type GhostBanOptionsParams = {
  boardSize?: number;
  size?: number;
  padding?: number;
  zoom?: boolean;
  extend?: number;
  theme?: Theme;
  interactive?: boolean;
  coordinate?: boolean;
  background?: boolean;
};

export class GhostBan {
  defaultOptions: GhostBanOptions = {
    boardSize: 19,
    padding: 10,
    extend: 2,
    interactive: false,
    coordinate: true,
    background: false,
    theme: Theme.BlackAndWhite,
  };
  options: GhostBanOptions;
  dom: HTMLElement | undefined;
  canvas?: HTMLCanvasElement;
  board?: HTMLCanvasElement;
  private _turn: Ki;
  cursor: [number, number];
  cursorPos: DOMPoint;
  mat: number[][];
  markup: (string | number)[][];
  maxhv: number;
  transMat: DOMMatrix;

  constructor(options: GhostBanOptionsParams = {}) {
    this.options = {
      ...this.defaultOptions,
      ...options,
    };
    this.mat = zeros([19, 19]);
    this.markup = empty([19, 19]);
    this._turn = Ki.Black;
    this.cursor = [18, 0];
    this.cursorPos = new DOMPoint();
    this.maxhv = this.options.boardSize;
    this.transMat = new DOMMatrix();
  }

  getCanvas() {
    return this.canvas;
  }

  setTurn(turn: Ki) {
    this._turn = turn;
  }

  resize() {
    if (!this.canvas || !this.dom || !this.board) return;
    const {canvas, board} = this;
    const {size} = this.options;
    if (size) {
      canvas.width = size * devicePixelRatio;
      canvas.height = size * devicePixelRatio;
      board.width = size * devicePixelRatio;
      board.height = size * devicePixelRatio;
    } else {
      const {clientWidth} = this.dom;
      canvas.style.width = clientWidth + 'px';
      canvas.style.height = clientWidth + 'px';
      canvas.width = Math.floor(clientWidth * devicePixelRatio);
      canvas.height = Math.floor(clientWidth * devicePixelRatio);
      board.style.width = clientWidth + 'px';
      board.style.height = clientWidth + 'px';
      board.width = Math.floor(clientWidth * devicePixelRatio);
      board.height = Math.floor(clientWidth * devicePixelRatio);
    }
  }

  init(dom: HTMLElement) {
    this.mat = zeros([19, 19]);
    this.markup = empty([19, 19]);
    this.transMat = new DOMMatrix();
    const board = document.createElement('canvas');
    board.style.position = 'absolute';
    this.board = board;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    this.canvas = canvas;
    this.dom = dom;

    // const ctx = canvas.getContext('2d');
    // if (ctx) {
    //   ctx.imageSmoothingQuality = 'high';
    // }

    this.resize();
    dom.firstChild?.remove();
    dom.firstChild?.remove();

    dom.appendChild(board);
    dom.appendChild(canvas);

    this.renderInteractive();
  }

  setOptions(options: GhostBanOptionsParams) {
    this.options = {...this.options, ...options};
  }

  renderInteractive() {
    const canvas = this.canvas;
    if (!canvas) return;
    const {padding} = this.options;
    const {space} = this.calcSpaceAndPadding();

    const setCursorWithRender = (domPoint: DOMPoint) => {
      const point = this.transMat.inverse().transformPoint(domPoint);
      const idx = Math.round((point.x - padding + space / 2) / space);
      const idy = Math.round((point.y - padding + space / 2) / space);
      const xx = idx * space;
      const yy = idy * space;
      const p = this.transMat.transformPoint(new DOMPoint(xx, yy));
      this.cursorPos = p;
      this.cursor = [idx - 1, idy - 1];
      this.render(this.mat, this.markup);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touches = e.changedTouches;
      const point = new DOMPoint(
        (touches[0].clientX - rect.left) * devicePixelRatio,
        (touches[0].clientY - rect.top) * devicePixelRatio
      );
      setCursorWithRender(point);
    };
    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const point = new DOMPoint(
        e.offsetX * devicePixelRatio,
        e.offsetY * devicePixelRatio
      );
      setCursorWithRender(point);
    };
    if (this.options.interactive) {
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('touchmove', onTouchMove);
    } else {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
    }
  }

  setTheme(theme: Theme) {
    const {board, blacks, whites} = RESOURCES[theme];
    preload(_.compact([board, ...blacks, ...whites]), () => {
      const shadowStyle = '3px 3px 3px #aaaaaa';
      const canvas = this.canvas;
      if (canvas) {
        this.options.theme = theme;
        if (theme === Theme.BlackAndWhite) {
          canvas.style.boxShadow = '0px 0px 0px #000000';
        } else if (theme === Theme.Flat) {
          canvas.style.boxShadow = shadowStyle;
        }
        setTimeout(() => {
          this.render(this.mat, this.markup);
        }, 0);
      }
    });
    setTimeout(() => {
      this.options.theme = theme;
      this.render(this.mat, this.markup);
    }, 0);
  }

  render(mat?: number[][], markup?: (string | number)[][]) {
    if (mat) this.mat = mat;
    if (markup) this.markup = markup;
    const {boardSize, zoom, extend, interactive, coordinate} = this.options;
    const canvas = this.canvas;
    if (canvas) {
      this.resize();
      this.clearCanvas();
      const ctx = canvas.getContext('2d');
      if (ctx && this.options.background) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const {visibleArea: zoomedVisibleArea, center} = calcVisibleArea(
        this.mat,
        boardSize,
        extend
      );
      const visibleArea = zoom
        ? zoomedVisibleArea
        : [
            [0, 18],
            [0, 18],
          ];

      if (zoom && ctx) {
        const {space} = this.calcSpaceAndPadding();
        const zoomedBoardSize = visibleArea[0][1] - visibleArea[0][0] + 1;
        const scale = 1 / (zoomedBoardSize / boardSize);

        let offsetX = 0;
        let offsetY = 0;
        switch (center) {
          case Center.TopLeft:
            break;
          case Center.TopRight:
            offsetX =
              visibleArea[0][0] * space * scale +
              (this.options.padding / 2) * scale;
            break;
          case Center.BottomLeft:
            offsetY =
              visibleArea[1][0] * space * scale +
              (this.options.padding / 2) * scale;
            break;
          case Center.BottomRight:
            offsetX =
              visibleArea[0][0] * space * scale +
              (this.options.padding / 2) * scale;
            offsetY =
              visibleArea[1][0] * space * scale +
              (this.options.padding / 2) * scale;
            break;
        }
        this.transMat = new DOMMatrix();
        this.transMat.translateSelf(-offsetX, -offsetY);
        this.transMat.scaleSelf(scale, scale);
        ctx.setTransform(this.transMat);
      }

      this.drawBan();
      this.drawBoardLine(visibleArea);
      this.drawStars(visibleArea);
      if (interactive) {
        this.drawCursor(visibleArea);
      }
      if (coordinate) {
        this.drawCoordinate(visibleArea);
      }
      this.drawStones(mat ?? this.mat);
      this.drawMarkup(mat ?? this.mat, markup ?? this.markup);
      // ctx?.restore();
    }
  }

  clearCanvas = () => {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  };

  drawMarkup = (mat: number[][], markup: (string | number)[][]) => {
    // console.log('markup', markup);
    const canvas = this.canvas;
    if (canvas) {
      for (let i = 0; i < markup.length; i++) {
        for (let j = 0; j < markup[i].length; j++) {
          const value = markup[i][j];
          if (value !== null && value !== '') {
            const {space, scaledPadding} = this.calcSpaceAndPadding();
            const x = scaledPadding + i * space;
            const y = scaledPadding + j * space;
            const ki = mat[i][j];
            let markup;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              switch (value) {
                case Markup.Circle:
                case Markup.Current: {
                  markup = new CircleMarkup(ctx, x, y, space, ki);
                  break;
                }
                case Markup.Square: {
                  markup = new SquareMarkup(ctx, x, y, space, ki);
                  break;
                }
                case Markup.Triangle: {
                  markup = new TriangleMarkup(ctx, x, y, space, ki);
                  break;
                }
                case Markup.Cross: {
                  markup = new CrossMarkup(ctx, x, y, space, ki);
                  break;
                }
                default: {
                  if (value !== '') {
                    markup = new TextMarkup(ctx, x, y, space, ki, value);
                  }
                  break;
                }
              }
              markup?.draw();
            }
          }
        }
      }
    }
  };

  drawBan = () => {
    const {board} = this;
    const {theme} = this.options;
    if (board) {
      board.style.borderRadius = '2px';
      const ctx = board.getContext('2d');
      if (ctx) {
        if (theme === Theme.BlackAndWhite) {
          board.style.boxShadow = '0px 0px 0px #000000';
        } else if (theme === Theme.Flat) {
          ctx.fillStyle = '#ECB55A';
          ctx.fillRect(0, 0, board.width, board.height);
        } else if (
          theme === Theme.Walnut &&
          RESOURCES[theme].board !== undefined
        ) {
          const boardUrl = RESOURCES[theme].board || '';
          const boardRes = images[boardUrl];
          if (boardRes) {
            ctx.drawImage(boardRes, 0, 0, board.width, board.height);
          }
        } else {
          const boardUrl = RESOURCES[theme].board || '';
          const image = images[boardUrl];
          if (image) {
            const pattern = ctx.createPattern(image, 'repeat');
            if (pattern) {
              ctx.fillStyle = pattern;
              ctx.fillRect(0, 0, board.width, board.height);
            }
          }
        }
      }
    }
  };

  drawBoardLine = (
    visibleArea = [
      [0, 18],
      [0, 18],
    ]
  ) => {
    if (!this.canvas) return;
    const ctx = this.canvas.getContext('2d');
    if (ctx) {
      const {space, scaledPadding} = this.calcSpaceAndPadding();

      ctx.lineWidth = 1 * devicePixelRatio;
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      for (let i = visibleArea[0][0]; i <= visibleArea[0][1]; i++) {
        ctx.moveTo(
          i * space + scaledPadding,
          scaledPadding + visibleArea[1][0] * space
        );
        ctx.lineTo(
          i * space + scaledPadding,
          space * visibleArea[1][1] + scaledPadding
        );
      }
      for (let i = visibleArea[1][0]; i <= visibleArea[1][1]; i++) {
        ctx.moveTo(
          visibleArea[0][0] * space + scaledPadding,
          i * space + scaledPadding
        );
        ctx.lineTo(
          visibleArea[0][1] * space + scaledPadding,
          i * space + scaledPadding
        );
      }
      ctx.stroke();
    }
  };

  drawStars = (
    visibleArea = [
      [0, 18],
      [0, 18],
    ]
  ) => {
    if (!this.canvas) return;
    const ctx = this.canvas.getContext('2d');
    if (ctx) {
      const {space, scaledPadding} = this.calcSpaceAndPadding();
      // Drawing star
      ctx.stroke();
      [3, 9, 15].forEach(i => {
        [3, 9, 15].forEach(j => {
          if (
            i > visibleArea[0][0] &&
            i < visibleArea[0][1] &&
            j > visibleArea[1][0] &&
            j < visibleArea[1][1]
          ) {
            ctx.beginPath();
            ctx.arc(
              i * space + scaledPadding,
              j * space + scaledPadding,
              3 * devicePixelRatio,
              0,
              2 * Math.PI,
              true
            );
            ctx.fillStyle = 'black';
            ctx.fill();
          }
        });
      });
    }
  };

  drawCoordinate = (
    visibleArea = [
      [0, 18],
      [0, 18],
    ]
  ) => {
    const canvas = this.canvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const {space, scaledPadding} = this.calcSpaceAndPadding();
    if (ctx) {
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${space / 2.8}px Helvetica`;

      const offset = space / 3;
      A1_LETTERS.forEach((l, index) => {
        const x = space * index + scaledPadding;
        if (index >= visibleArea[0][0] && index <= visibleArea[0][1]) {
          ctx.fillText(l, x, 0 + offset);
          ctx.fillText(l, x, canvas.height - offset);
        }
      });
      A1_NUMBERS.forEach((l: number, index) => {
        const y = space * index + scaledPadding;
        if (index >= visibleArea[1][0] && index <= visibleArea[1][1]) {
          ctx.fillText(l.toString(), offset, y);
          ctx.fillText(l.toString(), canvas.width - offset, y);
        }
      });
    }
  };

  calcSpaceAndPadding = () => {
    let space = 0;
    let scaledPadding = 0;
    if (this.canvas) {
      const {padding, boardSize} = this.options;
      // scaledPadding = padding * devicePixelRatio;
      scaledPadding = padding;
      space = (this.canvas.width - padding * 2) / boardSize;
      scaledPadding = scaledPadding + space / 2;
    }
    return {space, scaledPadding};
  };

  drawCursor = (visibleArea: number[][]) => {
    const canvas = this.canvas;
    if (canvas) {
      const {padding} = this.options;
      const ctx = canvas.getContext('2d');
      const {space} = this.calcSpaceAndPadding();

      const [idx, idy] = this.cursor;
      if (idx < visibleArea[0][0] || idx > visibleArea[0][1]) return;
      if (idy < visibleArea[1][0] || idy > visibleArea[1][1]) return;
      const x = idx * space + space / 2 + padding;
      const y = idy * space + space / 2 + padding;

      if (ctx) {
        const size = space * 0.4;
        if (size > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, size, 0, 2 * Math.PI, true);
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.6;
          if (this._turn === Ki.Black) {
            ctx.strokeStyle = '#000';
            ctx.fillStyle = '#000';
          } else if (this._turn === Ki.White) {
            ctx.strokeStyle = '#FFF';
            ctx.fillStyle = '#FFF';
          }
          ctx.fill();
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.restore();
        }
      }
    }
  };

  drawStones = (matrix: number[][]) => {
    const canvas = this.canvas;
    const {theme = Theme.BlackAndWhite} = this.options;
    if (canvas) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          const value = matrix[i][j];
          if (value !== 0) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              const {space, scaledPadding} = this.calcSpaceAndPadding();
              const x = scaledPadding + i * space;
              const y = scaledPadding + j * space;

              const ratio = 0.46;
              ctx.save();
              if (
                theme !== Theme.Subdued &&
                theme !== Theme.BlackAndWhite &&
                theme !== Theme.Flat
              ) {
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                ctx.shadowColor = '#555';
                ctx.shadowBlur = 8;
              }
              let stone;
              switch (theme) {
                case Theme.BlackAndWhite:
                case Theme.Flat: {
                  stone = new BwStone(ctx, x, y, space * ratio, value);
                  break;
                }
                default: {
                  const blacks = RESOURCES[theme].blacks.map(i => images[i]);
                  const whites = RESOURCES[theme].whites.map(i => images[i]);
                  const r = space * ratio;
                  const mod = i + 10 + j;
                  stone = new ImageStone(
                    ctx,
                    x,
                    y,
                    r,
                    value,
                    mod,
                    blacks,
                    whites
                  );
                }
              }
              stone.draw();
              ctx.restore();
            }
          }
        }
      }
    }
  };
}
