// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function doing(data:number):string
function doing(data:Date):string
function doing(param:number | Date){
    if (typeof param === "number"){
        return param.toString();
    }
    else
        return param.toISOString()
}

// Usage examples:
const formattedNumber = doing(123); // O/P : "123"
const formattedDate = doing(new Date()); // O/P : "2026-02-25T17:56:09.554Z"