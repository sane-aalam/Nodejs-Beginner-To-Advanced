console.log("file is connnected!");

// I Promise a Result!"
// "Producing code" is code that can take some time
// Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

// let myPromise = new Promise(function (resolve, reject) {});

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let success = true;

    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Something went wrong!");
    }
  }, 2000);

  setTimeout(() => {
    console.log("SetTimeout only 1 second");
  }, 1000);
});

// Handling promise
myPromise
  .then((massage) => {
    console.log("Then block:", massage);
  })
  .catch((error) => {
    console.log("error block:", error);
  })
  .finally(() => {
    console.log("Finally block: Always runs!.");
  });

//** What’s Happening Here?
// Promise creation
// new Promise((resolve, reject) => { ... })
// The function runs immediately.
// Producing code (async operation)
// Here simulated with setTimeout.
// Resolve vs Reject
// resolve(value) → marks Promise fulfilled.
// reject(reason) → marks Promise rejected.
// Consuming code
// .then() runs when resolve() is called.
// .catch() runs when reject() is called.
// .finally() always runs, success or fail.

// Promise started working with producing code
// SetTimeout only 1 second   comes earlier (independent)
// Producing code which takes some time!   keeps repeating every 5s
// Then block: Task completed successfully!
// Finally block: Always runs
