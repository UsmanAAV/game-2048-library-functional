import { rotateMatrixClockwise, rotateMatrixCounterClockwise } from './rotateMatrix';

const directions = {
  left: {
    direction: 'left',
    count: 0,
  },
  down: {
    direction: 'down',
    count: 1,
  },
  right: {
    direction: 'right',
    count: 2,
  },
  up: {
    direction: 'up',
    count: 3,
  },
};

const blankField = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const map2DimArr = (array, fn) => array.map((curr, i) => (
  curr.map((elem, j) => fn(elem, i, j, array))
));

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const addNumberToPlayField = (playField) => {
  const getFreeCells = (field) => {
    const cellsIndexes = map2DimArr(field, (elem, i, j) => [i, j, elem]);
    const flattenCellsIndexes = cellsIndexes.reduce((acc, val) => acc.concat(val), []);
    const freeCellsIndexes = flattenCellsIndexes.filter(elem => elem[2] === 0);
    return freeCellsIndexes;
  };

  const freeCells = getFreeCells(playField);
  if (freeCells.length === 0) return playField;
  const randomCellIndex = getRandomInt(freeCells.length);
  const randomCellI = freeCells[randomCellIndex][0];
  const randomCellJ = freeCells[randomCellIndex][1];

  const num2or4 = getRandomInt(100) < 90 ? 2 : 4;

  const result = map2DimArr(playField, (elem, i, j) => (
    i === randomCellI && j === randomCellJ ? num2or4 : elem
  ));
  return result;
};

export const initPlayField = () => {
  const initialPlayField = addNumberToPlayField(blankField);
  return initialPlayField;
};

export const movePlayField = (playField, direction) => {
  // rotate field
  const rotateNTimesClockwise = (array, count) => {
    if (count <= 0) return array;
    return rotateNTimesClockwise(rotateMatrixClockwise(array), count - 1);
  };
  const rotatedField = rotateNTimesClockwise(playField, directions[direction].count);
  // move field to LEFT
  const moveRowToLeft = (array) => {
    if (array.length < 2) return array;
    if (array[0] === array[1]) return [array[0] * 2].concat(moveRowToLeft(array.slice(2)));
    return [array[0]].concat(moveRowToLeft(array.slice(1)));
  };
  const movedField = rotatedField.map(curr => moveRowToLeft(curr.filter(e => e !== 0)));
  const addedZerosField = map2DimArr(blankField, (elem, i, j) => (
    elem + movedField[i][j] ? movedField[i][j] : 0
  ));
  // rotate field back
  const rotateNTimesCounterClockwise = (array, count) => {
    if (count <= 0) return array;
    return rotateNTimesCounterClockwise(rotateMatrixCounterClockwise(array), count - 1);
  };
  const result = rotateNTimesCounterClockwise(addedZerosField, directions[direction].count);
  // return moved field
  return result;
};

export const isWin = (playField) => {
  const has2048 = playField.reduce((acc, elem) => acc + (elem.includes(2048) ? 1 : 0), 0);
  return has2048;
};

export const isLoss = (playField) => {
  const hasZeros = playField.reduce((acc, elem) => acc + (elem.includes(0) ? 1 : 0), 0);
  if (hasZeros) return false;

  const canMoveToLeftToUp = (elem, i, j, arr) => {
    const canMoveAlongI = (i > 0) ? elem === arr[i - 1][j] : false;
    const canMoveAlongJ = (j > 0) ? elem === arr[i][j - 1] : false;
    return canMoveAlongI || canMoveAlongJ;
  };
  const isExistsMoves = map2DimArr(playField, canMoveToLeftToUp);

  const hasSomeMove = isExistsMoves
    .map(elem => elem.includes(true))
    .includes(true);
  return !hasSomeMove;
};
