export declare const sgfToPos: (str: any) => {
    x: number;
    y: number;
    ki: number;
};
export declare const sgfOffset: (sgf: any, offset?: number) => any;
export declare const a1ToSGF: (str: any, type?: string, offset?: number) => string;
export declare const posToSgf: (x: number, y: number, ki: number) => string;
export declare const convertStoneTypeToString: (type: any) => "B" | "W";
export declare const convertStepsForAI: (steps: any, offset?: number) => string;
