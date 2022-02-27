var minDeletions = function (str) {
  const freq = str.split('').reduce((acc, val) => {
    if (!acc[val]) acc[val] = 0;
    acc[val] += 1;
    return acc;
  }, {});

  let values = Object.values(freq).sort((a, b) => a - b);
  let set = new Set();
  let res = 0;

  for (let i = 0; i < values.length; i++) {
    while (set.has(values[i]) && values[i] !== 0) {
      values[i] -= 1;
      res += 1;
    }

    set.add(values[i]);
  }

  return res;
};

console.log(minDeletions('aab')); // 0
console.log(minDeletions('aaabbbcc')); // 2
console.log(minDeletions('ceabaacb')); // 2