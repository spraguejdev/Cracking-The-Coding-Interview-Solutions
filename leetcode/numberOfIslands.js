/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(matrix) {
  var islands = 0;

  var recurse = (x, y) => {
    matrix[(x, y)] = -1;
    if (y > 0) {
      if (matrix[y - 1][x] === "1") {
        recurse(x, y - 1);
      }
    }

    if (y < matrix.length - 1) {
      if (matrix[y + 1][x] === "1") {
        recurse(x, y + 1);
      }
    }

    if (x > 0) {
      if (matrix[y][x - 1] === "1") {
        recurse(x - 1, y);
      }
    }

    if (x > matrix[y].length) {
      if (matrix[y][x + 1] === "1") {
        recurse(x + 1, y);
      }
    }
  };

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === "1") {
        islands++;
        recurse(x, y);
      }
    }
  }
  return islands;
};
// Another solution

var numIslands = function(grid) {
  let count = 0;
  let h = grid.length;
  let w = h && grid[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === "0") continue;
      count++;
      dfs(i, j);
    }
  }

  return count;

  function dfs(n, m) {
    if (n < 0 || m < 0 || n >= h || m >= w) return;
    if (grid[n][m] === "1") {
      grid[n][m] = "0";
      dfs(n + 1, m);
      dfs(n - 1, m);
      dfs(n, m + 1);
      dfs(n, m - 1);
    }
  }
};

numIslands([["1", "0", "1", "1", "0", "1", "1"]]);
