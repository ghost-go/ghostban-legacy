import chunk from 'lodash/chunk';
import {Theme} from './types';

const settings = {cdn: 'https://s.shaowq.com'};

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
export const A1_LETTERS_WITH_I = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
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
    board: `${settings.cdn}/assets/theme/subdued/board.png`,
    blacks: [`${settings.cdn}/assets/theme/subdued/black.png`],
    whites: [`${settings.cdn}/assets/theme/subdued/white.png`],
  },
  [Theme.ShellStone]: {
    board: `${settings.cdn}/assets/theme/shell-stone/board.png`,
    blacks: [`${settings.cdn}/assets/theme/shell-stone/black.png`],
    whites: [
      `${settings.cdn}/assets/theme/shell-stone/white0.png`,
      `${settings.cdn}/assets/theme/shell-stone/white1.png`,
      `${settings.cdn}/assets/theme/shell-stone/white2.png`,
      `${settings.cdn}/assets/theme/shell-stone/white3.png`,
      `${settings.cdn}/assets/theme/shell-stone/white4.png`,
    ],
  },
  [Theme.SlateAndShell]: {
    board: `${settings.cdn}/assets/theme/slate-and-shell/board.png`,
    blacks: [
      `${settings.cdn}/assets/theme/slate-and-shell/slate1.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/slate2.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/slate3.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/slate4.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/slate5.png`,
    ],
    whites: [
      `${settings.cdn}/assets/theme/slate-and-shell/shell1.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/shell2.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/shell3.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/shell4.png`,
      `${settings.cdn}/assets/theme/slate-and-shell/shell5.png`,
    ],
  },
  [Theme.Walnut]: {
    board: `${settings.cdn}/assets/theme/walnut/board.jpg`,
    blacks: [`${settings.cdn}/assets/theme/walnut/black.png`],
    whites: [`${settings.cdn}/assets/theme/walnut/white.png`],
  },
  [Theme.Photorealistic]: {
    board: `${settings.cdn}/assets/theme/photorealistic/board.png`,
    blacks: [`${settings.cdn}/assets/theme/photorealistic/black.png`],
    whites: [`${settings.cdn}/assets/theme/photorealistic/white.png`],
  },
  [Theme.Flat]: {
    blacks: [],
    whites: [],
  },
};
