// ## Task 1: Predict Output of Async Code

// ### Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.

// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop


// ### Code Block 1: Basic Async

javascript
console.log("1");

setTimeout(function() {
 console.log("2");
}, 0);

Promise.resolve().then(function() {
 console.log("3");
});

console.log("4");

```
// **Your Prediction (order):**

Write the order you expect: 1, 4, 3, 2

// **Actual Output:**

1, 4, 3, 2

// **Explanation:**

firstly the whole call stack will execute , the promises goes into the microtask queue and setTimeOut goes into the
macrotask queue, when the call stack becomes empty , first all the microtask queue will execute and then the macrotask queue
will execute.

```



// ### Code Block 2: Nested Async

console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

```
**Your Prediction (order):**

Start ,End ,Promise 2 ,Timeout 1, Promise 1,Timeout 2

**Actual Output:**

Start ,End ,Promise 2 ,Timeout 1, Promise 1,Timeout 2

**Explanation:**

as per the Event Loop , start and end logs first , then the promise will execute which logs Promise 2 ,
then the inside that timeout will goes to the macrotask queue but there is already the first settimeout function is available,
which executes first , which logs timeout 1 , and then again there is nested promise , so that will log Promise 1,
and then the remaining Timeout 2 will execute
```



// ### Code Block 3: Multiple Microtasks


console.log("A");

Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});

Promise.resolve().then(function() {
 console.log("E");
});

setTimeout(function() {
 console.log("F");
}, 0);

console.log("G");
```
**Your Prediction (order):**

A , G , B , D , E , C , F

**Actual Output:**

A,G,B,D,E,C,F

**Explanation:**

Call stack : A > G > Micro Promises (B > D > E > C) > Macro timeOut (F)
```



// ### Code Block 4: Complex Async Chain


console.log("1");

setTimeout(function() {
 console.log("2");
}, 0);

queueMicrotask(function() {
 console.log("3");
});

Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});

setTimeout(function() {
 console.log("6");
}, 0);

console.log("7");

```
**Your Prediction (order):**

1 , 7 , 3 , 4 , 5 , 2 , 6

**Actual Output:**

1, 7, 3, 4, 5, 2, 6

**Explanation:**

queueMicrotask is also goes into the microtask queue just like promises and executes before the macrotask queue and after empty call stack
```



// ### Code Block 5: Async/Await

console.log("Start");

async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function() {
 console.log("Promise 1");
});

setTimeout(function() {
 console.log("Timeout");
}, 0);

console.log("End");

```
**Your Prediction (order):**

Start , Async 1, End , Async 2 , Promise 1 , Timeout

**Actual Output:**

Start , Async 1, End , Async 2 , Promise 1 , Timeout

**Explanation:**

Calling an async function runs it synchronously until the first await.
await Promise.resolve();
This does two things:
Wraps value in a resolved promise (already resolved)
Pauses the function
Schedules the rest (console.log("Async 2")) as a microtask
So "Async 2" is queued in the microtask queue.
Promise.resolve().then(...)
.then() callbacks always go into the microtask queue.
So "Promise 1" is also queued as a microtask.

```