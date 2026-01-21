// Exercise 7: The "this" Detective

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

const settings = {
    theme: "light",
    notifications: true 
};
const newSettings = {...settings , theme : "dark"}

console.log(newSettings.theme)
console.log(settings.theme)


// Exercise 9 : Combine everything you learned into one function

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const result = inventory.filter((x) => x.stock != 0).map((x) => x.price * x.stock).reduce((acc,total) => acc + total,0)
console.log(result)