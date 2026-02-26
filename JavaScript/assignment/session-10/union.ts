type admin = {
    role : "Admin",
    permission : string[]
}
type customer = {
    role : "Customer",
    purchaseHistory : number[]
}
type User = admin | customer;

//[1] Add one more role (e.g. Guest ) to the User union
type guest = {
    role : "Guest",
    visit : number
}
type User = admin | customer | guest ;

//[2] Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
function me(user:User){
    if(user.role === 'Admin'){
        console.log(user.permission)
    }
    else if(user.role === 'Customer'){
        console.log(user.purchaseHistory)
    }
    else{
        console.log(user.visit)
    }
}
TypeScript performs control flow narrowing.
When it sees:
if (user.role === 'admin')
It refines user inside that block to type Admin.
It understands the literal 'admin' as a discriminator.



//[3] Create a union type for two different user roles using type
type Editor = {
  role: 'editor';
  editAccess: boolean;
};
type Viewer = {
  role: 'viewer';
  viewOnly: true;
};
type Account = Editor | Viewer;



//[4] Create another union using two interfaces
interface Manager {
  role: 'manager';
  teamSize: number;
}
interface Intern {
  role: 'intern';
  mentor: string;
}
type Employee = Manager | Intern;



//[5] Write a function that accepts the union and narrows the type safely
function processEmployee(emp: Employee) {
  switch (emp.role) {
    case 'manager':
      console.log(emp.teamSize);
      break;
    case 'intern':
      console.log(emp.mentor);
      break;
  }
}



// extra
interface A { a: string }
interface B { b: number }

type C = A | B;  // ✅ correct

function test(obj: C) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}
//better practice
interface A {type : 'A', a: string }
interface B {type : 'B', b: number }

type C = A | B;  
function test_me(obj:C){
    if (obj.type === 'A') {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}