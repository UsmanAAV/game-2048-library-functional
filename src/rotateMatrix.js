const reverseMatrix = matrix => (
  matrix.reduceRight((acc, row) => [...acc, row], [])
);

const transposeMatrix = matrix => (
  matrix.reduce((acc, next) => (
    next.map((item, i) => (acc[i] || []).concat(next[i]))
  ), [])
);
const rotateClockwiseOnce = matrix => (
  transposeMatrix(reverseMatrix(matrix))
);
const rotateCounterClockwiseOnce = matrix => (
  reverseMatrix(transposeMatrix(matrix))
);

const rotateMatrixClockwise = (array, count = 1) => {
  if (count <= 0) return array;
  return rotateMatrixClockwise(rotateClockwiseOnce(array), count - 1);
};

const rotateMatrixCounter = (array, count = 1) => {
  if (count <= 0) return array;
  return rotateMatrixCounter(rotateCounterClockwiseOnce(array), count - 1);
};

export { rotateMatrixClockwise, rotateMatrixCounter };
