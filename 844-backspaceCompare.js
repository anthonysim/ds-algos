var backspaceCompare = function (s, t) {
  let sString = "";
  let tString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sString = sString.slice(0, sString.length - 1);
    } else {
      sString += s[i];
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] === "#") {
      tString = tString.slice(0, tString.length - 1);
    } else {
      tString += t[j];
    }
  }
  return sString === tString;
};
