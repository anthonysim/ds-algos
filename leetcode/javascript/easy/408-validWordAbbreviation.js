var validWordAbbreviation = function (word, abbr) {
  let i = 0; // tracks index of word
  let j = 0; // tracks index of abbr

  while (j < abbr.length) {
    // check to see if its a number
    if (!isNaN(abbr[j])) {
      // returns false if leading with zero
      if (abbr[j] === "0") return false;

      let num = 0;
      // builds a number from a string
      while (j < abbr.length && !isNaN(abbr[j])) {
        num = num * 10 + Number(abbr[j]);
        j += 1;
      }
      // updates the index for word
      i += num;
    } else {
      if (word[i] !== abbr[j]) return false;

      i += 1;
      j += 1;
    }
  }
  // checks to see if i made it to end of word
  return i === word.length;
};
