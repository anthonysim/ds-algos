public class Solution
{
  public int MaxProfit(int[] prices)
  {
    int prev = int.MaxValue;
    int max = int.MinValue;

    foreach (var price in prices)
    {
      prev = Math.Min(prev, price);
      max = Math.Max(max, price - prev);
    }
    return max;
  }
}