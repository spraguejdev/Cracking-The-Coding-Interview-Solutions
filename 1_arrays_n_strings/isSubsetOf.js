Array.prototype.isSubsetOf = arr => {
  var obj = objectify(arr);

  return this.reduce((acc, val) => {
    if (!obj[val]) {
      return false;
    }
    return acc;
  }, true);
};

function objectify(arr) {
  var obj = {};
  arr.forEach(val => {
    obj[val] = 1;
  });
  return obj;
}
