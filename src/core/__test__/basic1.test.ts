import Sgf from '../sgf';
import fs from 'fs';
import path from 'path';
import {MoveProp} from '../props';

describe('basic1.sgf testing', () => {
  const basic1 = fs.readFileSync(
    path.resolve(__dirname, 'examples/basic1.sgf'),
    'utf8'
  );

  let sgf = new Sgf();
  beforeEach(() => {
    sgf = new Sgf();
    sgf.parse(basic1);
  });

  const walk = (sgf: Sgf, strategy: 'pre' | 'post' | 'breadth') => {
    let results = '';
    sgf.root?.walk(
      {strategy},
      node => {
        node.model.moveProps.forEach((p: MoveProp) => {
          results += `;${p.token}[${p.value}]`;
        });
        node.model.setupProps.forEach((p: MoveProp) => {
          const vals = p.values.map(v => `[${v}]`);
          results += `;${p.token}${vals.join('')}`;
        });
        return true;
      },
      []
    );
    return results;
  };

  test('Initial SGF instance', () => {
    expect(sgf.tree).not.toBeNull();
  });

  test('Root Node should be included rootProps', () => {
    const idArray = sgf.root?.model.rootProps.map(
      ({token}: {token: string}) => token
    );
    const valueArray = sgf.root?.model.rootProps.map(
      ({value}: {value: string}) => value
    );
    expect(sgf.root?.model.rootProps.length).toBe(6);
    expect(idArray).toContain('FF');
    expect(idArray).toContain('GM');
    expect(idArray).toContain('CA');
    expect(idArray).toContain('AP');
    expect(idArray).toContain('SZ');
    expect(idArray).toContain('ST');
    expect(valueArray).toContain('4');
    expect(valueArray).toContain('1');
    expect(valueArray).toContain('UTF-8');
    expect(valueArray).toContain('besogo:0.0.2-alpha');
    expect(valueArray).toContain('19');
    expect(valueArray).toContain('2');
  });

  test('Preorder traversal', () => {
    const results = walk(sgf, 'pre');
    expect(results).toBe(
      ';B[ni];W[ol];B[mm];W[il];B[ih];AB[gc][gg][gk][go][jc][nc];AW[pe][pi][qm];W[oo];B[kq];W[hm];B[lh];W[if];B[fj]'
    );
  });

  test('Breadth traversal', () => {
    const results = walk(sgf, 'breadth');
    expect(results).toBe(
      ';B[ni];W[ol];B[mm];W[il];B[ih];B[lh];AB[gc][gg][gk][go][jc][nc];AW[pe][pi][qm];W[if];W[oo];B[fj];B[kq];W[hm]'
    );
  });

  test('Postorder traversal', () => {
    const results = walk(sgf, 'post');
    expect(results).toBe(
      ';W[hm];B[kq];W[oo];AB[gc][gg][gk][go][jc][nc];AW[pe][pi][qm];B[ih];B[fj];W[if];B[lh];W[il];B[mm];W[ol];B[ni]'
    );
  });

  test('to Sgf string', () => {
    expect(sgf.toSgf()).toBe(
      '(;FF[4]GM[1]CA[UTF-8]AP[besogo:0.0.2-alpha]SZ[19]ST[2];B[ni];W[ol];B[mm];W[il](;B[ih];AB[gc][gg][gk][go][jc][nc]AW[pe][pi][qm];W[oo];B[kq];W[hm])(;B[lh];W[if];B[fj]))'
    );
  });
});
