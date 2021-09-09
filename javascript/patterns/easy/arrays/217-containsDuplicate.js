var containsDuplicate = function (nums) {
    if (nums.length !== Array.from(new Set(nums)).length) {
        return true;
    }
    return false;
};