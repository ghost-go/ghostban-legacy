import TreeModel from 'tree-model';
import type { SgfNode } from './types';
export declare class Sgf {
    NEW_NODE: string;
    BRANCHING: string[];
    PROPERTY: string[];
    LIST_IDENTITIES: string[];
    NODE_DELIMITERS: string[];
    tree: TreeModel;
    root: TreeModel.Node<SgfNode> | null;
    node: TreeModel.Node<SgfNode> | null;
    currentNode: TreeModel.Node<SgfNode> | null;
    parentNode: TreeModel.Node<SgfNode> | null;
    nodeProps: Map<string, string>;
    sgf: string;
    fromRoot(root: TreeModel.Node<SgfNode>): this;
    nodeToString(node: any): string;
    toSgf(): string;
    parse(sgf: string): void;
}
