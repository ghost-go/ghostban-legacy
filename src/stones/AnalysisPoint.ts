import {calcScoreDiff, calcScoreDiffText, nFormatter, round3} from '../helper';
import {MoveInfo, RootInfo} from '../types';

export default class AnalysisPoint {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  r: number;
  rootInfo: RootInfo;
  moveInfo: MoveInfo;
  norm: number;
  detail: boolean;
  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    rootInfo: RootInfo,
    moveInfo: MoveInfo,
    norm: number,
    detail: boolean
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.rootInfo = rootInfo;
    this.moveInfo = moveInfo;
    this.norm = norm || 0;
    this.detail = detail;
  }

  draw() {
    const {ctx, x, y, r, rootInfo, moveInfo} = this;
    if (r < 0) return;
    const {prior, order} = moveInfo;
    const score = calcScoreDiff(rootInfo, moveInfo);

    let pColor = 'rgba(255, 255, 255, 0.5)';
    if (
      prior >= 0.5 ||
      (prior >= 0.1 && order < 3 && score > -0.3) ||
      order === 0 ||
      score >= 0
    ) {
      pColor = 'rgba(136, 170, 60, 1)';
    } else if (
      (prior > 0.05 && score > -0.5) ||
      (prior > 0.01 && score > -0.1)
    ) {
      pColor = 'rgba(206, 210, 83, 1)';
    } else if (prior > 0.01 && score > -1) {
      pColor = 'rgba(242, 217, 60, 1)';
    } else {
      pColor = 'rgba(236, 146, 73, 1)';
    }

    ctx.save();
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 0;
    if (moveInfo.visits > 50 && score > -1 && (prior > 0.01 || order < 5)) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI, true);
      ctx.lineWidth = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0)';
      const gradient = ctx.createRadialGradient(x, y, r * 0.9, x, y, r);
      gradient.addColorStop(0, pColor);
      gradient.addColorStop(0.9, 'rgba(255, 255, 255, 0');
      ctx.fillStyle = gradient;
      ctx.fill();

      const fontSize = r / 1.5;

      ctx.font = `${fontSize * 0.8}px Tahoma`;
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';

      const winrate =
        rootInfo.currentPlayer === 'B'
          ? moveInfo.winrate
          : 1 - moveInfo.winrate;

      ctx.fillText(round3(winrate, 100, 1), x, y - r / 2 + fontSize / 5);

      ctx.font = `${fontSize}px Tahoma`;
      const scoreText = calcScoreDiffText(rootInfo, moveInfo);
      ctx.fillText(scoreText, x, y + fontSize / 3);

      // ctx.font = `${fontSize * 0.8}px Tahoma`;
      // ctx.fillStyle = 'black';
      // ctx.textAlign = 'center';
      // ctx.fillText(nFormatter(moveInfo.visits), x, y + r / 4 );

      ctx.font = `${fontSize * 0.8}px Tahoma`;
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(nFormatter(moveInfo.visits), x, y + r / 2 + fontSize / 3);

      const order = moveInfo.order;
      ctx.fillText((order + 1).toString(), x + r, y - r / 2);
    } else {
      ctx.beginPath();
      ctx.arc(x, y, r * 0.6, 0, 2 * Math.PI, true);
      ctx.lineWidth = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0)';
      const gradient = ctx.createRadialGradient(x, y, r * 0.4, x, y, r);
      gradient.addColorStop(0, pColor);
      gradient.addColorStop(0.95, 'rgba(255, 255, 255, 0');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }
}
