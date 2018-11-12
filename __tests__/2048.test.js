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

it('move left playField1', () => {
  expect(movePlayField(playField1, LEFT)).toEqual(playField1Left);
});

it('move up playField1', () => {
  expect(movePlayField(playField1, UP)).toEqual(playField1Up);
});

it('move right playField1', () => {
  expect(movePlayField(playField1, RIGHT)).toEqual(playField1Right);
});

it('move down playField1', () => {
  expect(movePlayField(playField1, DOWN)).toEqual(playField1Down);
});

const playField2 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
];

const playField2Left = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 0, 0],
  [0, 0, 0, 0],
];

const playField2Up = [
  [0, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const playField2Right = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 2],
  [0, 0, 0, 0],
];

const playField2Down = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, 0],
];

it('move left playField2', () => {
  expect(movePlayField(playField2, LEFT)).toEqual(playField2Left);
});

it('move up playField2', () => {
  expect(movePlayField(playField2, UP)).toEqual(playField2Up);
});

it('move right playField2', () => {
  expect(movePlayField(playField2, RIGHT)).toEqual(playField2Right);
});

it('move down playField2', () => {
  expect(movePlayField(playField2, DOWN)).toEqual(playField2Down);
});
