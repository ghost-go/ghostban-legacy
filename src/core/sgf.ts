import {compact, replace} from 'lodash';
import matchAll from 'string.prototype.matchall';

import TreeModel from 'tree-model';
import {
  MoveProp,
  SetupProp,
  RootProp,
  GameInfoProp,
  SgfPropBase,
  NodeAnnotationProp,
  MoveAnnotationProp,
  MarkupProp,
  CustomProp,
  ROOT_PROP_LIST,
  MOVE_PROP_LIST,
  SETUP_PROP_LIST,
  MARKUP_PROP_LIST,
  NODE_ANNOTATION_PROP_LIST,
  MOVE_ANNOTATION_PROP_LIST,
  GAME_INFO_PROP_LIST,
  CUSTOM_PROP_LIST,
} from './props';
import type {SgfNode} from './types';
import {getDeduplicatedProps, getNodeNumber} from '../helper';
import {calcSHA} from '../helper';

export default class Sgf {
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
    node.walk((n: TreeModel.Node<SgfNode>) => {
      const {
        rootProps,
        moveProps,
        customProps,
        setupProps,
        markupProps,
        nodeAnnotationProps,
        moveAnnotationProps,
        gameInfoProps,
      } = n.model;
      const nodes = compact([
        ...rootProps,
        ...customProps,
        ...moveProps,
        ...getDeduplicatedProps(setupProps),
        ...getDeduplicatedProps(markupProps),
        ...gameInfoProps,
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

  toSgfWithoutAnalysis() {
    const sgf = `(${this.nodeToString(this.root)})`;
    return replace(sgf, /](A\[.*?\])/g, ']');
  }

  parse(sgf: string) {
    if (!sgf) return;
    // sgf = sgf.replace(/(\r\n|\n|\r)/gm, '');
    let nodeStart = 0;
    let counter = 0;
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
          const gameInfoProps: GameInfoProp[] = [];
          const nodeAnnotationProps: NodeAnnotationProp[] = [];
          const moveAnnotationProps: MoveAnnotationProp[] = [];
          const customProps: CustomProp[] = [];

          const matches = [
            ...matchAll(
              content,
              // eslint-disable-next-line no-useless-escape
              // RegExp(/([A-Z]+\[[a-z\[\]]*\]+)/, 'g')
              // RegExp(/([A-Z]+\[.*?\]+)/, 'g')
              // RegExp(/[A-Z]+(\[.*?\]){1,}/, 'g')
              RegExp(/[A-Z]+(\[[\s\S]*?\]){1,}/, 'g')
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
              if (GAME_INFO_PROP_LIST.includes(token))
                gameInfoProps.push(GameInfoProp.from(m[0]));
              if (NODE_ANNOTATION_PROP_LIST.includes(token)) {
                nodeAnnotationProps.push(NodeAnnotationProp.from(m[0]));
              }
              if (MOVE_ANNOTATION_PROP_LIST.includes(token))
                moveAnnotationProps.push(MoveAnnotationProp.from(m[0]));
              if (CUSTOM_PROP_LIST.includes(token))
                customProps.push(CustomProp.from(m[0]));
            }
          });

          if (matches.length > 0) {
            const sha = calcSHA(this.currentNode, moveProps, setupProps);
            const node = this.tree.parse<SgfNode>({
              id: sha,
              name: sha,
              index: counter,
              number: 0,
              moveProps,
              setupProps,
              rootProps,
              markupProps,
              gameInfoProps,
              nodeAnnotationProps,
              moveAnnotationProps,
              customProps,
            });

            if (this.currentNode) {
              this.currentNode.addChild(node);

              node.model.number = getNodeNumber(node);
              node.model.children = [node];
            } else {
              this.root = node;
              this.parentNode = node;
            }
            this.currentNode = node;
            counter += 1;
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
