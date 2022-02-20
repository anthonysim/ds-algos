function solution(n) {
  if (n === 1) return 1;

  let area = 1;
  for (let i = 1; i <= n; i++) {
    area += (i * 4) - 4;
  }
  return area;
}