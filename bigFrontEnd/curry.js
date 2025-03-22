// note when a ... is used inside a function it is a rest parameter
// it allows us to pass an indefinite number of arguments as an array
// if a ... is used in a function call it is a spread operator
// it allows us to spread an array into individual elements

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        /* if condition above if not satified it will recursively call
        ...args, ...nextArgs is spread operator which will combine the two array into one array
        */
        return curried(...args, ...nextArgs);
      };
    }
  };
}
