function jumpingOnClouds(arr) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2] === 0 && arr[i + 2] !== undefined) {
      steps += 1;
      i += 1;
    } else if (arr[i + 1] === 0 && arr[i + 1] !== undefined) {
      steps += 1;
    }
  }
  return steps;
}