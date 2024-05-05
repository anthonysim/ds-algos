class Solution(object):
    def containsDuplicate(self, nums):
        numsSet = set(nums)
        return len(numsSet) != len(nums)