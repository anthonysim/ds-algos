def reverseWordsInString(str):
    if (str == ' '):
        return ' '

    res = ''
    word = ''

    for char in str:
        if (char != ' '):
            word += char
        else:
            res = word + ' ' + res
            word = ''

    res = word + ' ' + res
    return res.rstrip()


print(reverseWordsInString("AlgoExpert is the best!"))
print(reverseWordsInString("test        "))
