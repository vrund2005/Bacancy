// Using generics and cconstraints in TypeScript, create a function that accepts 
// an object with a specific structure. For example, you can create a function that 
// accepts an object with properties name (string) and age (number). 
// Use generics to ensure that the function can accept objects of different types 
// while still enforcing the required structure.

// interface User {
//     name: string;
//     age: number;
// }
// function createUser<T extends User>(user: T): T {
//     return user;
// }

// const user1 = createUser({ name: "Alice", age: 30 });
// const user2 = createUser({ name: "Bob", age: 25, email: "bob@example.com" });


// Create a function activateUser that accepts only objects having isActive: boolean.
interface Activatable {
    isActive: boolean;
}
function activateUser<T extends Activatable>(user: T): T {
    user.isActive = true;
    return user;
}
const user3 = activateUser({ name: "Charlie", isActive: false });


// Create another function that requires both id and email.
interface Identifiable {
    id: number;
    email: string;
}

function createIdentifiable<T extends Identifiable>(obj: T): T {
    return obj;
}

const identifiableObj = createIdentifiable({ id: 1, email: "charlie@example.com" });

// Try passing invalid objects and observe TypeScript errors.
const invalidIdentifiable = createIdentifiable({ id: 2 }); // Error: Property 'email' is missing  
const invalidUser = createIdentifiable({ email: "me123@gmail.com" }); // Error: Property 'id' is missing
const invalidActivatable = createIdentifiable({ id:"123", email: "me123@gmail.com" }); // Error: type "string" is not assignable to type "number"