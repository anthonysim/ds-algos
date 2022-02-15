function isPalindrome(str: string): boolean {
  let charArr: string[] = str.toLowerCase().match(/[A-Za-z0-9]/gi);

  if (str.length === 1 || !charArr) return true;

  let left: number = 0;
  let right: number = charArr.length - 1;

  while (left < right) {
    if (charArr[left] !== charArr[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};