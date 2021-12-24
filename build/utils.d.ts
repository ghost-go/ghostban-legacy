import { Matrix as MathMatrix } from 'mathjs';
import { Center } from './types';
export declare const zeros: {
    (size: number | number[], format?: string | undefined): MathMatrix | import("mathjs").MathArray;
    (m: number, n: number, format?: string | undefined): MathMatrix | import("mathjs").MathArray;
}, matrix: {
    (format?: "sparse" | "dense" | undefined): MathMatrix;
    (data: MathMatrix | import("mathjs").MathArray, format?: "sparse" | "dense" | undefined, dataType?: string | undefined): MathMatrix;
}, forEach: <T extends MathMatrix | import("mathjs").MathArray>(x: T, callback: (value: any, index: any, matrix: T) => void) => void;
export declare type Matrix = MathMatrix;
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
export declare function move(mat: Matrix, i: number, j: number, ki: number): MathMatrix;
export declare function showKi(mat: Matrix, steps: string[], isPonnuki?: boolean): {
    arrangement: MathMatrix;
    hasMoved: boolean;
};
