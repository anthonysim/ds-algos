function non_repeat_substring(str) {
  const arr = [];
  let max = 0;

  for (let char of str) {
    while (arr.includes(char)) arr.shift();

    arr.push(char);
    max = Math.max(max, arr.length);
  }
  return max;
};

// function non_repeat_substring(str) {
//   const hash = {};
//   let start = 0;
//   let max = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (!(char in hash)) hash[char] = 0;
//     hash[char] += 1;

//     while (hash[char] > 1) {
//       let letter = str[start];
//       hash[letter] -= 1;
//       if (hash[letter] === 0) delete hash[letter];
//       start += 1;
//     }
//     max = Math.max(max, i - start + 1);
//   }
//   return max;
// };

console.log(non_repeat_substring("aabccbb")) // 3
console.log(non_repeat_substring("abbbb")) // 2
console.log(non_repeat_substring("aabccabccdebb")) // 4