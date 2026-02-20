// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
enum Payment {
    INITIATED = "INITIATED",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

// Write a function that accepts only this enum
function pay(method : Payment){
    console.log("Status :" , method)
}
pay(Payment.SUCCESS)

// Try passing an invalid value and observe the error
// pay("Success")
// error : Argument of type '"SUCCESS"' is not assignable to parameter of type 'Payment'.


// Why enums are better than magic strings?
// They restrict the value space.
// They give autocomplete.
// They prevent typos.
// They are refactor-safe.
