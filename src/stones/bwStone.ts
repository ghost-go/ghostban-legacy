import Stone from './base';

export default class BwStone extends Stone {
  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    ki: number
  ) {
    super(ctx, x, y, r, ki);
  }

  draw() {
    const {ctx, x, y, r, ki} = this;
    if (r <= 0) return;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';
    if (ki === 1) {
      ctx.fillStyle = '#000';
    } else if (ki === -1) {
      ctx.fillStyle = '#fff';
    }
    ctx.fill();
    ctx.stroke();
  }
}
