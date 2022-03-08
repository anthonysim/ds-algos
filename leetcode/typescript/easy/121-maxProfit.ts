function maxProfit(prices: number[]): number {
    let max: number = -Infinity;
    let min: number = Infinity;

    for (let price of prices) {
        min = Math.min(min, price);
        max = Math.max(max, price - min);
    }
    return max;
};