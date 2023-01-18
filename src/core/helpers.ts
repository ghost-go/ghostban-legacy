import TreeModel from 'tree-model';
import {RootProp} from './props';
const tree: TreeModel = new TreeModel();

const initRootProps = [
  'FF[4]',
  'GM[1]',
  'CA[UTF-8]',
  'AP[ghostgo:0.1.0]',
  'SZ[19]',
  'ST[0]',
].map(p => RootProp.from(p));

export const initialRoot = () =>
  tree.parse({
    id: 'root',
    name: 0,
    index: 0,
    number: 0,
    rootProps: initRootProps,
    moveProps: [],
    setupProps: [],
    markupProps: [],
    gameInfoProps: [],
    nodeAnnotationProps: [],
    moveAnnotationProps: [],
    customProps: [],
  });
