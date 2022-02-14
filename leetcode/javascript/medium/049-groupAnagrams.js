function groupAnagrams(strs) {
  const hash = {};

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    hash[sortedStr] ? hash[sortedStr].push(str) : hash[sortedStr] = [str];
  }
  return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
