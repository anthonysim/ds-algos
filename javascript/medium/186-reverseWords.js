function reverseWord(str, left, right) {
  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];

    left += 1;
    right -= 1;
  }
}

function reverseWords(strArr) {
  // reverse the whole array
  reverseWord(strArr, 0, strArr.length - 1);

  let left = 0;
  let right = 0;

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];

    // if there is an empty space reverse
    if (char === ' ') {
      right = i - 1;
      reverseWord(strArr, left, right);
      left = right + 2;
    }

    // if its the last word of the array reverse
    if (i === strArr.length - 1) {
      reverseWord(strArr, left, strArr.length - 1);
    }
  }
};

// Time complexity: O(N), it's two passes along the string.
// Space complexity: O(1), it's a constant space solution.