var reverseWords = function (str) {
  let strArr = str.split(' ').filter(word => word !== '');

  let strBuilder = '';
  let i = strArr.length - 1;

  while (i > 0) {
    strBuilder += strArr[i] + ' ';
    i -= 1;
  }
  strBuilder += strArr[i];
  return strBuilder;
};

// var reverseWords = function(str) {
//   return str.split(' ').filter(word => word !== '').reverse().join(' ');
// };