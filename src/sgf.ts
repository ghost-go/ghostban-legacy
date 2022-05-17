import _ from 'lodash';
import TreeModel from 'tree-model';
import {
  MoveProp,
  SetupProp,
  RootProp,
  SgfPropBase,
  NodeAnnotationProp,
  MoveAnnotationProp,
  MarkupProp,
  ROOT_PROP_LIST,
  MOVE_PROP_LIST,
  SETUP_PROP_LIST,
  MARKUP_PROP_LIST,
  NODE_ANNOTATION_PROP_LIST,
  MOVE_ANNOTATION_PROP_LIST,
} from './props';
import type {SgfNode} from './types';

export class Sgf {
  NEW_NODE = ';';
  BRANCHING = ['(', ')'];
  PROPERTY = ['[', ']'];
  LIST_IDENTITIES = [
    'AW',
    'AB',
    'AE',
    'AR',
    'CR',
    'DD',
    'LB',
    'LN',
    'MA',
    'SL',
    'SQ',
    'TR',
    'VW',
    'TB',
    'TW',
  ];
  NODE_DELIMITERS = [this.NEW_NODE].concat(this.BRANCHING);

  tree: TreeModel = new TreeModel();
  root: TreeModel.Node<SgfNode> | null = null;
  node: TreeModel.Node<SgfNode> | null = null;
  currentNode: TreeModel.Node<SgfNode> | null = null;
  parentNode: TreeModel.Node<SgfNode> | null = null;
  nodeProps: Map<string, string> = new Map();
  sgf = '';

  fromRoot(root: TreeModel.Node<SgfNode>) {
    this.root = root;
    return this;
  }

  nodeToString(node: any) {
    let content = '';
    node.walk({strategy: 'pre'}, (n: TreeModel.Node<SgfNode>) => {
      const {
        rootProps,
        moveProps,
        setupProps,
        markupProps,
        nodeAnnotationProps,
        moveAnnotationProps,
      } = n.model;
      const nodes = _.compact([
        ...rootProps,
        ...moveProps,
        ...setupProps,
        ...markupProps,
        ...nodeAnnotationProps,
        ...moveAnnotationProps,
      ]);
      content += ';';
      nodes.forEach((n: SgfPropBase) => {
        content += n.toString();
      });
      if (n.children.length > 1) {
        n.children.forEach((child: SgfPropBase) => {
          content += `(${this.nodeToString(child)})`;
        });
      }
      return n.children.length < 2;
    });
    return content;
  }

  toSgf() {
    return `(${this.nodeToString(this.root)})`;
  }

  parse(sgf: string) {
    sgf = sgf.replace(/(\r\n|\n|\r)/gm, '');
    let nodeStart = 0;
    const counter = 0;
    const stack: TreeModel.Node<SgfNode>[] = [];

    for (let i = 0; i < sgf.length; i++) {
      const c = sgf[i];
      if (this.NODE_DELIMITERS.includes(c)) {
        const content = sgf.slice(nodeStart, i);
        if (content !== '') {
          const moveProps: MoveProp[] = [];
          const setupProps: SetupProp[] = [];
          const rootProps: RootProp[] = [];
          const markupProps: MarkupProp[] = [];
          const nodeAnnotationProps: NodeAnnotationProp[] = [];
          const moveAnnotationProps: MoveAnnotationProp[] = [];

          const matches = [
            ...content.matchAll(
              // eslint-disable-next-line no-useless-escape
              // RegExp(/([A-Z]+\[[a-z\[\]]*\]+)/, 'g')
              // RegExp(/([A-Z]+\[.*?\]+)/, 'g')
              RegExp(/[A-Z]+(\[.*?\]){1,}/, 'g')
            ),
          ];

          matches.forEach(m => {
            const tokenMatch = m[0].match(/([A-Z]+)\[/);
            if (tokenMatch) {
              const token = tokenMatch[1];
              if (MOVE_PROP_LIST.includes(token))
                moveProps.push(MoveProp.from(m[0]));
              if (SETUP_PROP_LIST.includes(token))
                setupProps.push(SetupProp.from(m[0]));
              if (ROOT_PROP_LIST.includes(token))
                rootProps.push(RootProp.from(m[0]));
              if (MARKUP_PROP_LIST.includes(token))
                markupProps.push(MarkupProp.from(m[0]));
              if (NODE_ANNOTATION_PROP_LIST.includes(token))
                nodeAnnotationProps.push(NodeAnnotationProp.from(m[0]));
              if (MOVE_ANNOTATION_PROP_LIST.includes(token))
                moveAnnotationProps.push(MoveAnnotationProp.from(m[0]));
            }
          });

          if (matches.length > 0) {
            const node = this.tree.parse({
              name: counter,
              number: counter,
              moveProps,
              setupProps,
              rootProps,
              markupProps,
              nodeAnnotationProps,
              moveAnnotationProps,
            });

            if (this.currentNode) {
              this.currentNode.addChild(node);
              node.model.children = [node];
            } else {
              this.root = node;
              this.parentNode = node;
            }
            this.currentNode = node;
          }
        }
      }
      if (c === '(' && this.currentNode) {
        stack.push(this.currentNode);
      }
      if (c === ')' && stack.length > 0) {
        const node = stack.pop();
        if (node) {
          this.currentNode = node;
        }
      }

      if (this.NODE_DELIMITERS.includes(c)) {
        nodeStart = i;
      }
    }
  }
}
