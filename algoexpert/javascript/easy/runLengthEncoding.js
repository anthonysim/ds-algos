function runLengthEncoding(str) {
  let res = [];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    let char = str[i];
    let prev = str[i - 1];

    if (prev !== char || count === 9) {
      res.push(`${count}${prev}`);
      count = 0;
    }
    count += 1;
  }
  res.push(`${count}${str[str.length - 1]}`);
  return res.join('');
}