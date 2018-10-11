import rotateMatrix from './rotateMatrix';

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

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

const addNumberToPlayField = (playField) => {
  const getFreeCells = (field) => {
    const cellsIndexes = map2DimArr(field, (elem, i, j) => [i, j, elem]);
    const flattenCellsIndexes = cellsIndexes.reduce((acc, val) => acc.concat(val), []);
    const freeCellsIndexes = flattenCellsIndexes.filter(elem => elem[2] === 0);
    return freeCellsIndexes;
  };

  const freeCells = getFreeCells(playField);
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

export const movePlayField = (playField) => {

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
  }
  const isExistsMoves = map2DimArr(playField, canMoveToLeftToUp);

  const hasSomeMove = isExistsMoves
    .map(elem => elem.includes(true))
    .includes(true);
  return !hasSomeMove;
};
