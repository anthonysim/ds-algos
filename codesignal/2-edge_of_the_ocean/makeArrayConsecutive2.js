function solution(statues) {
  let begin = Math.min(...statues);
  let end = Math.max(...statues);
  let count = 0;

  for (let i = begin; i <= end; i++) {
    if (!statues.includes(i)) {
      count += 1;
    }
  }
  return count;
}