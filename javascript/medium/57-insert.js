var insert = function (intervals, newInterval) {
  intervals = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);

  let res = [intervals[0]];

  for (let curr of intervals) {
    let prev = res[res.length - 1];

    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
    }
  }
  return res;
};