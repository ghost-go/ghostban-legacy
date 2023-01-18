export declare type ConsumedAnalysis = {
    results: Analysis[];
    params: AnalysisParams | null;
};
export declare type Analysis = {
    id: string;
    isDuringSearch: boolean;
    moveInfos: MoveInfo[];
    rootInfo: RootInfo;
    policy: number[];
    ownership: number[];
    turnNumber: number;
};
export declare type AnalysisParams = {
    id: string;
    initialPlayer: string;
    moves: any[];
    rules: string;
    komi: string;
    boardXSize: number;
    boardYSize: number;
    includePolicy: boolean;
    priority: number;
    maxVisits: number;
};
export declare type MoveInfo = {
    isSymmetryOf: string;
    lcb: number;
    move: string;
    order: number;
    prior: number;
    pv: string[];
    scoreLead: number;
    scoreMean: number;
    scoreSelfPlay: number;
    scoreStdev: number;
    utility: number;
    utilityLcb: number;
    visits: number;
    winrate: number;
};
export declare type RootInfo = {
    currentPlayer: string;
    lcb: number;
    scoreLead: number;
    scoreSelfplay: number;
    scoreStdev: number;
    symHash: string;
    thisHash: string;
    utility: number;
    visits: number;
    winrate: number;
};
export declare enum Ki {
    Black = 1,
    White = -1,
    Empty = 0
}
export declare enum Theme {
    BlackAndWhite = "black-and-white",
    Flat = "flat",
    Subdued = "subdued",
    ShellStone = "shell",
    SlateAndShell = "slate-and-shell",
    Walnut = "walnet",
    Photorealistic = "photorealistic"
}
export declare enum Center {
    TopRight = "tr",
    TopLeft = "tl",
    BottomLeft = "bl",
    BottomRight = "br",
    Center = "c"
}
export declare enum Markup {
    Current = "cu",
    Circle = "ci",
    Square = "sq",
    Triangle = "tri",
    Cross = "cr",
    Number = "num",
    Letter = "le",
    None = ""
}
