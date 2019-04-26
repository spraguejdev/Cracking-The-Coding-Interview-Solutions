var threeSum = function(nums) {
  // Sort the arr
  var sorted = nums.sort((a, b) => {
    return a - b;
  });

  var p1, p2, p3;
  var results = [];
  p3 = sorted.length - 1;
  for (p1 = 0; p1 < sorted.length; p1++) {
    p2 = p1 + 1;
    p3 = sorted.length - 1;
    // If the two numbers in the array are equal, continue
    if (sorted[p1] + sorted[p2] > 0) {
      break;
    }
    if (sorted[p1] + sorted[p2] > 0) {
      break;
    }
    if (p1 > 0 && sorted[p1] === sorted[p1 - 1]) continue;

    while (p2 < p3) {
      if (sorted[p1] + sorted[p2] + sorted[p3] === 0) {
        results.push([sorted[p1], sorted[p2], sorted[p3]]);
        while (sorted[p3] === sorted[p3 - 1]) p3--;
        while (sorted[p2] === sorted[p2 + 1]) p2++;
        p3--;
        p2++;
      } else if (sorted[p1] + sorted[p2] + sorted[p3] > 0) {
        p3--;
      } else {
        p2++;
      }
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
