window.promises = [];

// script.js
const promises = Array.from({ length: 5 }, (_, index) => {
  // Create promises that resolve after a random time between 1 and 5 seconds
  return new Promise(resolve => {
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
    setTimeout(() => {
      resolve(`Promise ${index + 1} resolved in ${randomTime / 1000} seconds`);
    }, randomTime);
  });
});

Promise.any(promises)
  .then(result => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch(error => {
    // Handle errors if all promises are rejected
    console.error('All promises were rejected:', error);
  });
