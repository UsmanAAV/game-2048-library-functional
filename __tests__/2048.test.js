import { movePlayField } from '../src';

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

const playField1 = [
  [0, 0, 0, 0],
  [0, 2, 4, 0],
  [2, 2, 4, 0],
  [0, 0, 4, 4],
];

const playField1Left = [
  [0, 0, 0, 0],
  [2, 4, 0, 0],
  [4, 4, 0, 0],
  [8, 0, 0, 0],
];

const playField1Up = [
  [2, 4, 8, 4],
  [0, 0, 4, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const playField1Right = [
  [0, 0, 0, 0],
  [0, 0, 2, 4],
  [0, 0, 4, 4],
  [0, 0, 0, 8],
];

const playField1Down = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 4, 0],
  [2, 4, 8, 4],
];

it('move left', () => {
  expect(movePlayField(playField1, LEFT)).toEqual(playField1Left);
});

it('move up', () => {
  expect(movePlayField(playField1, UP)).toEqual(playField1Up);
});

it('move right', () => {
  expect(movePlayField(playField1, RIGHT)).toEqual(playField1Right);
});

it('move down', () => {
  expect(movePlayField(playField1, DOWN)).toEqual(playField1Down);
});
