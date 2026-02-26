// Create reusable aliases for union and intersection types
type role = 'admin' | 'customer' | 'guest'
let userRole : role;

type OrderBase = {
  orderId: ID;
  amount: number;
};
type Auditable = {
  createdAt: Date;
  createdBy: string;
};
type Order = OrderBase & Auditable;


// Refactor earlier assignments to use these aliases
type admin = {
    role : "Admin",
    permission : string[]
}
type customer = {
    role : "Customer",
    purchaseHistory : number[]
}
type User = admin | customer;


// Observe how readability improves
it reads like English.
User is Admin OR Customer.


// Create a type alias for string | number
type sn = string | number ;

// Use it in two variables
let user : sn = "Vrund";
let pass : sn = 12345;

// How does this improve readability?
It gives a meaningful name to the union type.
Instead of seeing string | number everywhere, you see sn, which can be more descriptive in context.