import { play } from '../src';

const losingField = [
  [2, 4, 2, 4],
  [4, 2, 4, 2],
  [2, 4, 2, 4],
  [4, 2, 4, 2],
];

const losingResponce = {
  prevField: losingField,
  nextField: losingField,
};

it('should loss', () => {
  expect(play({ prevField: losingField, direction: 'down' })).toEqual(losingResponce);
});
