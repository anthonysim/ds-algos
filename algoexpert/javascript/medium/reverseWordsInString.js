function reverseWordsInString(str) {
  if (str === ' ') return ' ';
  let res = '';
  let word = '';

  for (let char of str) {
    if (char !== " ") {
      word += char;
    } else if (char === " ") {
      res = word + ' ' + res;
      word = '';
    }
  }
  res = word + ' ' + res;
  return res.trimEnd();
}

console.log(reverseWordsInString("AlgoExpert is the best!"));
console.log(reverseWordsInString("test        "));