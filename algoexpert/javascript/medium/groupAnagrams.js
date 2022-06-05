function groupAnagrams(words) {
  const hash = {};
  for (let word of words) {
    let sortedWord = word.split('').sort().join('');

    if (!(sortedWord in hash)) {
      hash[sortedWord] = [word];
    } else {
      hash[sortedWord].push(word);
    }
  }
  return Object.values(hash);
}