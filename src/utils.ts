/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {cloneDeep} from 'lodash';
import {
  create,
  Matrix as MathMatrix,
  forEachDependencies,
  zerosDependencies,
  matrixDependencies,
} from 'mathjs';
import {sgfToPos} from './helper';
import {Center} from './types';

export const {zeros, matrix, forEach} = create(
  {
    forEachDependencies,
    zerosDependencies,
    matrixDependencies,
  },
  {}
);

export type Matrix = MathMatrix;

const GRID = 19;
let liberties = 0;
let recursionPath: string[] = [];

export const calcMost = (mat: Matrix, boardSize = 19) => {
  let leftMost: number = boardSize - 1;
  let rightMost = 0;
  let topMost: number = boardSize - 1;
  let bottomMost = 0;
  forEach!(mat, (value: number, index: number[]) => {
    if (value !== 0) {
      if (leftMost > index[0]) leftMost = index[0];
      if (rightMost < index[0]) rightMost = index[0];
      if (topMost > index[1]) topMost = index[1];
      if (bottomMost < index[1]) bottomMost = index[1];
    }
  });
  return {leftMost, rightMost, topMost, bottomMost};
};

export const calcCenter = (mat: Matrix, boardSize = 19) => {
  const {leftMost, rightMost, topMost, bottomMost} = calcMost(mat, boardSize);
  const top = topMost < boardSize - 1 - bottomMost;
  const left = leftMost < boardSize - 1 - rightMost;
  if (top && left) return Center.TopLeft;
  if (!top && left) return Center.BottomLeft;
  if (top && !left) return Center.TopRight;
  if (!top && !left) return Center.BottomRight;
};

export const calcVisibleArea = (mat: Matrix, boardSize = 19, extend = 2) => {
  const center = calcCenter(mat);
  const {leftMost, rightMost, topMost, bottomMost} = calcMost(mat, boardSize);
  let visibleArea = [
    [0, 18],
    [0, 18],
  ];
  let visibleSize = boardSize - 1;
  if (center == Center.TopLeft) {
    visibleSize = Math.min(
      Math.max(rightMost, bottomMost) + extend,
      boardSize - 1
    );
    visibleArea = [
      [0, visibleSize],
      [0, visibleSize],
    ];
  } else if (center == Center.TopRight) {
    visibleSize = Math.min(
      Math.max(bottomMost + extend, boardSize - 1 - (leftMost - extend)),
      boardSize - 1
    );
    visibleArea = [
      [boardSize - 1 - visibleSize, 18],
      [0, visibleSize],
    ];
  } else if (center == Center.BottomLeft) {
    visibleSize = Math.min(
      Math.max(boardSize - 1 - (topMost - extend), rightMost + extend),
      boardSize - 1
    );
    visibleArea = [
      [0, visibleSize],
      [boardSize - 1 - visibleSize, 18],
    ];
  } else if (center == Center.BottomRight) {
    visibleSize = Math.min(
      Math.max(
        boardSize - 1 - (topMost - extend),
        boardSize - 1 - (leftMost - extend)
      ),
      boardSize - 1
    );
    console.log('vs', visibleSize);
    visibleArea = [
      [boardSize - 1 - visibleSize, 18],
      [boardSize - 1 - visibleSize, 18],
    ];
  }
  return {visibleArea, center};
};

function calcLibertyCore(mat: Matrix, x: number, y: number, ki: number) {
  if (x >= 0 && x < GRID && y >= 0 && y < GRID) {
    if (mat.get([x, y]) === ki && !recursionPath.includes(`${x},${y}`)) {
      recursionPath.push(`${x},${y}`);
      calcLibertyCore(mat, x - 1, y, ki);
      calcLibertyCore(mat, x + 1, y, ki);
      calcLibertyCore(mat, x, y - 1, ki);
      calcLibertyCore(mat, x, y + 1, ki);
    } else if (mat.get([x, y]) === 0) {
      liberties += 1;
    }
  }
}

function calcLiberty(mat: Matrix, x: number, y: number, ki: number) {
  liberties = 0;
  recursionPath = [];

  if (x < 0 || y < 0 || x > GRID - 1 || y > GRID - 1) {
    return {
      liberty: 4,
      recursionPath: [],
    };
  }

  if (mat.get([x, y]) === 0) {
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

function execPonnuki(mat: Matrix, i: number, j: number, ki: number) {
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
      newMat.set([parseInt(coord[0]), parseInt(coord[1])], 0);
    });
  }
  if (libertyDown === 0) {
    recursionPathDown.forEach(item => {
      const coord = item.split(',');
      newMat.set([parseInt(coord[0]), parseInt(coord[1])], 0);
    });
  }
  if (libertyLeft === 0) {
    recursionPathLeft.forEach(item => {
      const coord = item.split(',');
      newMat.set([parseInt(coord[0]), parseInt(coord[1])], 0);
    });
  }
  if (libertyRight === 0) {
    recursionPathRight.forEach(item => {
      const coord = item.split(',');
      newMat.set([parseInt(coord[0]), parseInt(coord[1])], 0);
    });
  }
  return newMat;
}

function canPonnuki(mat: Matrix, i: number, j: number, ki: number) {
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

export function canMove(mat: Matrix, i: number, j: number, ki: number) {
  const newMat = cloneDeep(mat);
  if (newMat.get([i, j]) !== 0) {
    return false;
  }

  newMat.set([i, j], ki);
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

export function move(mat: Matrix, i: number, j: number, ki: number) {
  const newMat = cloneDeep(mat);
  newMat.set([i, j], ki);
  return execPonnuki(newMat, i, j, -ki);
}

export function showKi(mat: Matrix, steps: string[], isPonnuki = true) {
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
        newMat.set([x, y], ki);
        newMat = execPonnuki(newMat, x, y, -ki);
        hasMoved = true;
      }
    } else {
      newMat.set([x, y], ki);
      hasMoved = true;
    }
  });

  return {
    arrangement: newMat,
    hasMoved,
  };
}
