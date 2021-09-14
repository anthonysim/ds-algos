function nextGreatestLetter(letters, target) {
  for (let char of letters) {
    if (char > target) {
      return char;
    }
  }
  return letters[0];
};