// function rotateMatrix(matrix) {
//   if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;

//   var i = matrix.length;

//   for (var layer = 0; layer < i / 2; layer++) {
//     var first = layer;
//     var last = i - 1 - layer;
//     for (var j = first; j < last; j++) {
//       var offset = j - first;

//       var top = matrix[first][j]; // save top

//       // left => top
//       matrix[first][j] = matrix[last - offset][first];

//       // bottom => left
//       matrix[last - offset][first] = matrix[last][last - offset];

//       // right => bottom
//       matrix[last][last - offset] = matrix[j][last];

//       // top => right

//       matrix[j][last] = top; // right <= saved top
//     }
//   }
//   return matrix;
// }

// solution 2

const reverse = array => [...array].reverse();
const compose = (a, b) => x => a(b(x));

const flipMatrix = matrix =>
  matrix[0].map((column, index) => matrix.map(row => row[index]));

const rotateMatrix = compose(
  flipMatrix,
  reverse
);
const flipMatrixCounterClockwise = compose(
  reverse,
  rotateMatrix
);
const rotateMatrixCounterClockwise = compose(
  reverse,
  flipMatrix
);
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

var rotate = function(matrix) {
  var results = [];
  var N = matrix.length;
  // we use N for both loops because we are looking at this from a
  // column and row perspective rather than nested arrays
  for (var col = 0; col < N; col++) {
    var inner = [];
    for (var row = 0; row < N; row++) {
      var item = matrix[row][col];
      inner.unshift(item);
    }
    results.push(inner);
  }
  return results;
};
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
