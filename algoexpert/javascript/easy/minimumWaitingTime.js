function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalTime = 0;
  let time = 0;
  for (let i = 1; i < queries.length; i++) {
    time += queries[i - 1];
    totalTime += time;
  }
  return totalTime;
}