/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(val = 0) {
  return () => val++;
}
