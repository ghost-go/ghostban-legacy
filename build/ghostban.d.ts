import { Matrix } from 'mathjs';
export declare enum Theme {
    BlackAndWhite = "Black&White",
    Flat = "Flat",
    Subdued = "Subdued",
    ShellStone = "Shell",
    SlateAndShell = "SlateAndShell",
    Walnut = "Walnet",
    Photorealistic = "Photorealistic"
}
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
    #private;
    options: GhostBanOptions;
    dom: HTMLElement | undefined;
    canvas?: HTMLCanvasElement;
    resources: {
        board: HTMLImageElement | null;
        white: HTMLImageElement[];
        black: HTMLImageElement[];
    };
    nextMove: number;
    cursor: [number, number];
    mat: Matrix;
    marks: Matrix;
    maxhv: number;
    transMat: DOMMatrix;
    constructor(options?: GhostBanOptionsParams);
    resize(): void;
    init(dom: HTMLElement): void;
    setOptions(options: GhostBanOptionsParams): void;
    setInteractive(value: boolean): void;
    setTheme(theme: Theme): void;
    render(mat?: Matrix, marks?: Matrix, nextMove?: any): void;
}
export {};
