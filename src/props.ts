export const MOVE_PROP_LIST = ['B', 'KO', 'MN', 'W'];
export const SETUP_PROP_LIST = ['AB', 'AE', 'AW', 'PL'];
export const NODE_ANNOTATION_PROP_LIST = [
  'C',
  'DM',
  'GB',
  'GW',
  'HO',
  'N',
  'UC',
  'V',
];
export const MOVE_ANNOTATION_PROP_LIST = ['BM', 'DO', 'IT', 'TE'];
export const MARKUP_PROP_LIST = [
  'AR',
  'CR',
  'LB',
  'LN',
  'MA',
  'SL',
  'SQ',
  'TR',
];

export const ROOT_PROP_LIST = ['AP', 'CA', 'FF', 'GM', 'ST', 'SZ'];
export const GAME_INFO_PROP_LIST = [
  'AN',
  'BR',
  'BT',
  'CP',
  'DT',
  'EV',
  'GN',
  'GC',
  'ON',
  'OT',
  'PB',
  'PC',
  'PW',
  'RE',
  'RO',
  'RU',
  'SO',
  'TM',
  'US',
  'WR',
  'WT',
];
export const TIMING_PROP_LIST = ['BL', 'OB', 'OW', 'WL'];
export const MISCELLANEOUS_PROP_LIST = ['FG', 'PM', 'VW'];

export const LIST_OF_POINTS_PROP = ['AB', 'AE', 'AW'];
const TOKEN_REGEX = new RegExp(/([A-Z]*)\[(.*?)\]/);

export class SgfPropBase {
  token: string;
  value: string;
  values: string[];
  type: string;

  constructor(token: string, value: string, values?: string[]) {
    this.token = token;
    this.value = value;
    this.values = values || [value];
    this.type = '-';
  }

  toString() {
    return `${this.token}${this.values.map(v => `[${v}]`).join('')}`;
  }
}

export class MoveProp extends SgfPropBase {
  constructor(token: string, value: string, values?: string[]) {
    super(token, value, values);
    this.type = 'move';
  }

  static from(str: string) {
    const match = str.match(/([A-Z]*)\[(.*?)\]/);
    if (match) {
      const token = match[1];
      const val = match[2];
      return new MoveProp(token, val);
    }
    return new MoveProp('', '');
  }
}

export class SetupProp extends SgfPropBase {
  constructor(token: string, value: string, values?: string[]) {
    super(token, value, values);
    this.type = 'setup';
  }

  static from(str: string) {
    // console.log('str', str);
    const tokenMatch = str.match(TOKEN_REGEX);
    const valMatches = str.matchAll(/\[(.*?)\]/g);

    let token = '';
    const vals = [...valMatches].map(m => m[1]);
    // console.log('valMatches', [...valMatches]);
    // console.log('vals', vals);
    if (tokenMatch) token = tokenMatch[1];
    return new SetupProp(token, vals.join(','), vals);
  }
}

export class NodeAnnotationProp extends SgfPropBase {
  constructor(token: string, value: string) {
    super(token, value);
    this.type = 'node-annotation';
  }
  static from(str: string) {
    const match = str.match(/([A-Z]*)\[(.*?)\]/);
    if (match) {
      const token = match[1];
      const val = match[2];
      return new MoveProp(token, val);
    }
    return new MoveProp('', '');
  }
}

export class MoveAnnotationProp extends SgfPropBase {
  constructor(token: string, value: string) {
    super(token, value);
    this.type = 'move-annotation';
  }
  static from(str: string) {
    const match = str.match(/([A-Z]*)\[(.*?)\]/);
    if (match) {
      const token = match[1];
      const val = match[2];
      return new MoveProp(token, val);
    }
    return new MoveProp('', '');
  }
}

export class AnnotationProp extends SgfPropBase {}
export class MarkupProp extends SgfPropBase {
  constructor(token: string, value: string) {
    super(token, value);
    this.type = 'markup';
  }
  static from(str: string) {
    const match = str.match(/([A-Z]*)\[(.*?)\]/);
    if (match) {
      const token = match[1];
      const val = match[2];
      return new MarkupProp(token, val);
    }
    return new MarkupProp('', '');
  }
}

export class RootProp extends SgfPropBase {
  constructor(token: string, value: string) {
    super(token, value);
    this.type = 'root';
  }
  static from(str: string) {
    const match = str.match(/([A-Z]*)\[(.*?)\]/);
    if (match) {
      const token = match[1];
      const val = match[2];
      return new RootProp(token, val);
    }
    return new RootProp('', '');
  }
}

export class GameInfo extends SgfPropBase {
  constructor(token: string, value: string) {
    super(token, value);
    this.type = 'game-info';
  }
}

export class TimingProp extends SgfPropBase {
  constructor(token: string, value: string) {
    super(token, value);
    this.type = 'Timing';
  }
}

export class MiscellaneousProp extends SgfPropBase {}
