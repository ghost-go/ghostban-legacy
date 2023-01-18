import { MoveProp, SetupProp, RootProp, NodeAnnotationProp, MoveAnnotationProp, MarkupProp, GameInfoProp, CustomProp } from './props';
export declare type SgfNode = {
    id: string;
    name: string;
    number: number;
    index?: number;
    moveProps: MoveProp[];
    setupProps: SetupProp[];
    rootProps: RootProp[];
    markupProps: MarkupProp[];
    gameInfoProps: GameInfoProp[];
    nodeAnnotationProps: NodeAnnotationProp[];
    moveAnnotationProps: MoveAnnotationProp[];
    customProps: CustomProp[];
};
export declare type SgfNodeOptions = {
    id?: string;
    name?: string;
    number?: number;
    moveProps?: MoveProp[];
    setupProps?: SetupProp[];
    rootProps?: RootProp[];
    markupProps?: MarkupProp[];
    gameInfoProps?: GameInfoProp[];
    nodeAnnotationProps?: NodeAnnotationProp[];
    moveAnnotationProps?: MoveAnnotationProp[];
    customProps?: CustomProp[];
};
