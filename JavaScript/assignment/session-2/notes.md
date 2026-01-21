### Task 1 — Try `var`, `let`, and `const` in a `for` loop  

### Objective:
To understand **scope of variables in JavaScript**.

### Key Concepts Learned:

| Keyword | Scope | Reassignable? | Redeclarable? |
|--------|--------|---------------|---------------|
| `var` | Function scope | ✅ Yes | ✅ Yes |
| `let` | Block scope | ✅ Yes | ❌ No |
| `const` | Block scope | ❌ No | ❌ No |

### Observations:

#### Using `var`
```js
for (var i = 0; i < 3; i++) {
  console.log("Inside:", i);
}
console.log("Outside:", i);
```
Result:
i is accessible outside the loop → shows that var is not block scoped.

```js
for (let i = 0; i < 3; i++) {
  console.log("Inside:", i);
}
console.log("Outside:", i);
```
Result:
Throws ReferenceError → proves that let is block scoped.

```js
for (const i = 0; i < 3; i++) {
  console.log(i);
}
```
Result:
Error occurs because const cannot be reassigned — so it is not suitable for loop counters.
Final Takeaway:
👉 Always prefer let for loop variables.

### Task 2 — Try setTimeout()
Objective:
To understand asynchronous behavior of JavaScript.
```js
console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

Output :
Start  
End  
Executed after 2 seconds  
```
### Concept Learned:
JavaScript is single-threaded but asynchronous.
Flow:
console.log("Start") runs
setTimeout is sent to Web APIs
JS continues execution
After delay, callback goes to callback queue
When call stack is free, callback executes
This mechanism is called the Event Loop.

### Task 3 - Slice a similar array inside a for loop
Objective:
To understand array copying vs mutation.
Example using slice():

```js
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  let newArr = arr.slice(0, i + 1);
  console.log(newArr);
}

Output:
[1]
[1,2]
[1,2,3]
[1,2,3,4]
[1,2,3,4,5]
```
### Concept Learned:
slice() creates a new array
It does not modify the original array
It is a non-mutating method
Contrast with splice():

```js
let arr = [1,2,3,4,5];
arr.splice(0,2);
console.log(arr);

Output:
[3,4,5]
```
Here, splice() modifies the original array → it is a mutating method.
 
 ---
