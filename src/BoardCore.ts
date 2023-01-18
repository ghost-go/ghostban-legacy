import {cloneDeep} from 'lodash';
import {sgfToPos} from './helper';

let liberties = 0;
let recursionPath: string[] = [];

const GRID = 19;

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
  const newArray = mat;
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
      newArray[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  if (libertyDown === 0) {
    recursionPathDown.forEach(item => {
      const coord = item.split(',');
      newArray[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  if (libertyLeft === 0) {
    recursionPathLeft.forEach(item => {
      const coord = item.split(',');
      newArray[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  if (libertyRight === 0) {
    recursionPathRight.forEach(item => {
      const coord = item.split(',');
      newArray[parseInt(coord[0])][parseInt(coord[1])] = 0;
    });
  }
  return newArray;
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
  const newArray = mat;
  if (mat[i][j] !== 0) {
    return false;
  }

  newArray[i][j] = ki;
  const {liberty} = calcLiberty(newArray, i, j, ki);
  if (canPonnuki(newArray, i, j, -ki)) {
    return true;
  }
  if (canPonnuki(newArray, i, j, ki)) {
    return false;
  }
  if (liberty === 0) {
    return false;
  }
  return true;
}

export function showKi(array: number[][], steps: string[], isPonnuki = true) {
  let newMat = cloneDeep(array);
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
