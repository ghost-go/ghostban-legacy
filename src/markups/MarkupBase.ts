export default class Markup {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  s: number;
  ki: number;
  val: string | number;
  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    s: number,
    ki: number,
    val: string | number = ''
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.s = s;
    this.ki = ki;
    this.val = val;
  }
  draw() {
    console.log('TBD');
  }
}
