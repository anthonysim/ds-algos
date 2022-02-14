var merge = function (nums1, m, nums2, n) {
  let curIndex = m + n;
  let num1 = nums1[m -= 1];
  let num2 = nums2[n -= 1];

  while (curIndex) {
    if (n < 0) break;

    if (num1 > num2) {
      nums1[curIndex -= 1] = num1;
      num1 = nums1[m -= 1];
    } else {
      nums1[curIndex -= 1] = num2;
      num2 = nums2[n -= 1];
    };
  };
};