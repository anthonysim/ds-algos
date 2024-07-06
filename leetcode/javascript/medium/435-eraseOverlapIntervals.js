var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let pos = 0;
  let total = 0;

  for (let i = 1; i < intervals.length; i++) {
    let prev = intervals[pos];
    let curr = intervals[i];

    if (prev[1] > curr[0]) {
      total += 1;
    } else {
      pos = i;
    }
  }
  return total;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 0