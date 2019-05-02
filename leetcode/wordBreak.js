// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".

function wordBreak(str, dict) {
  // Handle edge cases
  if (dict.length < 2) return false;
  if (str.length < 2) return false;
  var copy = str.slice(0);
  var slow = 0;
  var fast = 1;
  while (slow !== str.length - 1) {
    while (fast !== str.length) {
      var beg = copy.slice(slow, fast);
      if (dict.includes(beg)) {
        // Check to see if beg is in the rest of the string
        var end = copy.slice(fast);
        if (end.includes(beg)) {
          console.log("hi");
        }
        if (dict.includes(end)) {
          return true;
        }
      }
      fast++;
    }
    slow++;
    fast = slow + 1;
  }
  return false;
}

// Another way to solve this, but does not pass for inputs "cars" ["car", "ca", "rs"]
function wordBreak(s, wordDict) {
  for (let i = 0; i < wordDict.length; i++) {
    console.log("this is the str: ", s);
    console.log(s.split(wordDict[i]));
    s = s.split(wordDict[i]).join(".");
  }
  return s.split(".").join("").length === 0;
}

// The idea at first used the brute force method of testing every prefix to see if it can be found in the wordDict and then running recursion on the left over string (basically the original string without the prefix word)

// I optimized it using memoization by creating a tested dic such that when the recursive functions create a string that is already being tested or has been tested, it stops instead of doing the same work twice or however number of time.

// method 1 where I use words from wordDict to test for prefix

var wordBreak = function(s, wordDict) {
  let tested = {};
  function helper(list, wordic) {
    let newlist = [];
    let found = false;
    for (let i = 0; i < list.length; i++) {
      if (tested[list[i]] !== undefined) {
        continue;
      }
      tested[list[i]] = true;
      for (let j = 0; j < wordic.length; j++) {
        if (list[i].slice(0, wordic[j].length) === wordic[j]) {
          found = true;
          if (list[i].slice(wordic[j].length).length === 0) {
            return true;
          }
          newlist.push(list[i].slice(wordic[j].length));
        }
      }
    }
    if (found === true) {
      return helper(newlist, wordic);
    } else {
      return false;
    }
  }
  return helper([s], wordDict); // ===true? true:false
};

// method 2 where I set prefix from string

var wordBreak = function(s, wordDict) {
  let newdic = new Set(wordDict);
  let tested = {};
  function helper(s) {
    if (tested[s] === undefined) {
      tested[s] = true;
      if (s.length === 0) {
        return true;
      }
      for (var j = 0; j < s.length; j++) {
        if (newdic.has(s.slice(0, j + 1))) {
          let nextword = s.slice(j + 1);
          if (helper(nextword)) {
            return true;
          }
        }
      }
      return false;
    }
  }
  return helper(s);
};

// method 3 - of setting an array that tracks valid starting points in the given string by testing all the possible substrings of string and marking t/f. This prevents there being a case where we have multiple computations on the same string from recursion since it's one double for loop

var wordBreak = function(s, wordDict) {
  let tfArray = new Array(s.length + 1);
  tfArray.fill(false);
  tfArray[0] = true;

  let newdic = new Set(wordDict);
  for (let i = 0; i < s.length; i++) {
    if (tfArray[i] !== true) {
      continue;
    }
    for (let j = i; j < s.length; j++) {
      if (newdic.has(s.slice(i, j + 1)) && tfArray[i] === true) {
        tfArray[j + 1] = true;
      }
    }
  }
  return tfArray.pop();
};

function isWordBreakable(s, dict, answer) {
  // console.log(s + '  ' + answer);
  var strLen = s.length;
  if (strLen === 0) {
    console.log(answer);
    return true;
  } else {
    var prefix = "";
    for (var i = 0; i < strLen; i++) {
      // add one char at a time
      prefix += s.charAt(i);
      // check if prefix exists in dictionary
      // if (dict.includes(prefix)) { // Array.prototype.includes() is an ES7 Feature
      if (dict.indexOf(prefix) > -1) {
        //add prefix to the answer and make a recursive call
        answer += prefix + " ";
        var suffix = s.slice(i + 1);
        if (isWordBreakable(suffix, dict, answer)) {
          return true;
        }
      }
      //console.log(prefix + '  backtrack');
    }
  }
}

console.log(wordBreak("applepenapple", ["apple", "pen"]));
