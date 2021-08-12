function rob(nums) {
  let prev = 0;
  let current = 0;
  let temp;

  for (let num of nums) {
    temp = current;
    current = Math.max(num + prev, current);
    prev = temp;
  }
  return current;
}