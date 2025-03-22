var createCounter = function (n) {
  let count = n;
  return () => {
    return count++;
  };
};

// Another way to do it
// class Counter {
//   constructor(n) {
//     this.count = n;
//   }

//   count() {
//     return this.count++;
//   }
// }
