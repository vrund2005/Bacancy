// Create Admin and Customer interfaces using a common base
interface BaseUser {
  name: string;
  email: string;
}
interface Admin extends BaseUser {
  role: 'Admin';
  permissions: string[];
}
interface Customer extends BaseUser {
  role: 'Customer';
  purchaseHistory: number[];
}


// Write a function that accepts BaseUser
function greetUser(user: BaseUser) {
  console.log(`Hello, ${user.name}!`);
}

// Pass both Admin and Customer objects to the function
const adminUser: Admin = {
  name: "Alice",
  email: "alice@example.com",
  role: "Admin",
  permissions: ["read", "write", "delete"]
};
const customerUser: Customer = {
  name: "Bob",
  email: "bob@example.com",
  role: "Customer",
  purchaseHistory: [100, 200, 300]
};
greetUser(adminUser);
greetUser(customerUser);


// Design an interface for an API response object
interface ApiResponse {
  success: boolean;
  message: string;
}


// Create a function that accepts this interface as a parameter
function handleResponse(response: ApiResponse) {
  if (response.success) {
    console.log("Success:", response.message);
  } else {
    console.log("Failure:", response.message);
  }
}


// Extend the interface and reuse it
interface UserResponse extends ApiResponse {
  data: BaseUser;
}
const response: UserResponse = {
  success: true,
  message: "User fetched",
  data: admin
};


// Create an interface for a Product
interface Product {
  id: number;
  name: string;
  price: number;
}

// Create a variable that follows this interface
const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99
};

// Why are interfaces preferred in large projects?
They support inheritance and can be extended easily, making them ideal for large projects with complex type hierarchies.