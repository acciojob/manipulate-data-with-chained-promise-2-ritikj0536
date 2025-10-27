function manipulateData() {
  const outputDiv = document.getElementById("output");

  // Step 1: Initial Promise (resolves with [1, 2, 3, 4] after 3 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    // Step 2: First transformation — filter out odd numbers
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = arr.filter((num) => num % 2 === 0);
          outputDiv.textContent = evens.join(","); // display [2, 4]
          resolve(evens);
        }, 1000);
      });
    })
    // Step 3: Second transformation — multiply even numbers by 2
    .then((evens) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = evens.map((num) => num * 2);
          outputDiv.textContent = doubled.join(","); // display [4, 8]
          resolve(doubled);
        }, 2000);
      });
    })
    // Optional: handle errors
    .catch((err) => {
      console.error("Error:", err);
    });
}

// Run function when page loads
manipulateData();
