import Stone from './base';

export class ImageStone extends Stone {
  mod: number;
  blacks: any;
  whites: any;
  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    ki: number,
    mod: number,
    blacks: any,
    whites: any
  ) {
    super(ctx, x, y, r, ki);
    this.mod = mod;
    this.blacks = blacks;
    this.whites = whites;
  }

  draw() {
    const {ctx, x, y, r, ki, blacks, whites, mod} = this;
    if (r <= 0) return;
    let img;
    if (ki === 1) {
      img = blacks[mod % blacks.length];
    } else {
      img = whites[mod % whites.length];
    }
    if (img) {
      ctx.drawImage(img, x - r, y - r, r * 2, r * 2);
    }
  }
}
