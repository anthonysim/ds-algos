def nonConstructibleChange(coins):
    coins.sort()
    total = 0

    for coin in coins:
        if coin > total + 1:
            return total + 1

        total += coin

    return total + 1


print(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
