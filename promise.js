// callback for asynchronous process
function welcome() {
  setTimeout(() => {
    console.log("Welcome to javascript world");
  }, 1000);
}

function world(callback) {
  setTimeout(() => {
    console.log("World");
    callback();
  }, 1000);
}

function hello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
}

// callback hell
hello(() => {
  world(() => {
    welcome();
  });
});

// chaining
let p = new Promise((res, rej) => {
  let a = "surya";
  if (a === "surya") {
    setTimeout(() => {
      res(a);
    }, 1000);
  } else {
    rej("process failed initially");
  }
});

function success(msg) {
  return new Promise((res, rej) => {
    const arr = ["ben", "den", "mani", "surya"];
    const index = arr.findIndex((item) => item === msg);
    if (index >= 0) {
      setTimeout(() => {
        res(index);
      }, 1000);
    } else {
      rej("Not found the index");
    }
  });
}

function failed(msg) {
  console.log(msg);
}


p.then((msg) => {
  return success(msg);
})
  .then((index) => {
    console.log(index);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("From finally");
  });

// using async await
async function asyncAwait() {
  const first = await p;
  const second = await success(first);
  console.log(second);
}

// asyncAwait();

// Simulated asynchronous functions
function doSomethingCritical() {
  return new Promise((resolve, reject) => {
    console.log("Starting critical operation...");
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        console.log("Critical operation succeeded.");
        resolve("CriticalResult");
      } else {
        reject(new Error("Critical operation failed"));
      }
    }, 1000);
  });
}

function doSomethingOptional(result) {
  return new Promise((resolve, reject) => {
    console.log(`Starting optional operation with result: ${result}`);
    setTimeout(() => {
      const success = false; // Simulate success or failure
      if (success) {
        console.log("Optional operation succeeded.");
        resolve("OptionalResult");
      } else {
        reject(new Error("Optional operation failed"));
      }
    }, 5000);
  });
}

function doSomethingExtraNice(optionalResult) {
  return new Promise((resolve, reject) => {
    console.log(`Starting extra nice operation with result: ${optionalResult}`);
    setTimeout(() => {
      console.log("Extra nice operation succeeded.");
      resolve("ExtraNiceResult");
    }, 1000);
  });
}

function moreCriticalStuff() {
  return new Promise((resolve, reject) => {
    console.log("Starting more critical stuff...");
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        console.log("More critical stuff succeeded.");
        resolve();
      } else {
        reject(new Error("More critical stuff failed"));
      }
    }, 1000);
  });
}

// Full promise chain
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {
        console.warn("Optional operation failed, but ignoring it.");
      })
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`))
  .finally(() => console.log("Everything completed."));

const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error occurred");
const p3 = Promise.resolve(30);

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

const p4 = new Promise((resolve, reject) => setTimeout(resolve, 300, "Fast"));
const p5 = new Promise((resolve, reject) => setTimeout(resolve, 200, "Slow"));

Promise.race([p4, p5])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// using fetch
async function get() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ).th;
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
get();

let fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
fetch1
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });


// Cancellation of Promise
const controller = new AbortController();
const signal = controller.signal;

// Simulate an API call that supports aborting
const fetchWithAbort = (url) => {
    return fetch(url, { signal });
};

// Start the fetch
const fetchPromise = fetchWithAbort('https://jsonplaceholder.typicode.com/todos/1');

fetchPromise
    .then(response => response.json())
    .then(data => console.log("Data:", data))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Fetch aborted!');
        } else {
            console.error('Error:', err);
        }
    });

// Cancel the fetch after 1 second
setTimeout(() => controller.abort(), 10);
