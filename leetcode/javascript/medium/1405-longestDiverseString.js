var longestDiverseString = function (a, b, c) {
  let total = a + b + c;

  let A = 0;
  let B = 0;
  let C = 0;

  let stringBuilder = '';

  while (total > 0) {

    if (a >= b && a >= c && A != 2 || (a > 0 && (B == 2 || C == 2))) {
      A += 1;
      a -= 1;
      B = 0;
      C = 0;
      stringBuilder += 'a';
    }

    else if (b >= a && b >= c && B != 2 || (b > 0 && (C == 2 || A == 2))) {
      B += 1;
      b -= 1;
      A = 0;
      C = 0;
      stringBuilder += 'b';
    }

    else if (c >= a && c >= b && C != 2 || (c > 0 && (A == 2 || B == 2))) {
      C += 1;
      c -= 1;
      A = 0;
      B = 0;
      stringBuilder += 'c';
    }
    total -= 1;
  }
  return stringBuilder;
}


console.log(longestDiverseString(1, 1, 7)); // "ccaccbcc"