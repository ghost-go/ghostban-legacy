import Markup from './MarkupBase';

export class TriangleMarkup extends Markup {
  draw() {
    const {ctx, x, y, s, ki} = this;
    const radius = s * 0.5;
    let size = radius * 0.75;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x - size * Math.cos(0.523), y + size * Math.sin(0.523));
    ctx.lineTo(x + size * Math.cos(0.523), y + size * Math.sin(0.523));

    ctx.lineWidth = 2;
    if (ki === 1) {
      ctx.strokeStyle = '#fff';
    } else if (ki === -1) {
      ctx.strokeStyle = '#000';
    } else {
      ctx.lineWidth = 3;
      size = radius * 0.7;
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
