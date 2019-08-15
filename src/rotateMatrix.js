const compose = (...functions) => (arg) => (
  functions.reduceRight((curArg, curFunc) => curFunc(curArg), arg)
);

const composeNTimes = (func, count = 1, arg) => {
  const funcNTimes = new Array(count).fill(func);
  return compose(...funcNTimes)(arg);
};

const reverseMatrix = (matrix) => (
  matrix.reduceRight((acc, row) => [...acc, row], [])
);

const transposeMatrix = (matrix) => (
  matrix.reduce((acc, row) => (
    row.map((item, i) => (acc[i] || []).concat(row[i]))
  ), [])
);

const rotateMatrixClockwise = (matrix, count = 1) => {
  const rotateClockwiseOnce = (array) => (
    compose(transposeMatrix, reverseMatrix)(array)
  );
  return composeNTimes(rotateClockwiseOnce, count, matrix);
};

const rotateMatrixCounter = (matrix, count = 1) => {
  const rotateCounterClockwiseOnce = (array) => (
    compose(reverseMatrix, transposeMatrix)(array)
  );
  return composeNTimes(rotateCounterClockwiseOnce, count, matrix);
};

export { rotateMatrixClockwise, rotateMatrixCounter };
