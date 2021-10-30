import { Matrix } from 'mathjs';
export declare function canMove(mat: Matrix, i: number, j: number, ki: number): boolean;
export declare function move(mat: Matrix, i: number, j: number, ki: number): Matrix;
export declare function showKi(mat: Matrix, steps: string[], isPonnuki?: boolean): {
    arrangement: Matrix;
    hasMoved: boolean;
};
