var twoSum = function(nums, target) {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let map = {};
  for (let i = 0; i < len; i++) {
    let n = target - nums[i]; //
    let find = map[n]; // 11
    if (find !== undefined) return [find, i];
    else map[nums[i]] = i;
  }
};

function twoSum(array, target) {
  const numsMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (numsMap.has(target - array[i])) {
      return [numsMap.get(target - array[i], i)];
      // get() returns a specified element associated with the specified key from the Map object.
    } else {
      numsMap.set(array[i], i);
      //  set() adds or updates an element with a specified key and value to a Map object.
    }
  }
}

console.log(twoSum([1, 4, 6, 7, 8, 6], 12));
