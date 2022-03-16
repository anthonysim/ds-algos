var decodeString = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== "]") {
      stack.push(char);
    } else {
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }
      stack.pop();

      let k = "";
      while (stack && Number.isInteger(Number(stack[stack.length - 1]))) {
        k = stack.pop() + k;
      }
      stack.push(substr.repeat(Number(k)));
    }
  }
  return stack.join("");
};

console.log(decodeString("3[a]2[bc]")); // aaabcbc

// Time Complexity: O(maxK⋅n)
// Space Complexity: O(m+n)