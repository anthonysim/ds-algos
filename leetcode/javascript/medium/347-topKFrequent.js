var topKFrequent = function (nums, k) {
  const hash = {};
  let buckets = [];
  let res = [];

  for (let i = 0; i <= nums.length; i++) {
    buckets.push([]);
  }

  for (let num of nums) {
    if (!(num in hash)) hash[num] = 0;
    hash[num] += 1;
  }

  for (let [key, val] of Object.entries(hash)) {
    buckets[val].push(key);
  }

  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    if (buckets[i].length !== 0) {
      res.push(...buckets[i]);
    }
  }
  return res;
};

// time & space: O(n)