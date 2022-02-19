function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let pos: number = 0;
  let counter: number = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[pos][1] > intervals[i][0]) {
      counter += 1;
    } else {
      pos = i;
    }
  }
  return counter;
};

// Time complexity: O(nlog(n)). Sorting takes O(nlog(n)) time.
// Space complexity: O(1). No extra space is used.