var groupAnagrams = function(arr) {
  var anagrams = {};
  var results = [];
  var sortedWord;

  for (let i = 0; i < arr.length; i++) {
    sortedWord = arr[i]
      .split("")
      .sort()
      .join("");
    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [arr[i]];
    } else {
      anagrams[sortedWord].push(arr[i]);
    }
  }
  for (let inner in anagrams) {
    results.push(anagrams[inner]);
  }
  return results;
};

// var isAnagram = function (word1, word2) {
//     if (word1.length !== word2.length) return false
//     var str1 = word1.split('').sort().join('');
//     var str2 = word2.split('').sort().join('');

//     return str1 === str2 ? true : false ;
// }

const groupAnagrams = strs => {
  if (strs.length == 0) return [];
  const result = new Map();
  const primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    107
  ];
  const getKey = str => {
    let key = 1;
    for (let i = 0; i < str.length; i++) {
      key = primes[str.charCodeAt(i) - 97] * key;
    }
    return key;
  };
  strs.forEach(w => {
    let key = getKey(w);
    if (result.has(key)) {
      result.get(key).push(w);
    } else {
      result.set(key, [w]);
    }
  });
  return [...result.values()];
};
