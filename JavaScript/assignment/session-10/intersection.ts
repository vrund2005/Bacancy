// Create an Order using intersection ( & )
type Customer = {
  name: string;
  email: string;
};
type Product = {
  id: number;
  price: number;
};
type Order = Customer & Product;


// Create the same model using interfaces and extends
interface Customer {
  name: string;
  email: string;
}
interface Product {
  id: number;
  price: number;
}
interface Order extends Customer, Product {}


// Remove one required property and observe the compiler error
const data:Customer = {
    name : "Vrund"
}
// error TS2741: Property 'email' is missing in type '{ name: string; }' but required in type 'Customer'.
// This error occurs because the Customer interface requires both name and email properties, and we only provided the name. 
// The compiler enforces that all required properties must be present when creating an object of a specific type.


// Decide which approach feels clearer and why
Use Union (|):
“Must match one of these shapes.”
Use Intersection (&):
“Must match all of these shapes.”
Intersection is better when you want to combine multiple types into one that has all properties.
Union is better when you want to allow for multiple distinct types that share some commonality but are not the same.



// Create two small object types and combine them using intersection ( & )
type name = {firstName : string}
type age = {age : number}
type person = name & age;


// Create the same structure using interfaces and extends
interface Name {
  firstName: string;
}
interface Age {
  age: number;
}
interface Person extends Name, Age {}


// Try removing a required property and observe the compiler error
const data:Person = {
    firstName : "Vrund"
}
// error TS2741: Property 'age' is missing in type '{ firstName: string; }' but required in type 'Person'.
// This error occurs because the Person interface requires both firstName and age properties, and we only provided the firstName. 
// The compiler enforces that all required properties must be present when creating an object of a specific type.


// Identify when intersection is better than union
Use Intersection when you want to combine multiple types into one that has all properties.
Example: 
type Employee = {
  id: number;
  name: string;
};
type Manager = {
  department: string;
};
type ManagerEmployee = Employee & Manager;
// ManagerEmployee must have id, name, and department.

Use Union when you want to allow for multiple distinct types that share some commonality but are not the same.
Example:
type Admin = {
  role: 'admin';
  permissions: string[];
};
type User = {
  role: 'user';
  purchaseHistory: number[];
};
type Account = Admin | User;
// Account can be either Admin or User, but not both at the same time.