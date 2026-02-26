//[1] Declare variables using let and const with initial values and observe inferred types
let a = 10;
const b = 11;
// TS inferes the initialized type which is number



//[2] Try reassigning incompatible values and note the compiler errors
let a = 10;
const b = 11;
a = "a";  //error TS2322: Type 'string' is not assignable to type 'number'.
// here , the TS inferes the initialized type which is number , so you can't reassign it with different type.



//[3] Write a function without a return type and inspect what TypeScript infers
let a = 10;
const b = 11;
function add(a:number,b:number){
    // return "a + b"; //error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
    return a + b;
}
console.log(add(a,b)) // 21 : here , the TS inferes the return type of the function which is number , so you can't return a different type from the function.
// console.log(add(a,"1")) //error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
function weird(n: number) {
  if (n > 5) {
    return n;
  }
}
// this weird inferred number | undefined
// Because one branch returns number, other returns nothing.
// This is TypeScript doing control flow analysis. It tracks all paths.






Deep Internal Insight -->
Inference is context-driven. It flows in two directions:
From right-hand side to left-hand side (assignment inference)
From usage context (contextual typing)

Example of contextual typing:
let numbers = [1, 2, 3];
TS infers number[].

But:
let mixed = [1, "hello"];
Now inferred: (number | string)[]
It scans the whole array before deciding.
It’s not naive. It builds a union from all elements.