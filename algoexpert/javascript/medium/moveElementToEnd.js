function moveElementToEnd(arr, move) {
  let pos = 0;
  let len = 0;

  while (len < arr.length) {
    if (arr[pos] === move) {
      arr.push(arr[pos]);
      arr.splice(pos, 1);
    } else {
      pos += 1;
    }
    len += 1;
  }
  return arr;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
// [ 1, 3, 4, 2, 2, 2, 2, 2 ]