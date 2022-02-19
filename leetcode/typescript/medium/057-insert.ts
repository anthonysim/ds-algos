function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);
  const res: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev: number[] = res[res.length - 1];

    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};

// Time complexity: O(N) since it's one pass along the input array.
// Space complexity: O(N) to keep the output.