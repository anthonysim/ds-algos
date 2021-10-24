function twoSum(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (diff in hash) {
            return [hash[diff], i];
        }
        else {
            hash[nums[i]] = i;
        }
    }
    return [];
}
;
console.log(twoSum([2, 7, 11, 15], 9));
