import { Center } from './types';
export declare const zeros: (size: [number, number]) => any[][];
export declare const calcMost: (mat: number[][], boardSize?: number) => {
    leftMost: number;
    rightMost: number;
    topMost: number;
    bottomMost: number;
};
export declare const calcCenter: (mat: number[][], boardSize?: number) => Center.TopRight | Center.TopLeft | Center.BottomLeft | Center.BottomRight | undefined;
export declare const calcVisibleArea: (mat: number[][], boardSize?: number, extend?: number) => {
    visibleArea: number[][];
    center: Center | undefined;
};
export declare function canMove(mat: number[][], i: number, j: number, ki: number): boolean;
export declare function move(mat: number[][], i: number, j: number, ki: number): number[][];
export declare function showKi(mat: number[][], steps: string[], isPonnuki?: boolean): {
    arrangement: number[][];
    hasMoved: boolean;
};
