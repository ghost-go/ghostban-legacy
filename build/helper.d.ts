import { SgfNode } from './core/types';
import TreeModel from 'tree-model/types';
import { SgfPropBase } from './core/props';
import { Analysis, MoveInfo, RootInfo } from './types';
export declare const round2: (v: number, scale?: number, fixed?: number) => string;
export declare const round3: (v: number, scale?: number, fixed?: number) => string;
export declare const getDeduplicatedProps: (targetProps: SgfPropBase[]) => SgfPropBase[];
export declare const isMoveNode: (n: TreeModel.Node<SgfNode>) => boolean;
export declare const isRooNode: (n: TreeModel.Node<SgfNode>) => boolean;
export declare const isSetupNode: (n: TreeModel.Node<SgfNode>) => boolean;
export declare const isAnswerNode: (n: TreeModel.Node<SgfNode>, kind: string) => boolean;
export declare const getNodeNumber: (n: TreeModel.Node<SgfNode>, parent?: TreeModel.Node<SgfNode> | undefined) => number;
export declare const calcSHA: (node: TreeModel.Node<SgfNode> | null | undefined, moveProps?: any, setupProps?: any) => string;
export declare const nFormatter: (num: number, fixed?: number) => string;
export declare const pathToIndexes: (path: TreeModel.Node<SgfNode>[]) => number[];
export declare const pathToInitialStones: (path: TreeModel.Node<SgfNode>[], xOffset?: number, yOffset?: number) => string[][];
export declare const pathToAiMoves: (path: TreeModel.Node<SgfNode>[], xOffset?: number, yOffset?: number) => any[][];
export declare const getIndexFromAnalysis: (a: Analysis) => any;
export declare const isMainPath: (node: TreeModel.Node<SgfNode>) => boolean;
export declare const sgfToPos: (str: string) => {
    x: number;
    y: number;
    ki: number;
};
export declare const sgfToA1: (str: string) => string;
export declare const a1ToPos: (move: string) => {
    x: number;
    y: number;
};
export declare const a1ToIndex: (move: string, boardSize?: number) => number;
export declare const sgfOffset: (sgf: any, offset?: number) => any;
export declare const a1ToSGF: (str: any, type?: string, offsetX?: number, offsetY?: number) => string;
export declare const posToSgf: (x: number, y: number, ki: number) => string;
export declare const matToPosition: (mat: number[][], xOffset?: number, yOffset?: number) => string;
export declare const matToListOfTuples: (mat: number[][], xOffset?: number, yOffset?: number) => string[][];
export declare const convertStoneTypeToString: (type: any) => "B" | "W";
export declare const convertStepsForAI: (steps: any, offset?: number) => string;
export declare const reverseOffsetA1Move: (move: string, mat: number[][], analysis: Analysis) => string;
export declare const calcScoreDiffText: (prev?: RootInfo | null | undefined, curr?: MoveInfo | RootInfo | null | undefined, fixed?: number) => string;
export declare const calcWinrateDiffText: (prev?: RootInfo | null | undefined, curr?: MoveInfo | RootInfo | null | undefined, fixed?: number) => string;
export declare const calcScoreDiff: (prevInfo: RootInfo, currInfo: MoveInfo | RootInfo) => number;
export declare const calcWinrateDiff: (prevInfo: RootInfo, currInfo: MoveInfo | RootInfo) => number;
