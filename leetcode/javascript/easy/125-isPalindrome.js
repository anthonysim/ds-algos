var isPalindrome = function (s) {
  let str = s.toLowerCase().match(/[a-zA-Z0-9]/gi);

  if (!str || !s) return true;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};

// time: O(n)
// space: O(1)
