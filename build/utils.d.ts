import { Matrix } from 'mathjs';
import { Center } from './types';
export declare const zeros: {
    (size: number | number[], format?: string | undefined): Matrix | import("mathjs").MathArray;
    (m: number, n: number, format?: string | undefined): Matrix | import("mathjs").MathArray;
} | undefined, matrix: {
    (format?: "sparse" | "dense" | undefined): Matrix;
    (data: Matrix | import("mathjs").MathArray, format?: "sparse" | "dense" | undefined, dataType?: string | undefined): Matrix;
} | undefined, forEach: (<T extends Matrix | import("mathjs").MathArray>(x: T, callback: (value: any, index: any, matrix: T) => void) => void) | undefined;
export declare const calcMost: (mat: Matrix, boardSize?: number) => {
    leftMost: number;
    rightMost: number;
    topMost: number;
    bottomMost: number;
};
export declare const calcCenter: (mat: Matrix, boardSize?: number) => Center.TopRight | Center.TopLeft | Center.BottomLeft | Center.BottomRight | undefined;
export declare const calcVisibleArea: (mat: Matrix, boardSize?: number, extend?: number) => {
    visibleArea: number[][];
    center: Center | undefined;
};
export declare function canMove(mat: Matrix, i: number, j: number, ki: number): boolean;
export declare function move(mat: Matrix, i: number, j: number, ki: number): Matrix;
export declare function showKi(mat: Matrix, steps: string[], isPonnuki?: boolean): {
    arrangement: Matrix;
    hasMoved: boolean;
};
