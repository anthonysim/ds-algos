/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
