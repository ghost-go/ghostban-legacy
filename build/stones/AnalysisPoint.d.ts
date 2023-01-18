import { MoveInfo, RootInfo } from '../types';
export default class AnalysisPoint {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    r: number;
    rootInfo: RootInfo;
    moveInfo: MoveInfo;
    norm: number;
    detail: boolean;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rootInfo: RootInfo, moveInfo: MoveInfo, norm: number, detail: boolean);
    draw(): void;
}
