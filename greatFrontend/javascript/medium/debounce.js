export default function debounce(func, delay) {
  let timer; // Step 1: Create a variable to hold the timer ID

  return function (...args) {
    // Step 2: Return a function that will be called multiple times
    clearTimeout(timer); // Step 3: Clear any previous timer (if the user is still triggering the event)

    timer = setTimeout(() => {
      // Step 4: Set a new timer
      func.apply(this, args); // Step 5: Call the original function with the correct context and arguments
    }, delay);
  };
}
