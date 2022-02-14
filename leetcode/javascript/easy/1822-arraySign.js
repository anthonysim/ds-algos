var arraySign = function (nums) {
  let totalProduct = 1;

  for (let num of nums) {
    totalProduct *= Math.sign(num);
  }
  return totalProduct;
};