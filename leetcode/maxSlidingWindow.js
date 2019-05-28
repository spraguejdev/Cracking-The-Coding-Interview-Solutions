/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  var start = 0;
  var end = k;
  var results = [];
  if (!nums.length) return results;
  while (end <= nums.length) {
    results.push(Math.max(...nums.slice(start, end)));
    start++;
    end++;
  }
  return results;
};
//Intuitive JavaScript Solution: One-pass, Constant Space (excluding output)

//The idea here is to have the maximum walk along with the sliding window. If it falls behind, catch it back up by scanning the window. Otherwise, only check the new value against current max.

var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) {
    return [];
  }

  let ret = [];

  let winStart = 0; // start of window
  let maxi = -1; // maximum within the window (default to before window to find next max within)

  while (winStart + k <= nums.length) {
    if (maxi < winStart) {
      // if the maximum has fallen outside window, walk window to find it
      let max;

      for (let i = winStart; i < winStart + k; i++) {
        if (max == null || nums[i] > max) {
          max = nums[i];
          maxi = i;
        }
      }
    } else {
      // otherwise, the maximum must be either the current, or the new value in the window
      if (nums[winStart + k - 1] > nums[maxi]) {
        maxi = winStart + k - 1;
      }
    }

    ret.push(nums[maxi]); // push the new maximum
    winStart++; // shift window
  }

  return ret;
};
