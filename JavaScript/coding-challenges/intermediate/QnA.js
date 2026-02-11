// Problem 1: Variable Scope & Hoisting (var, let, const)
// Question
// Predict the output of the following code and explain why it behaves that way.

console.log(a);     //undefined : Because of hoisting, the declaration of 'a' is moved to the top of its scope, but its assignment is not. Therefore, 'a' is declared but not initialized at the time of the console.log, resulting in 'undefined'.
var a = 10;
if (true) {
  let a = 20;
  console.log(a);   //20 : The 'let' keyword creates a block-scoped variable 'a' that is separate from the 'var' variable 'a' declared outside the block. Therefore, inside the block, 'a' refers to the block-scoped variable, which has the value 20.
}
console.log(a);     //10 : After the block, the block-scoped variable 'a' is no longer accessible, and the 'var' variable 'a' declared outside the block is still in scope with its value of 10. Therefore, the output is 10.



// Problem 2: Event Loop, Microtasks & Macrotasks
// Objective
// Understand JavaScript execution order using the call stack, microtask queue, and macrotask queue.
// Question
// Predict the execution order of the following code and explain why.

console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));
console.log("end");
// output : start , end , promise 1 , promise 2 , timeout
// Explanation: at the first the call stack tasks will execute , here the settimeout will goes into the macrotask queue and the promise will goes into the microtask queue , after the call stack is empty the microtask queue will execute first and then the macrotask queue will execute.



// Problem 3: API Data Formatter (Fetch + Array Methods)
// Objective
// Fetch data from an API and transform it using modern JavaScript array methods.
// Input
// Assume the API returns the following data:
// [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Neha", active: false }
// ]

// Requirements
// Fetch data using fetch
// Handle API failure gracefully
// Filter only active users
// Transform data into the format:
// { userId: 1, userName: "Amit" }

// Expected Output
// [
//   { userId: 1, userName: "Amit" }
// ]

// using filter + map method
async function dataFormatter(){
    try{
        const userAPI = await fetch("user/API");
        if (!userAPI.ok) throw new Error("User data not fetched")
        const userInfo = await userAPI.json()
        const userData = userInfo.filter((x)=>x.active).map((x)=>({
            userId : x.id,
            userName : x.name
        }))
        return userData
    }
    catch(error){
        console.log(`Error detected : ${error.message}`)
        return []
    }
}
//using reduce method
return users.reduce((acc, user) => {
  if (user.active) {
    acc.push({
      userId: user.id,
      userName: user.name
    });
  }
  return acc;
}, []);
