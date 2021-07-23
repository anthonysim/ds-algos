var findDisappearedNumbers = function (nums) {
  let missingNumsArr = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      missingNumsArr.push(i);
    }
  }
  return missingNumsArr;
};