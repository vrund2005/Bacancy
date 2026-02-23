// Create a constant adminUser.
// Create a type from it using typeof.
// Add a new property and observe how the type changes automatically.

const adminUser = {
    name: "Vrund",
    role: "Admin",
}

type AdminUserType = typeof adminUser;

const updatedAdminUser1: AdminUserType = { role: 123}; // Type 'number' is not assignable to type 'string'.
const updatedAdminUser2: AdminUserType = { name: "Vrund", role: "Admin", email: "vrund@example.com" };
// Type '{ name: string; role: string; email: string; }' is not assignable to type 'AdminUserType'. 
// Object literal may only specify known properties, and 'email' does not exist in type 'AdminUserType'.
const updatedAdminUser3: AdminUserType = { role: "Admin"}; // Property 'name' is missing in type '{ role: string; }' but required in type '{ name: string; role: string; }'.