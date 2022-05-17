import Markup from './MarkupBase';

export class CircleMarkup extends Markup {
  draw() {
    const {ctx, x, y, s, ki} = this;
    const radius = s * 0.5;
    let size = radius * 0.65;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    if (ki === 1) {
      ctx.strokeStyle = '#fff';
    } else if (ki === -1) {
      ctx.strokeStyle = '#000';
    } else {
      ctx.lineWidth = 3;
      size = radius * 0.7;
    }
    if (size > 0) {
      ctx.arc(x, y, size, 0, 2 * Math.PI, true);
      ctx.stroke();
    }
    ctx.restore();
  }
}
