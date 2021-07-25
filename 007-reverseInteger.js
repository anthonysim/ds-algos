var reverse = function (num) {
  let sign = Math.sign(num);
  num = Math.abs(num)

  let reversedNum = null;
  let remainder = null;

  while (num > 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);

    if (num !== 0) {
      reversedNum = (reversedNum + remainder) * 10;
    } else {
      reversedNum = reversedNum + remainder;
    }
  }
  return reversedNum > Math.pow(2, 31) || reversedNum < Math.pow(2, -31) ? 0 : sign * reversedNum;
}