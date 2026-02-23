// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

function updateField<T , K extends keyof T>(obj:T,key:K,value:T[K]):T{
    console.log(obj)
    obj[key] = value
    console.log(obj)
    return obj;
}

updateField({name:"abc",id:2},"name","cdf");
updateField({name:"abc",id:2},"id","cdf"); // Argument of type 'string' is not assignable to parameter of type 'number'.
updateField({name:"abc",id:2},"name",1); // Argument of type 'number' is not assignable to parameter of type 'string'.