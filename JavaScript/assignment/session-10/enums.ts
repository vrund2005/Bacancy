// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
enum payment {
    Initiated = "INITIATED",
    Success = "SUCCESS",
    Failed = "FAILED"
}

// Write a function that accepts only this enum
function pay(method : payment){
    console.log("Status :" , method)
}
pay(payment.Success)

// Try passing an invalid value and observe the error
pay("Success")
error : Argument of type '"Success"' is not assignable to parameter of type 'payment'.


// Why enums are better than magic strings?
They restrict the value space.
They give autocomplete.
They prevent typos.
They are refactor-safe.