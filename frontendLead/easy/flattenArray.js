function flattenArray(value) {
  let res = [];

  if (Array.isArray(value)) {
    for (let item of value) {
      res = res.concat(flattenArray(item));
    }
  } else {
    res.push(value);
  }

  return res;
}
