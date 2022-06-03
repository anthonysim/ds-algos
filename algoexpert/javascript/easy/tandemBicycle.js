function tandemBicycle(red, blue, fastest) {
  red.sort((a, b) => a - b);
  blue.sort((a, b) => a - b);
  let total = 0;

  if (fastest) {
    for (let i = 0; i < red.length; i++) {
      total += Math.max(red[i], blue[blue.length - 1 - i]);
    }
  } else {
    for (let i = 0; i < red.length; i++) {
      total += Math.max(red[i], blue[i]);
    }
  }
  return total;
}