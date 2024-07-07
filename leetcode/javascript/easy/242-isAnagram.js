function helper(str) {
  return str.split("").sort().join("");
}

var isAnagram = function (s, t) {
  return helper(s) === helper(t);
};