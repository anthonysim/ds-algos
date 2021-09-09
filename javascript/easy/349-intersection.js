function intersection(nums1, nums2) {
  let res = nums1.filter(num => nums2.includes(num));
  return Array.from(new Set(res));
};