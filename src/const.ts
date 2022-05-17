import chunk from 'lodash/chunk';
import {Theme} from './types';

export const A1_LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
];
export const A1_NUMBERS = [
  19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
export const SGF_LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
];
export const BLANK_ARRAY = chunk(new Array(361).fill(0), 19);
export const GRID = 19;
export const DOT_SIZE = 3;
export const EXPAND_H = 5;
export const EXPAND_V = 5;
export const RESPONSE_TIME = 100;

export const RESOURCES: {
  [key: string]: {board?: string; blacks: string[]; whites: string[]};
} = {
  [Theme.BlackAndWhite]: {
    blacks: [],
    whites: [],
  },
  [Theme.Subdued]: {
    board:
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/subdued/board.png',
    blacks: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/subdued/black.png',
    ],
    whites: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/subdued/white.png',
    ],
  },
  [Theme.ShellStone]: {
    board:
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/board.png',
    blacks: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/black.png',
    ],
    whites: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white0.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white1.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white2.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white3.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/shell-stone/white4.png',
    ],
  },
  [Theme.SlateAndShell]: {
    board:
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/board.png',
    blacks: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate1.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate2.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate3.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate4.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/slate5.png',
    ],
    whites: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell1.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell2.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell3.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell4.png',
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/slate-and-shell/shell5.png',
    ],
  },
  [Theme.Walnut]: {
    board:
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/walnut/board.jpg',
    blacks: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/walnut/black.png',
    ],
    whites: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/walnut/white.png',
    ],
  },
  [Theme.Photorealistic]: {
    board:
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/photorealistic/board.png',
    blacks: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/photorealistic/black.png',
    ],
    whites: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/photorealistic/white.png',
    ],
  },
  [Theme.Flat]: {
    blacks: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/flat/black.svg',
    ],
    whites: [
      'https://ghost-go.oss-cn-beijing.aliyuncs.com/themes/flat/white.svg',
    ],
  },
};
