/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let startTimes = [];
  let endTimes = [];

  for (let i = 0; i < intervals.length; i++) {
    startTimes.push(intervals[i][0]);
    endTimes.push(intervals[i][1]);
  }

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let max = 0;
  let count = 0;
  let s = 0;
  let e = 0;

  while (s < startTimes.length) {
    if (startTimes[s] < endTimes[e]) {
      s += 1;
      count += 1;
    } else {
      e += 1;
      count -= 1;
    }
    max = Math.max(max, count);
  }
  return max;
};