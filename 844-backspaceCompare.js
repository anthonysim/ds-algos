function backspaced(str) {
  let backspacedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      backspacedStr = backspacedStr.slice(0, backspacedStr.length - 1);
    } else {
      backspacedStr += str[i];
    }
  }
  return backspacedStr;
}

var backspaceCompare = function (s, t) {
  return backspaced(s) === backspaced(t);
};