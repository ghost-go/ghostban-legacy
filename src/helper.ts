import {flattenDepth, clone, sum, filter, findLastIndex} from 'lodash';
import {SgfNode} from './core/types';
import {A1_LETTERS, A1_NUMBERS, SGF_LETTERS} from './const';
import TreeModel from 'tree-model/types';
import {SetupProp, CustomProp, SgfPropBase} from './core/props';
import {Analysis, MoveInfo, RootInfo} from './types';
import {reverseOffset} from './utils';
import sha256 from 'crypto-js/sha256';

export const round2 = (v: number, scale = 1, fixed = 2) => {
  return ((Math.round(v * 100) / 100) * scale).toFixed(fixed);
};

export const round3 = (v: number, scale = 1, fixed = 3) => {
  return ((Math.round(v * 1000) / 1000) * scale).toFixed(fixed);
};

export const getDeduplicatedProps = (targetProps: SgfPropBase[]) => {
  return filter(
    targetProps,
    (prop: SgfPropBase, index: number) =>
      index ===
      findLastIndex(
        targetProps,
        (lastPro: SgfPropBase) =>
          prop.token === lastPro.token && prop.value === lastPro.value
      )
  );
};

export const isMoveNode = (n: TreeModel.Node<SgfNode>) => {
  return n.model.moveProps.length > 0;
};

export const isRooNode = (n: TreeModel.Node<SgfNode>) => {
  return n.model.moveProps.length > 0;
};

export const isSetupNode = (n: TreeModel.Node<SgfNode>) => {
  return n.model.setupProps.length > 0;
};

export const isAnswerNode = (n: TreeModel.Node<SgfNode>, kind: string) => {
  const pai = n.model.customProps?.find((p: CustomProp) => p.token === 'PAI');
  if (!pai) return false;
  const data = JSON.parse(pai.value);

  return data.kind === kind;
};

export const getNodeNumber = (
  n: TreeModel.Node<SgfNode>,
  parent?: TreeModel.Node<SgfNode>
) => {
  const path = n.getPath();
  let movesCount = path.filter(n => isMoveNode(n)).length;
  if (parent) {
    movesCount += parent.getPath().filter(n => isMoveNode(n)).length;
  }
  return movesCount;
};

export const calcSHA = (
  node: TreeModel.Node<SgfNode> | null | undefined,
  moveProps: any = [],
  setupProps: any = []
) => {
  let nodeType = 'r';
  if (moveProps.length > 0) nodeType = 'm';
  if (setupProps.length > 0) nodeType = 's';

  let n = `${nodeType}`;
  if (moveProps.length > 0) n += `${moveProps[0].token}${moveProps[0].value}`;

  let fullname = n;
  if (node) {
    fullname =
      node
        .getPath()
        .map((n: TreeModel.Node<SgfNode>) => n.model.id)
        .join('=>') +
      '=>' +
      n;
  }

  const sha = sha256(fullname).toString().slice(0, 6);
  return sha;
};

export const nFormatter = (num: number, fixed = 1) => {
  const lookup = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'k'},
    {value: 1e6, symbol: 'M'},
    {value: 1e9, symbol: 'G'},
    {value: 1e12, symbol: 'T'},
    {value: 1e15, symbol: 'P'},
    {value: 1e18, symbol: 'E'},
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(item => {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(fixed).replace(rx, '$1') + item.symbol
    : '0';
};

export const pathToIndexes = (path: TreeModel.Node<SgfNode>[]): number[] => {
  return path.map(n => n.model.id);
};

export const pathToInitialStones = (
  path: TreeModel.Node<SgfNode>[],
  xOffset = 0,
  yOffset = 0
): string[][] => {
  const inits = path
    .filter(n => n.model.setupProps.length > 0)
    .map(n => {
      return n.model.setupProps.map((setup: SetupProp) => {
        const a = A1_LETTERS[SGF_LETTERS.indexOf(setup.value[0]) + xOffset];
        const b = A1_NUMBERS[SGF_LETTERS.indexOf(setup.value[1]) + yOffset];
        const token = setup.token === 'AB' ? 'B' : 'W';
        return [token, a + b];
      });
    });
  return flattenDepth(inits[0], 0);
};

export const pathToAiMoves = (
  path: TreeModel.Node<SgfNode>[],
  xOffset = 0,
  yOffset = 0
) => {
  const moves = path
    .filter(n => n.model.moveProps.length > 0)
    .map(n => {
      const prop = n.model.moveProps[0];
      const a = A1_LETTERS[SGF_LETTERS.indexOf(prop.value[0]) + xOffset];
      const b = A1_NUMBERS[SGF_LETTERS.indexOf(prop.value[1]) + yOffset];
      return [prop.token, a + b];
    });
  return moves;
};

export const getIndexFromAnalysis = (a: Analysis) => {
  if (/indexes/.test(a.id)) {
    return JSON.parse(a.id)['indexes'][0];
  }
  return '';
};

export const isMainPath = (node: TreeModel.Node<SgfNode>) => {
  return sum(node.getPath().map(n => n.getIndex())) === 0;
};

export const sgfToPos = (str: string) => {
  const ki = str[0] === 'B' ? 1 : -1;
  const tempStr = /\[(.*)\]/.exec(str);
  if (tempStr) {
    const pos = tempStr[1];
    const x = SGF_LETTERS.indexOf(pos[0]);
    const y = SGF_LETTERS.indexOf(pos[1]);
    return {x, y, ki};
  }
  return {x: -1, y: -1, ki: 0};
};

export const sgfToA1 = (str: string) => {
  const {x, y} = sgfToPos(str);
  return A1_LETTERS[x] + A1_NUMBERS[y];
};

export const a1ToPos = (move: string) => {
  const x = A1_LETTERS.indexOf(move[0]);
  const y = A1_NUMBERS.indexOf(parseInt(move.substr(1), 0));
  return {x, y};
};

export const a1ToIndex = (move: string, boardSize = 19) => {
  const x = A1_LETTERS.indexOf(move[0]);
  const y = A1_NUMBERS.indexOf(parseInt(move.substr(1), 0));
  return x * boardSize + y;
};

export const sgfOffset = (sgf: any, offset = 0) => {
  if (offset === 0) return sgf;
  const res = clone(sgf);
  const charIndex = SGF_LETTERS.indexOf(sgf[2]) - offset;
  return res.substr(0, 2) + SGF_LETTERS[charIndex] + res.substr(2 + 1);
};

export const a1ToSGF = (str: any, type = 'B', offsetX = 0, offsetY = 0) => {
  if (str === 'pass') return `${type}[]`;
  const inx = A1_LETTERS.indexOf(str[0]) + offsetX;
  const iny = A1_NUMBERS.indexOf(parseInt(str.substr(1), 0)) + offsetY;
  const sgf = `${type}[${SGF_LETTERS[inx]}${SGF_LETTERS[iny]}]`;
  return sgf;
};

export const posToSgf = (x: number, y: number, ki: number) => {
  const ax = SGF_LETTERS[x];
  const ay = SGF_LETTERS[y];
  if (ki === 0) return '';
  if (ki === 1) return `B[${ax}${ay}]`;
  if (ki === -1) return `W[${ax}${ay}]`;
  return '';
};

export const matToPosition = (mat: number[][], xOffset = 0, yOffset = 0) => {
  let result = '';
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const value = mat[i][j];
      if (value !== 0) {
        const x = A1_LETTERS[i + xOffset];
        const y = A1_NUMBERS[j + yOffset];
        const color = value === 1 ? 'b' : 'w';
        result += `${color} ${x}${y} `;
      }
    }
  }
  return result;
};

export const matToListOfTuples = (
  mat: number[][],
  xOffset = 0,
  yOffset = 0
) => {
  const results = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const value = mat[i][j];
      if (value !== 0) {
        const x = A1_LETTERS[i + xOffset];
        const y = A1_NUMBERS[j + yOffset];
        const color = value === 1 ? 'B' : 'W';
        results.push([color, x + y]);
      }
    }
  }
  return results;
};

export const convertStoneTypeToString = (type: any) => (type === 1 ? 'B' : 'W');

export const convertStepsForAI = (steps: any, offset = 0) => {
  let res = clone(steps);
  res = res.map((s: any) => sgfOffset(s, offset));
  const header = `(;FF[4]GM[1]SZ[${
    19 - offset
  }]GN[226]PB[Black]HA[0]PW[White]KM[7.5]DT[2017-08-01]TM[1800]RU[Chinese]CP[Copyright ghost-go.com]AP[ghost-go.com]PL[Black];`;
  let count = 0;
  let prev = '';
  steps.forEach((step: any, index: any) => {
    if (step[0] === prev[0]) {
      if (step[0] === 'B') {
        res.splice(index + count, 0, 'W[tt]');
        count += 1;
      } else {
        res.splice(index + count, 0, 'B[tt]');
        count += 1;
      }
    }
    prev = step;
  });
  return `${header}${res.join(';')})`;
};

export const reverseOffsetA1Move = (
  move: string,
  mat: number[][],
  analysis: Analysis
) => {
  if (move === 'pass') return move;
  const idObj = JSON.parse(analysis.id);
  const {x, y} = reverseOffset(mat, idObj.bx, idObj.by);
  const inx = A1_LETTERS.indexOf(move[0]) + x;
  const iny = A1_NUMBERS.indexOf(parseInt(move.substr(1), 0)) + y;
  return `${A1_LETTERS[inx]}${A1_NUMBERS[iny]}`;
};

export const calcScoreDiffText = (
  prev?: RootInfo | null,
  curr?: MoveInfo | RootInfo | null,
  fixed = 1
) => {
  if (!prev || !curr) return '';
  const score = calcScoreDiff(prev, curr);
  const fixedScore = score.toFixed(fixed);

  return score > 0 ? `+${fixedScore}` : `${fixedScore}`;
};

export const calcWinrateDiffText = (
  prev?: RootInfo | null,
  curr?: MoveInfo | RootInfo | null,
  fixed = 1
) => {
  if (!prev || !curr) return '';
  const winrate = calcWinrateDiff(prev, curr);
  const fixedWinrate = winrate.toFixed(fixed);

  return winrate >= 0 ? `+${fixedWinrate}%` : `${fixedWinrate}%`;
};

export const calcScoreDiff = (
  prevInfo: RootInfo,
  currInfo: MoveInfo | RootInfo
) => {
  const sign = prevInfo.currentPlayer === 'B' ? 1 : -1;
  const score =
    Math.round((currInfo.scoreLead - prevInfo.scoreLead) * sign * 1000) / 1000;

  return score;
};

export const calcWinrateDiff = (
  prevInfo: RootInfo,
  currInfo: MoveInfo | RootInfo
) => {
  const sign = prevInfo.currentPlayer === 'B' ? 1 : -1;
  const score =
    Math.round((currInfo.winrate - prevInfo.winrate) * sign * 1000 * 100) /
    1000;

  return score;
};

// export const GoBanDetection = (pixelData, canvas) => {
// const columns = canvas.width;
// const rows = canvas.height;
// const dataType = JsFeat.U8C1_t;
// const distMatrixT = new JsFeat.matrix_t(columns, rows, dataType);
// JsFeat.imgproc.grayscale(pixelData, columns, rows, distMatrixT);
// JsFeat.imgproc.gaussian_blur(distMatrixT, distMatrixT, 2, 0);
// JsFeat.imgproc.canny(distMatrixT, distMatrixT, 50, 50);

// const newPixelData = new Uint32Array(pixelData.buffer);
// const alpha = (0xff << 24);
// let i = distMatrixT.cols * distMatrixT.rows;
// let pix = 0;
// while (i >= 0) {
//   pix = distMatrixT.data[i];
//   newPixelData[i] = alpha | (pix << 16) | (pix << 8) | pix;
//   i -= 1;
// }
// };
