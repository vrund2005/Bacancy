//[1] Create a function that accepts any and performs operations without checks
function processAny(value: any) {
  console.log(value.toUpperCase()); // If value is not a string, this will throw an error
}
processAny("hello"); // Works fine
processAny(123); // Runtime error: value.toUpperCase is not a function
// Compiler allows everything.
// Because any disables checking.



//[2] Create the same function using unknown and add proper type guards
function processAny(value: unknown){
    if (typeof value === 'string'){
        console.log(value.toUpperCase());
    }
}
processAny("Hello");
processAny(123);
// Now the compiler forces the check.
// If you remove the if, it won’t compile.



// [3] Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both

let a : any = 'Vrund';
let b : unknown = 'Vrund';

a.toUpperCase()
b.toUpperCase()
// Which one forces you to write safer code?    =>   unknown




Deep Concept — Why unknown Exists -->
In TypeScript's type hierarchy:
never  ⬅️  string  ⬅️  unknown
unknown is the top type.
It means: “This could be anything.”

You can assign anything to unknown:
let x: unknown = 10;
x = "hi";
x = true;

But you cannot assign unknown to specific types without checking:
let y: string = x; // ❌ Error

You must narrow first.
This design prevents unsafe assumptions.

When to Use What :

Use any only when:
Migrating large JavaScript codebases
Dealing with poorly typed third-party libraries
You intentionally disable safety (rare, controlled cases)

Use unknown when:
Handling user input
Parsing JSON
Working with dynamic API responses
Example:
const data: unknown = JSON.parse(someString);
Because JSON can be anything.
Now you validate structure before use.
This is how professionals write resilient systems.