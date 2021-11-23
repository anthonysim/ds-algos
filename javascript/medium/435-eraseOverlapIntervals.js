function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let prev = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[prev][1]) {
      count += 1;
    } else {
      prev = i;
    }
  }
  return count;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 0