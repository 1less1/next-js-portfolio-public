# Coding Concepts

## Asynchronous Coding

### What is an Async Operation?
An **asynchronous operation** is a task that can happen in the background,  
allowing your program to keep running without waiting for the task to finish.  

This is useful for tasks that take time:
- API calls
- Reading files from the disk
- Timed operations  

**Analogy**: You place an order of food at a restaurant (start of an async task). While the food is being prepared (background task), you can do other things like chatting with friends (other parts of the program running). When the food is ready, the waiter brings it to you (task completion).

### What is an Async Function?
An **async function** is a coding method that works with asynchronous tasks. It makes the code look simpler and easier to understand by using ```await``` to "pause" and wait for a task to finish. 

#### Simple Example 
```javascript
async function makeBreakfast() {
  console.log("Starting breakfast!");

  const toast = await makeToast(); // Wait for the toast to finish
  console.log(toast);

  const egg = await fryEgg(); // Wait for the egg to fry
  console.log(egg);

  console.log("Breakfast is ready!");
}
```

The ```await``` keyword means... "Pause here until the task is done, but don't freeze the rest of the program."

#### Key Async Features:
1. Non-Blocking - async functions don't stop the program, other tasks can run.
2. Await - lets you handle async tasks **step by step**, making the code easier to follow. Without ```await```, async tasks could run and finish out of order.

NOTE: Without async, your program would stop and wait for every slow task to finish, making it inefficient. With async, everything feels faster and smoother!

## Promises
A **Promise** represents a value that might be available now, or in the future, or never. It's an object that allows you to handle asynchronous operations more effectively.   

Promises have three states:
1. Pending - initial state, neither fulfilled nor rejected.
2. Fulfilled - operation successul.
3. Rejected: - operation failed.


**Promises** are the foundation of how ```await``` and ```aysnc``` work. When you use ```await``` and ```async``` in a function, you are working with Promises under the hood.   

```await``` is used inside an ```async``` function to pause execution until a ```Promise``` is resolved or rejected. This allows writing asynchronous code in a more synchronous and readable manner.


Example:
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Pauses until Promise resolves
    const data = await response.json(); // Waits for the JSON conversion
    console.log(data); // Handles the resolved data
  } catch (error) {
    console.error(error); // Handles any errors
  }
}
```

Key Points:
1. ```async```marks a function as asynchronous, making it return a Promise.
2. ```await``` waits for the resolution of a Promise and "unpacks" its value.

Promise Example **without** ```async``` and ```await```:
```javascript
// Mock API functions that return Promises
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user...");
    setTimeout(() => {
      if (userId) {
        resolve({ id: userId, name: "John Doe" });
      } else {
        reject("User ID is required!");
      }
    }, 1000); // Simulates a 1-second delay
  });
}

// Using Promises with then and catch
fetchUser(1)
  .then((user) => {
    console.log("User fetched:", user);
    return fetchPosts(user.id); // Fetch posts for the user
  })
  .then((posts) => {
    console.log("Posts fetched:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  ```
