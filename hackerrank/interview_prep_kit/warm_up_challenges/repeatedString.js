function repeatedString(str, n) {
  let mult = Math.floor(n / str.length);
  let count = 0;
  str.split('').forEach(char => char === 'a' ? count += 1 : null);

  let tail = n % str.length;

  let remainder = 0;
  for (let i = 0; i < tail; i++) {
    if (str[i] === 'a') {
      remainder += 1;
    }
  }
  return (mult * count) + remainder;
}