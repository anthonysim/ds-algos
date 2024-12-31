public class Solution {
    public int CombinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;

        for (int i = 0; i < dp.Length; i++) {
            foreach (int num in nums) {
                if (i - num >= 0) {
                    dp[i] += dp[i - num];
                }
            }
        }

        return dp[dp.Length - 1];
    }
}