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
  curr.map((elem, j) => fn(elem, i, j))
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

};

export const isEnd = (playField) => {

};
