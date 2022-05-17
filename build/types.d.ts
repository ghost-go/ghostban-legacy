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
import { MoveProp, SetupProp, RootProp, NodeAnnotationProp, MoveAnnotationProp, MarkupProp } from './props';
export declare type SgfNode = {
    id: string;
    name: string;
    attributes: {
        [key: string]: string;
    };
    moveProps: MoveProp[];
    setupProps: SetupProp[];
    rootProps: RootProp[];
    markupProps: MarkupProp[];
    nodeAnnotationProps: NodeAnnotationProp[];
    moveAnnotationProps: MoveAnnotationProp[];
};
