var NumArray = function (nums) {
  this.arr = [0];
  let total = 0;

  for (let num of nums) {
    this.arr.push(total += num);
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.arr[right + 1] - this.arr[left];
};

let test = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(test.sumRange(0, 2)) // 1