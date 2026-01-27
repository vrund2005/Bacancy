// Assignment 3: Role Access using switch-case
// Create a variable role with values like:
// "ADMIN"
// "USER"
// "MANAGER"
// Print:
// ADMIN → Full access
// USER → Limited access
// MANAGER → Moderate access
// default → Invalid role


const role1 = "ADMIN"
const role2 = "USER"
const role3 = "MANAGER"

switch(role1){
    case "ADMIN" :
        console.log("Full Access")
        break;
    case "USER" :
        console.log("Limited access")
        break;
    case "MANAGER" :
        console.log("Moderate Access")
        break;
    default :
        console.log("Invalid Role")
}