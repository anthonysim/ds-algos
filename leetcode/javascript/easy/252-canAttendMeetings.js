var canAttendMeetings = function (intervals) {
  if (intervals.length <= 1) return true;
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  return true;
};

// time: O(nlog(n)) because of the sort method after the n is dropped
// O(nlog(n) + n) --> O(nlog(n))
// space: O(1)