def powerset(arr):
    res = []
    temp = []

    def backtrack(i):
        if i >= len(arr):
            res.append(temp[::])
            return

        temp.append(arr[i])
        backtrack(i + 1)

        temp.pop()
        backtrack(i + 1)

    backtrack(0)
    return res
