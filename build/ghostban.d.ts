import { Theme, Ki } from './types';
export declare type GhostBanOptions = {
    boardSize: number;
    size?: number;
    padding: number;
    zoom?: boolean;
    extend: number;
    theme: Theme;
    coordinate: boolean;
    interactive: boolean;
    background?: boolean;
};
export declare type GhostBanOptionsParams = {
    boardSize?: number;
    size?: number;
    padding?: number;
    zoom?: boolean;
    extend?: number;
    theme?: Theme;
    interactive?: boolean;
    coordinate?: boolean;
    background?: boolean;
};
export declare class GhostBan {
    defaultOptions: GhostBanOptions;
    options: GhostBanOptions;
    dom: HTMLElement | undefined;
    canvas?: HTMLCanvasElement;
    board?: HTMLCanvasElement;
    private _turn;
    cursor: [number, number];
    cursorPos: DOMPoint;
    mat: number[][];
    markup: (string | number)[][];
    maxhv: number;
    transMat: DOMMatrix;
    constructor(options?: GhostBanOptionsParams);
    getCanvas(): HTMLCanvasElement | undefined;
    setTurn(turn: Ki): void;
    resize(): void;
    init(dom: HTMLElement): void;
    setOptions(options: GhostBanOptionsParams): void;
    renderInteractive(): void;
    setTheme(theme: Theme): void;
    render(mat?: number[][], markup?: (string | number)[][]): void;
    clearCanvas: () => void;
    drawMarkup: (mat: number[][], markup: (string | number)[][]) => void;
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
