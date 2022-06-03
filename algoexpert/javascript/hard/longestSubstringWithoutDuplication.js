function longestSubstringWithoutDuplication(str) {
  let wordArr = [];
  let max = 0;
  let res;

  for (let char of str) {
    while (wordArr.includes(char)) {
      wordArr = wordArr.splice(1)
    }
    wordArr.push(char);

    if (wordArr.length > max) {
      res = wordArr.join('');
      max = wordArr.length;
    }
  }
  return res;
};