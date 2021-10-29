function groupAnagrams(strs) {
  let groups = {};

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (groups[sortedStr]) {
      groups[sortedStr].push(str);
    } else {
      groups[sortedStr] = [str];
    }
  }
  return Object.values(groups)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
