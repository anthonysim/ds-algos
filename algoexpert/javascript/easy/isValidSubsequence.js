function isValidSubsequence(arr, seq) {
  let i = 0;

  for (let num of arr) {
    if (num === seq[i]) {
      i += 1;
    }
  }
  return i === seq.length;
}


const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence));