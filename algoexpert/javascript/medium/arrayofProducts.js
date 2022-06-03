function arrayOfProducts(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    let copyArr = arr.slice();
    copyArr.splice(i, 1);
    res.push(copyArr.reduce((acc, val) => acc * val, 1));
  }
  return res;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
console.log(arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));