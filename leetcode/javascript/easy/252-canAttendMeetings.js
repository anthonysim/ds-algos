function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    let curr = intervals[i];
    let next = intervals[i + 1];

    if (curr[1] > next[0]) {
      return false;
    }
  }
  return true;
};

// time: O(nlog(n)) because of the sort method after the n is dropped
// O(nlog(n) + n) --> O(nlog(n))
// space: O(1)