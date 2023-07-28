var isValid = function (str) {
  const hashMap = {
    "[": "]",
    "{": "}",
    "(": ")",
  }

  let stack = [];

  for (let char of str) {
    if (char in hashMap) {
      stack.push(hashMap[char]);

    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

// time and space: O(n)