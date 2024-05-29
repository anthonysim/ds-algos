class Solution(object):
    def maxProfit(self, prices):
        res = 0
        minNum = float("inf")

        for price in prices:
            minNum = min(minNum, price)
            res = max(res, price - minNum)

        return res