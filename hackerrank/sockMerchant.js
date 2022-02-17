function sockMerchant(n, arr) {
  let sockCount = 0;
  let socksMap = arr.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = null;
    }
    acc[val] += 1;
    return acc;
  }, {});

  Object.values(socksMap).forEach(num => {
    sockCount += socks(num);
  })
  return sockCount;
}