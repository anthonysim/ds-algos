public class Solution {
    public int LengthOfLIS(int[] nums)
    {
        int[] table = new int[nums.Length];
        Array.Fill(table, 1);

        for (int i = 1; i < nums.Length; i++)
        {
            for (int j = 0; j < i; j++)
            {
                if (nums[j] < nums[i])
                {
                    table[i] = Math.Max(table[i], table[j] + 1);
                }
            }
        }
        // Using LINQ to get the maximum value in the array
        return table.Max();
    }
}

