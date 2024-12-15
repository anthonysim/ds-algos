/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(...args) {
  const timeoutId = setTimeout(...args);

  return () => clearTimeout(timeoutId);
}
