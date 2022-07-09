function encode(strs) {
  return strs.map(str => `${str.length}#${str}`).join('');
}

function decode(str) {
  const res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j += 1;
    }

    let len = Number(str.slice(i, j));
    j += 1;
    res.push(str.slice(j, j + len));
    i = j + len;
  }

  return res;
}

// decode: time O(n) space O(1)
// encode: time O(n) space O(n)