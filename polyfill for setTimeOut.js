function setTimeoutPolyfill(callback, delay, ...args) {
  let start = Date.now();
  let intervalId = setInterval(() => {
    if (Date.now() - start >= delay) {
      clearInterval(intervalId); 
      callback(...args);
    }
  }, 1); // Check every 1ms (efficient enough)

  return () => clearInterval(intervalId); // Return a cancel function
}

const timeoutId = setTimeoutPolyfill(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// Cancelling timeout after 1 second
setTimeout(() => {
  console.log("Clearing timeout...");
  timeoutId(); // Calls clearInterval, stopping execution
}, 1000);
