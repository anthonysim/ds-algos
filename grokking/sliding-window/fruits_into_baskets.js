function fruits_into_baskets(fruits) {
  const hash = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];

    if (!(fruit in hash)) hash[fruit] = 0;
    hash[fruit] += 1;

    while (Object.keys(hash).length > 2) {
      let item = fruits[start];
      hash[item] -= 1;
      if (hash[item] === 0) delete hash[item];
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])) // 3
console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])) // 5