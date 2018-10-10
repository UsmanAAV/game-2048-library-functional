import { movePlayField } from '../src';

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

const playField1 = [
  [0, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const playField1Up = [
  [0, 2, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const playField1Down = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 2, 0, 0],
];

const playField1Right = [
  [0, 0, 0, 0],
  [0, 0, 0, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const playField1Left = [
  [0, 0, 0, 0],
  [2, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

test('game1', () => {
  expect(movePlayField(playField1, UP)).toBe(playField1Up);
  expect(movePlayField(playField1, DOWN)).toBe(playField1Down);
  expect(movePlayField(playField1, RIGHT)).toBe(playField1Right);
  expect(movePlayField(playField1, LEFT)).toBe(playField1Left);
});
