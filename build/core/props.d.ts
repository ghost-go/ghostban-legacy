export declare const MOVE_PROP_LIST: string[];
export declare const SETUP_PROP_LIST: string[];
export declare const NODE_ANNOTATION_PROP_LIST: string[];
export declare const MOVE_ANNOTATION_PROP_LIST: string[];
export declare const MARKUP_PROP_LIST: string[];
export declare const ROOT_PROP_LIST: string[];
export declare const GAME_INFO_PROP_LIST: string[];
export declare const TIMING_PROP_LIST: string[];
export declare const MISCELLANEOUS_PROP_LIST: string[];
export declare const CUSTOM_PROP_LIST: string[];
export declare const LIST_OF_POINTS_PROP: string[];
export declare class SgfPropBase {
    token: string;
    value: string;
    values: string[];
    type: string;
    constructor(token: string, value: string, values?: string[]);
    toString(): string;
}
export declare class MoveProp extends SgfPropBase {
    constructor(token: string, value: string, values?: string[]);
    static from(str: string): MoveProp;
}
export declare class SetupProp extends SgfPropBase {
    constructor(token: string, value: string, values?: string[]);
    static from(str: string): SetupProp;
}
export declare class NodeAnnotationProp extends SgfPropBase {
    constructor(token: string, value: string);
    static from(str: string): NodeAnnotationProp;
}
export declare class MoveAnnotationProp extends SgfPropBase {
    constructor(token: string, value: string);
    static from(str: string): MoveAnnotationProp;
}
export declare class AnnotationProp extends SgfPropBase {
}
export declare class MarkupProp extends SgfPropBase {
    constructor(token: string, value: string);
    static from(str: string): MarkupProp;
}
export declare class RootProp extends SgfPropBase {
    constructor(token: string, value: string);
    static from(str: string): RootProp;
}
export declare class GameInfoProp extends SgfPropBase {
    constructor(token: string, value: string);
    static from(str: string): GameInfoProp;
}
export declare class CustomProp extends SgfPropBase {
    constructor(token: string, value: string);
    static from(str: string): CustomProp;
}
export declare class TimingProp extends SgfPropBase {
    constructor(token: string, value: string);
}
export declare class MiscellaneousProp extends SgfPropBase {
}
