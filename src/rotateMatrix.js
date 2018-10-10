const compose = (a, b) => x => a(b(x));
const reverse = array => [...array].reverse();

const get = id => array => array[id];
const map = (fn, array) => array.map(fn);
const pluck = (index, data) => map(get(index), data);
const rangeFrom = ({ length }) => [...Array(length).keys()];
const flipMatrix = matrix => (
  map(index => pluck(index, matrix), rangeFrom(matrix))
);
const rotateMatrix = compose(flipMatrix, reverse);

export default rotateMatrix;
