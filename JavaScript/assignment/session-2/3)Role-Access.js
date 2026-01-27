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
