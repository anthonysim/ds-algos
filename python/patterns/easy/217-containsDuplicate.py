def containsDuplicate(nums):
    if len(nums) != len(set(nums)):
        return True

    return False
