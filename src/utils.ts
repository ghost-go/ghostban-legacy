/* eslint-disable @typescript-eslint/no-non-null-assertion */

import cloneDeep from 'lodash/cloneDeep';
import {sgfToPos} from './helper';
import {Center} from './types';

export const zeros = (size: [number, number]) =>
  new Array(size[0]).fill(0).map(() => new Array(size[1]).fill(0));

export const empty = (size: [number, number]): string[][] =>
  new Array(size[0]).fill('').map(() => new Array(size[1]).fill(''));

const GRID = 19;
let liberties = 0;
let recursionPath: string[] = [];

export const calcMost = (mat: number[][], boardSize = 19) => {
  let leftMost: number = boardSize - 1;
  let rightMost = 0;
  let topMost: number = boardSize - 1;
  let bottomMost = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const value = mat[i][j];
      if (value !== 0) {
        if (leftMost > i) leftMost = i;
        if (rightMost < i) rightMost = i;
        if (topMost > j) topMost = j;
        if (bottomMost < j) bottomMost = j;
      }
    }
  }
  return {leftMost, rightMost, topMost, bottomMost};
};

export const calcCenter = (mat: number[][], boardSize = 19) => {
  const {leftMost, rightMost, topMost, bottomMost} = calcMost(mat, boardSize);
  const top = topMost < boardSize - 1 - bottomMost;
  const left = leftMost < boardSize - 1 - rightMost;
  if (top && left) return Center.TopLeft;
  if (!top && left) return Center.BottomLeft;
  if (top && !left) return Center.TopRight;
  if (!top && !left) return Center.BottomRight;
  return Center.Center;
};

export const calcVisibleArea = (
  mat: number[][],
  boardSize = 19,
  extend = 2
) => {
  const center = calcCenter(mat);
  const {leftMost, rightMost, topMost, bottomMost} = calcMost(mat, boardSize);
  let visibleArea = [
    [0, 18],
    [0, 18],
  ];
  let visibleSize = boardSize - 1;
  if (center === Center.TopLeft) {
    visibleSize = Math.min(
      Math.max(rightMost, bottomMost) + extend,
      boardSize - 1
    );
    visibleArea = [
      [0, visibleSize],
      [0, visibleSize],
    ];
  } else if (center === Center.TopRight) {
    visibleSize = Math.min(
      Math.max(bottomMost + extend, boardSize - 1 - (leftMost - extend)),
      boardSize - 1
    );
    visibleArea = [
      [boardSize - 1 - visibleSize, 18],
      [0, visibleSize],
    ];
  } else if (center === Center.BottomLeft) {
    visibleSize = Math.min(
      Math.max(boardSize - 1 - (topMost - extend), rightMost + extend),
      boardSize - 1
    );
    visibleArea = [
      [0, visibleSize],
      [boardSize - 1 - visibleSize, 18],
    ];
  } else if (center === Center.BottomRight) {
    visibleSize = Math.min(
      Math.max(
        boardSize - 1 - (topMost - extend),
        boardSize - 1 - (leftMost - extend)
      ),
      boardSize - 1
    );
    // console.log('vs', visibleSize);
    visibleArea = [
      [boardSize - 1 - visibleSize, 18],
      [boardSize - 1 - visibleSize, 18],
    ];
  }
  return {visibleArea, center};
};

function calcLibertyCore(mat: number[][], x: number, y: number, ki: number) {
  if (x >= 0 && x < GRID && y >= 0 && y < GRID) {
    if (mat[x][y] === ki && !recursionPath.includes(`${x},${y}`)) {
      recursionPath.push(`${x},${y}`);
      calcLibertyCore(mat, x - 1, y, ki);
      calcLibertyCore(mat, x + 1, y, ki);
      calcLibertyCore(mat, x, y - 1, ki);
      calcLibertyCore(mat, x, y + 1, ki);
    } else if (mat[x][y] === 0) {
      liberties += 1;
    }
  }
}

function calcLiberty(mat: number[][], x: number, y: number, ki: number) {
  liberties = 0;
  recursionPath = [];

  if (x < 0 || y < 0 || x > GRID - 1 || y > GRID - 1) {
    return {
      liberty: 4,
      recursionPath: [],
    };
  }

  if (mat[x][y] === 0) {
    return {
      liberty: 4,
      recursionPath: [],
    };
  }
  calcLibertyCore(mat, x, y, ki);
  return {
    liberty: liberties,
    recursionPath,
  };
}

function execPonnuki(mat: number[][], i: number, j: number, ki: number) {
  const newMat = cloneDeep(mat);
  const {liberty: libertyUp, recursionPath: recursionPathUp} = calcLiberty(
    mat,
    i,
    j - 1,
    ki
  );
  const {liberty: libertyDown, recursionPath: recursionPathDown} = calcLiberty(
    mat,
    i,
    j + 1,
    ki
  );
  const {liberty: libertyLeft, recursionPath: recursionPathLeft} = calcLiberty(
    mat,
    i - 1,
    j,
    ki
  );
  const {liberty: libertyRight, recursionPath: recursionPathRight} =
    calcLiberty(mat, i + 1, j, ki);
  if (libertyUp === 0) {
    recursionPathUp.forEach(item => {
      const coord = item.split(',');
      newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  if (libertyDown === 0) {
    recursionPathDown.forEach(item => {
      const coord = item.split(',');
      newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  if (libertyLeft === 0) {
    recursionPathLeft.forEach(item => {
      const coord = item.split(',');
      newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  if (libertyRight === 0) {
    recursionPathRight.forEach(item => {
      const coord = item.split(',');
      newMat[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  return newMat;
}

function canPonnuki(mat: number[][], i: number, j: number, ki: number) {
  const {liberty: libertyUp, recursionPath: recursionPathUp} = calcLiberty(
    mat,
    i,
    j - 1,
    ki
  );
  const {liberty: libertyDown, recursionPath: recursionPathDown} = calcLiberty(
    mat,
    i,
    j + 1,
    ki
  );
  const {liberty: libertyLeft, recursionPath: recursionPathLeft} = calcLiberty(
    mat,
    i - 1,
    j,
    ki
  );
  const {liberty: libertyRight, recursionPath: recursionPathRight} =
    calcLiberty(mat, i + 1, j, ki);
  if (libertyUp === 0 && recursionPathUp.length > 0) {
    return true;
  }
  if (libertyDown === 0 && recursionPathDown.length > 0) {
    return true;
  }
  if (libertyLeft === 0 && recursionPathLeft.length > 0) {
    return true;
  }
  if (libertyRight === 0 && recursionPathRight.length > 0) {
    return true;
  }
  return false;
}

export function canMove(mat: number[][], i: number, j: number, ki: number) {
  if (i < 0 || j < 0) return true;
  const newMat = cloneDeep(mat);
  if (newMat[i][j] !== 0) {
    return false;
  }

  newMat[i][j] = ki;
  const {liberty} = calcLiberty(newMat, i, j, ki);
  if (canPonnuki(newMat, i, j, -ki)) {
    return true;
  }
  if (canPonnuki(newMat, i, j, ki)) {
    return false;
  }
  if (liberty === 0) {
    return false;
  }
  return true;
}

export function move(mat: number[][], i: number, j: number, ki: number) {
  if (i < 0 || j < 0) return mat;
  const newMat = cloneDeep(mat);
  newMat[i][j] = ki;
  return execPonnuki(newMat, i, j, -ki);
}

export function showKi(mat: number[][], steps: string[], isPonnuki = true) {
  let newMat = cloneDeep(mat);
  let hasMoved = false;
  steps.forEach(str => {
    const {
      x,
      y,
      ki,
    }: {
      x: number;
      y: number;
      ki: number;
    } = sgfToPos(str);
    if (isPonnuki) {
      if (canMove(newMat, x, y, ki)) {
        newMat[x][y] = ki;
        newMat = execPonnuki(newMat, x, y, -ki);
        hasMoved = true;
      }
    } else {
      newMat[x][y] = ki;
      hasMoved = true;
    }
  });

  return {
    arrangement: newMat,
    hasMoved,
  };
}
