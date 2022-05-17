import Markup from './MarkupBase';

export class SquareMarkup extends Markup {
  draw() {
    const {ctx, x, y, s, ki} = this;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    let size = s * 0.55;
    if (ki === 1) {
      ctx.strokeStyle = '#fff';
    } else if (ki === -1) {
      ctx.strokeStyle = '#000';
    } else {
      size = s * 0.7;
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
    }
    ctx.rect(x - size / 2, y - size / 2, size, size);
    ctx.stroke();
    ctx.restore();
  }
}
