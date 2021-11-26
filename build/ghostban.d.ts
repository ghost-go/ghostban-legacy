import { Matrix } from 'mathjs';
import { Theme, Ki } from './types';
export declare type GhostBanOptions = {
    boardSize: number;
    size?: number;
    padding: number;
    zoom?: boolean;
    extend: number;
    theme?: Theme;
    coordinates: boolean;
    interactive: boolean;
};
declare type GhostBanOptionsParams = {
    boardSize?: number;
    size?: number;
    padding?: number;
    zoom?: boolean;
    extend?: number;
    theme?: Theme;
    interactive?: boolean;
    coordinates?: boolean;
};
export declare class GhostBan {
    options: GhostBanOptions;
    dom: HTMLElement | undefined;
    canvas?: HTMLCanvasElement;
    resources: {
        board: HTMLImageElement | null;
        white: HTMLImageElement[];
        black: HTMLImageElement[];
    };
    private _turn;
    cursor: [number, number];
    mat: Matrix;
    marks: Matrix;
    maxhv: number;
    transMat: DOMMatrix;
    constructor(options?: GhostBanOptionsParams);
    setTurn(turn: Ki): void;
    resize(): void;
    init(dom: HTMLElement): void;
    setOptions(options: GhostBanOptionsParams): void;
    setInteractive(value: boolean): void;
    setTheme(theme: Theme): void;
    render(mat?: Matrix, marks?: Matrix): void;
    clearCanvas: () => void;
    drawMarks: (matrix: Matrix) => void;
    drawBan: () => void;
    drawBoardLine: (visibleArea?: number[][]) => void;
    drawStars: (visibleArea?: number[][]) => void;
    drawCoordinates: (visibleArea?: number[][]) => void;
    calcSpaceAndPadding: () => {
        space: number;
        scaledPadding: number;
    };
    drawCursor: (visibleArea: number[][]) => void;
    drawStones: (matrix: Matrix) => void;
}
export {};
