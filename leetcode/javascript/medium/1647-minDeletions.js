var minDeletions = function (str) {
  const freq = {};
  for (let c of str) {
    freq[c] = (freq[c] || 0) + 1;
  }

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