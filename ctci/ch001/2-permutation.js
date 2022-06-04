function permutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  const hash = str1.split('').reduce((acc, val) => {
    if (!acc[val]) acc[val] = 0;
    acc[val] += 1;
    return acc;
  }, {})

  for (let char of str2) {
    if (char in hash) hash[char] -= 1;
    if (hash[char] === 0) delete hash[char];
  }
  return Object.values(hash).length === 0 ? true : false;
}

console.log(permutation("taco", "acto")) // true;
console.log(permutation("taco", "asdf")) // false;