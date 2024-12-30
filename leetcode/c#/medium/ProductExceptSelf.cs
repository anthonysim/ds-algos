public class Solution
{
  public int[] ProductExceptSelf(int[] nums)
  {
    int[] table = new int[nums.Length];
    Array.Fill(table, 1); // Initialize the array with 1
    int factor = 1;

    // Forward pass
    for (int i = 0; i < nums.Length; i++)
    {
      table[i] *= factor;
      factor *= nums[i];
    }

    factor = 1;

    // Backward pass
    for (int i = nums.Length - 1; i >= 0; i--)
    {
      table[i] *= factor;
      factor *= nums[i];
    }

    return table;
  }
}