export default class Markup {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    s: number;
    ki: number;
    val: string | number;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, ki: number, val?: string | number);
    draw(): void;
}
