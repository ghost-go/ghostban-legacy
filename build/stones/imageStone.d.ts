import Stone from './base';
export declare class ImageStone extends Stone {
    mod: number;
    blacks: any;
    whites: any;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, ki: number, mod: number, blacks: any, whites: any);
    draw(): void;
}
