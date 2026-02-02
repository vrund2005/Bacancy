// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);   
// Dell, as the getBrand() function returns "Dell"


// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);
// output : 1 3 2 , because the promise goes into the microtask queue which runs after the call stack


// Q3. The Broken Chain
Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));
// output : Error Occured , as the promise is rejected and goes into the catch block


// Q4. Global vs. Local Scope
var status = "Offline";
const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};
console.log(server.getStatus());
// Output : Online , coz this refers to the server


// Q5. Math in Promises
Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));
// output : 20 , as the resolve will runs the first .then block which multiply the num with 2 
// and this returna a promise , so for the actual value we'll use the second .then for unwrapping data


// Q6. The "Lost" Context
const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};
const print = user.printName;
print();
// output : undefined , as the function is not called , it's saved in the print and wehn we call the 
// print it executes ouside the scope which refers to the global object


// Q7. Event Loop Basic Race
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// output : Start End Promise Timeout , first runs the call stack then when the stack becomes empty ,
// then microtask queue will execute where the promise lies , and after that the macrotask queue will 
// run where the setTimeOut lies.


// Q8. Arrow Function Pitfall
const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};
group.getTitle();
// output : undefined , as the arrow function refers to the lexical scope and here the lexical scope is global


// Q9. Chaining Returns
Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));
// output : 5 10 , resolve will run the .then and logs 5 and then increased by 5 , and second .then logs 10


// Q10. Catch and Continue
Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));
// output : Fail Recovered , as the promise is rejected and the catch block will run which logs the error message , 
// and then the next .then block will execute.


// Q11. The Nested Timeout
console.log('A');
setTimeout(() => {
    console.log('B');
}, 0);
Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});
console.log('E');
// output : A E C D B , the main call stack will logs A & E , then promise comes from the microtask queue and executes C 
// and again the new promise is passed in the stack and immediately executes as the call stack is empty at that time , 
// then the macrotask queue runs and logs B


// Q12. Explicit Binding (Call/Apply)
const agent = {
    id: 101
};
function showId() {
    console.log(this.id);
}
showId.call(agent);     //  101
showId.apply(null);     //  undefined
// here the call will executes the showId function with the object agent , and which returns 101
// null object refers to the window object , and in window there is no id attributes which results into undefined


// Q13. Promise.all Failure
Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));
// output : Caught: Error 1 , here Promise.all() is used which only executes .then block if all the promises are resolved , 
// but here there is rejection and that's why the catch block will execute.


// Q14. The "Callback" Context Trap
const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};
player.updateScore();
// output : undefined , there is a simple normal function inside the setTimeOut which executes after the call stack becomes empty 
// and there is no object assigned to this , and when the normal function is called , this refers to the window object and logs 'undefined'


// Q15. Throwing Inside a Chain
Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));
// output : Caught Error 10 , as the first .then block throws an error , and catch block executes, then the last .then will executes


// Q16. Async Function Order
async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
console.log("C");
foo();
console.log("D");
// output : C A D B , in the async function when the await line comes , the rest of the block is goes 
// into the suspended queue which runs after the empty call stack


// Q17. The "Finally" Gotcha
Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));
// output : Cleanup Done , here the resolved value by promise is "Done" , and the finally can't receive the resolved value 
// and mostly can't modify the value , so the return inside finally is not considered and the "Done" is passed and logs.


// Q18. Variable Hoisting & Promises
console.log(a);
var a = 5;
Promise.resolve().then(() => {
    console.log(a);
});
a = 10;
// output : undefined 10 , as the var is hoisted as undefined , and after the promise goes into the microtask queue 
// and the remaining call stack assign a = 10 , and when the promise try to logs the value of 'a', it returns 10.


// Q19. Microtask vs Macrotask Interleaving
setTimeout(() => console.log("T1"), 0);
Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});
Promise.resolve().then(() => console.log("P2"));
console.log("End");
// output : End P1 P2 T1 T2 , totally based on the event loop system : cal stack > microtask queue > macrotask queue


// Q20. Object Method Assigned to Class
class Manager {
    constructor(name) {
        this.name = name;
    }
    print = () => {
        console.log(this.name);
    }
}
const m = new Manager("Sarah");
const p = m.print;
p();
// output : Sarah , as the arrow function use it's lexical scope value and here which is Sarah