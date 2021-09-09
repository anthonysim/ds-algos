def isPalindrome(str):
    string = ''

    for char in str:
        if char.isalnum():
            string += char.lower()

    if len(string) == 1:
        return True

    left = 0
    right = len(string) - 1

    while left < right:
        if string[left] != string[right]:
            print(string[left], string[right])
            return False

        left += 1
        right -= 1

    return True


print(isPalindrome('"A man, a plan, a canal: Panama"'))
