function twoNumberSum(arr, target) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (diff in hash) {
      return [hash[diff], arr[i]];
    }
    hash[arr[i]] = arr[i];
  }
  return [];
}