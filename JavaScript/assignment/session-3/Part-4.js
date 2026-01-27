// Exercise 7: The "this" Detective
// Exercise 7: The "this" Detective
// Scenario: The code below is broken (it logs undefined).
// Explain why it fails.
// Fix it so it logs "Hello, Alex".
// JavaScript
// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();

//[1] Explain why it fails.
// Ans. Because here we use the arrow function which results into the Undefined,
//      we have to use the simple function for the proper answer. Becuase arrow function is not hoisted properly.

//[2] Fix it so it logs "Hello, Alex".
const user = {
    name: "Alex",
    greet(){
        console.log("Hello, " + this.name);
    }
};
user.greet();



// Exercise 8: The Safe Update
// Scenario: You need to update a user's theme setting without mutating the original object.
// Input:
// JavaScript
// const settings = { theme: "light", notifications: true };
// Task:
// Create a new variable newSettings.
// Use the Spread Operator (...) to copy the properties from settings.
// Overwrite the theme to "dark" inside the new object.
// Verify settings.theme is still "light" (Immutable Check).

const settings = {
    theme: "light",
    notifications: true 
};
const newSettings = {...settings , theme : "dark"}

console.log(newSettings.theme)
console.log(settings.theme)



// Exercise 9 : Combine everything you learned into one function
// Scenario: You have an inventory list.
// Filter out items that are out of stock (stock: 0).
// Map the remaining items to calculate their total value (price * stock).
// Reduce to find the total value of the entire inventory.
// Data:
// JavaScript
// const inventory = [
//     { name: "Laptop", price: 1000, stock: 5 },
//     { name: "Phone", price: 500, stock: 0 },
//     { name: "Mouse", price: 50, stock: 10 }
// ];
// Expected Output: 5500

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const result = inventory.filter((x) => x.stock != 0).map((x) => x.price * x.stock).reduce((acc,total) => acc + total,0)
console.log(result)