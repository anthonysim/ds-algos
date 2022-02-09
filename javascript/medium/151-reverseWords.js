var reverseWords = function (str) {
  let strArr = str.split(' ').filter(item => item.length !== 0);
  let res = '';

  let i = strArr.length - 1;

  while (i >= 0) {
    res += strArr[i] + ' ';
    i -= 1;
  }
  return res.trim();
};