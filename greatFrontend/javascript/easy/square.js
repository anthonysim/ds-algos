/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  return this.map((num) => num ** 2);
};
