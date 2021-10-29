function countSubstrings(str: string): number {
  let res: number = 0;

  for (let i = 0; i < str.length; i++) {
    // checks odds
    let left: number = i;
    let right: number = i;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      res += 1;
      left -= 1;
      right += 1;
    }
    // checks evens
    left = i;
    right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      res += 1;
      left -= 1;
      right += 1;
    }
  }
  return res;
}