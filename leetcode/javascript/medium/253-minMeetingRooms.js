var minMeetingRooms = function (intervals) {
  let startTimes = intervals.map(num => num[0]).sort((a, b) => a - b);
  let endTimes = intervals.map(num => num[1]).sort((a, b) => a - b);;

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

// Time Complexity: O(NlogN) because all we are doing is sorting the two arrays for start timings and end timings individually and each of them would contain NN elements considering there are NN intervals.

// Space Complexity: O(N) because we create two separate arrays of size NN, one for recording the start times and one for the end times.