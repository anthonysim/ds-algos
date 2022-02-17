function countingValleys(steps, path) {
  let valley = 0;
  let elevation = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'D') {
      elevation -= 1;
    } else {
      elevation += 1;

      if (elevation === 0) {
        valley += 1;
      }
    }
  }
  return valley;
}