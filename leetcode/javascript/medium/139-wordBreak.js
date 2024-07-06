var wordBreak = function (str, wordDict, memo = {}) {
  if (str in memo) return memo[str];
  if (str === "") return true;

  for (let word of wordDict) {
    if (str.indexOf(word) === 0) {
      let suffix = str.slice(word.length);

      if (wordBreak(suffix, wordDict, memo)) {
        memo[str] = true;
        return memo[str];
      }
    }
  }
  memo[str] = false;
  return memo[str];
};

console.log(wordBreak("leetcode", ["leet", "code"])) //true