import Markup from './MarkupBase';

export class CrossMarkup extends Markup {
  draw() {
    const {ctx, x, y, s, ki} = this;
    const radius = s * 0.5;
    let size = radius * 0.5;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x - size, y - size);
    ctx.lineTo(x + size, y + size);
    ctx.moveTo(x + size, y - size);
    ctx.lineTo(x - size, y + size);

    ctx.lineWidth = 3;
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
