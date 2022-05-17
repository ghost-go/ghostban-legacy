export default class Stone {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    r: number;
    ki: number;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, ki: number);
    draw(): void;
}
