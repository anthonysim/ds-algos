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
    res.push(str.slice(j += 1, j + len));
    i = j + len;
  }

  return res;
}