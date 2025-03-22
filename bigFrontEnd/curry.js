function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        /* if condition above if not satified it will recursively call
        ...args, ...nextArgs is spread operator which will combine the two array into one array
        args = [1];

        */
        return curried(...args, ...nextArgs);
      };
    }
  };
}
