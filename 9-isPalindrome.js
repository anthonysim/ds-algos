var isPalindrome = function (x) {
  if (x < 0) return false;

  let numArr = x.toString().split('');

  for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
    if (numArr[i] !== numArr[numArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};