var topKFrequent = function (nums, k) {
  let hash = {};
  let buckets = [];
  let res = [];

  for (let i = 0; i <= nums.length; i++)
    buckets.push([]);

  // count frequent of the elements
  for (let num of nums) {
    if (!(num in hash)) hash[num] = 0;
    hash[num] += 1;
  }
  // put them into buckets by frequent
  for (let [key, value] of Object.entries(hash)) {
    buckets[value].push(key);
  }
  // fetch the larget frequest bucket first, until reach k
  for (let i = buckets.length - 1; i > 0; i--) {
    if (buckets[i] !== null && res.length < k) {
      res.push(...buckets[i]);
    }
  }
  return res;
};

// time & space: O(n)