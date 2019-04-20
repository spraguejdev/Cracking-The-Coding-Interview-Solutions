// Write an algorithm such taht if an element in an MxN matrix is 0, its entire row and columm are set to 0

const zeroMatrix = matrix => {
  var row = [];
  var column = [];

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (var k = 0; k < row.length; k++) {
    if (row[k]) nullifyRow(k, matrix);
  }

  for (var l = 0; l < column.length; l++) {
    if (column[l]) nullifyColumn(l, matrix);
  }
  return matrix;
};

function nullifyRow(row, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[row][i] = 0;
  }
  return matrix;
}

function nullifyColumn(column, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
}

console.log(zeroMatrix([[1, 0, 1], [1, 1, 1], [1, 1, 0]]));
