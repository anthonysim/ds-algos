function isPalindrome(str) {
  let arr = str.toLowerCase().match(/[a-zA-Z0-9]/g);

  if (!arr || str.length === 1) return true;

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};