var strStr = function (haystack, needle) {
  if (haystack === "" && needle === "") return 0;

  let index = null;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, needle.length + i) === needle) {
      return i;
    }
  }
  return -1;
};