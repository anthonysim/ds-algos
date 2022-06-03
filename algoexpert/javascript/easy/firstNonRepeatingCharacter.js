function firstNonRepeatingCharacter(str) {
  const hash = {};
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!(char in hash)) {
      hash[char] = null;
      res.push([char, i]);
    }
    hash[char] += 1;

    if (hash[char] > 1) {
      res = res.filter(num => num[0] !== char);
    }
  }
  return res.length === 0 ? -1 : res[0][1];
}