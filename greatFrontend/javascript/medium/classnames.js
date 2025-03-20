/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) return [];

      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }

      if (Array.isArray(arg)) {
        return classNames(...arg);
      }

      if (typeof arg === "object") {
        return Object.keys(arg).filter((key) => arg[key]);
      }

      return [];
    })
    .join(" ");
}
