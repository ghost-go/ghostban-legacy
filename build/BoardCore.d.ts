import type { Matrix } from 'mathjs';
export declare function canMove(mat: Matrix, i: number, j: number, ki: number): boolean;
export declare function showKi(array: Matrix, steps: string[], isPonnuki?: boolean): {
    arrangement: Matrix;
    hasMoved: boolean;
};
