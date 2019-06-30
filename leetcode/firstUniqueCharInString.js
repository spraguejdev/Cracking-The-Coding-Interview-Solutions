function findFirstUniqueCharacter(inputString) {
  let hash = {};
  let end = inputString.length - 1;
  var arrString = inputString.split("");
  if (inputString.length === 1) return 0;
  if (!inputString.length) return -1;

  for (let i = 0; i < inputString.length; i++) {
    if (!hash[arrString[i]]) {
      hash[arrString[i]] = true;
      var startChar = arrString[i];

      while (i !== end) {
        var endChar = arrString[end];
        if (startChar === endChar) {
          break;
        } else {
          end--;
        }
      }
      if (i === end && startChar === arrString[i]) {
        return i;
      }
      end = arrString.length - 1;
    }
  }
  return -1;
}

// Another way to solve this using indexOf, where we start to search after the current position.
function findFirstUniqueCharacter(s) {
  if (!s) {
    return -1;
  }

  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i], i + 1));
    if (s.indexOf(s[i], i + 1) === -1 && s.indexOf(s[i]) === i) {
      return i;
    }
  }
  return -1;
}
