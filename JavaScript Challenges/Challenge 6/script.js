//Step 1 : Introduction to Asynchronous JS
    // Display a message after 5 seconds
setTimeout(function() {
    console.log("Hello after 5 seconds!");
  }, 5000); // 5000 milliseconds = 5 seconds

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = formattedTime;
  }
  
  // Initial call to update the clock
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000); // 1000 milliseconds = 1 second

  //Delayed Promise
  const initialPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000); // Resolve after 2 seconds
  });
  
  initialPromise.then((message) => {
    // This callback is executed when the initial promise resolves
    alert(message); // Alert the resolved message
    console.log("Chained message!"); // Log the chained message
  });

//Step 2 : Diving deeper into Async Operations
function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000);
    });
  }
  async function fetchData() {
    try {
      const result = await simulateNetworkRequest();
      console.log(result); // Success scenario: Data fetched successfully!
    } catch (error) {
      console.error(error); // Error scenario: Network Error!
    }
  }
  fetchData();
  async function fetchSinglePost() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
  
      const data = await response.json();
      console.log(data); // Log the fetched post data
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
fetchSinglePost();

//Step 3 : Advanced Async Patterns 

async function fetchMultiplePosts() {
    try {
      const postIds = [1, 2, 3];
      const promises = postIds.map(id =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      );
  
      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map(response => response.json()));
  
      console.log("Combined Data:", data);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
fetchMultiplePosts();

async function fetchSequentialPosts() {
    try {
      const postIds = [4, 5, 6, 7, 8];
      const results = [];
  
      for (const id of postIds) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        results.push(data);
        console.log("Processed Post:", data);
      }
  
      console.log("Sequential Results:", results);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
fetchSequentialPosts();