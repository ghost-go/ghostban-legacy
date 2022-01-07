import { Theme, Ki } from './types';
export declare type GhostBanOptions = {
    boardSize: number;
    size?: number;
    padding: number;
    zoom?: boolean;
    extend: number;
    theme?: Theme;
    coordinate: boolean;
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
    coordinate?: boolean;
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
    cursorPos: DOMPoint;
    mat: number[][];
    marks: string[][];
    maxhv: number;
    transMat: DOMMatrix;
    constructor(options?: GhostBanOptionsParams);
    setTurn(turn: Ki): void;
    resize(): void;
    init(dom: HTMLElement): void;
    setOptions(options: GhostBanOptionsParams): void;
    renderInteractive(): void;
    setTheme(theme: Theme): void;
    render(mat?: number[][], marks?: string[][]): void;
    clearCanvas: () => void;
    drawMarks: (mat: number[][], marks: string[][]) => void;
    drawBan: () => void;
    drawBoardLine: (visibleArea?: number[][]) => void;
    drawStars: (visibleArea?: number[][]) => void;
    drawCoordinate: (visibleArea?: number[][]) => void;
    calcSpaceAndPadding: () => {
        space: number;
        scaledPadding: number;
    };
    drawCursor: (visibleArea: number[][]) => void;
    drawStones: (matrix: number[][]) => void;
}
export {};
