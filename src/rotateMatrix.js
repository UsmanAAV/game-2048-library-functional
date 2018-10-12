const compose = (a, b) => x => a(b(x));
const reverse = array => [...array].reverse();

// `get` is a simple accessor function, used for selecting an item in an array.
const get = id => array => array[id];

// This functional version of map accepts our function first.
const map = (fn, array) => array.map(fn);

// `pluck` allows us to map through a matrix, gathering all the items at a
// specific index.
const pluck = (index, data) => map(get(index), data);

// `rangeFrom` creates an array equal in length to the array provided,
// but with a 0-based range for values.
// eg. ['a', 'b', 'c'] -> [0, 1, 2]
const rangeFrom = ({length}) => [...Array(length).keys()];


const flipMatrix = matrix => (
  map(index => pluck(index, matrix), rangeFrom(matrix))
);

export const rotateMatrixClockwise = compose(flipMatrix, reverse);
const flipMatrixCounterClockwise = compose(reverse, rotateMatrixClockwise);
export const rotateMatrixCounterClockwise = compose(reverse, flipMatrix);
