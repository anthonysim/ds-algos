var isPalindrome = function (s) {
  let str = s.match(/[a-zA-Z0-9]/gi);

  if (s === null || str === null) return true;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};

// time: O(n)
// space: O(1)
