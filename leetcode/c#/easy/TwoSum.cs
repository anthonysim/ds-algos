public class Solution
{
  public int[] TwoSum(int[] nums, int target)
  {
    var hash = new Dictionary<int, int>();

    for (var i = 0; i < nums.Length; i++)
    {
      var diff = target - nums[i];

      if (hash.ContainsKey(diff))
      {
        return new int[] { hash[diff], i };
      }
      else
      {
        hash[nums[i]] = i;
      }
    }
    return new int[] { };
  }
}

