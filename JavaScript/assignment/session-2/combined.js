// Assignment 1: Number Check
// Write a program to check whether a number is:
// - Positive
// - Negative
// - Zero


let a = prompt("Enter a number = ")

if(a == 0){
    console.log("The number is ZERO")
}
else if(a < 0){
    console.log("The number is Negative")
}
else{
    console.log("The number is positive")
}


// Assignment 2: Even/Odd in Range
// Print numbers from 1 to 20 and show whether each is Even or Odd.
// Expected format:
// 1 -> Odd
// 2 -> Even
// 3 -> Odd
// ...

for (let a = 1; a <= 20; a++){
    if(a %2== 0){
        console.log(a + "-> Even")
    }
    else{
        console.log(a + "-> Odd")
    }
}


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

let role1 = "ADMIN"
let role2 = "USER"
let role3 = "MANAGER"

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


// Assignment 4: Total Price Function
// Create a function:
// calculateTotalPrice(price, quantity)
// Return total.
// Example:
// console.log(calculateTotalPrice(150, 4)); // 600

function calculateTotalPrice(price,qnt){
    console.log(price*qnt)
}

calculateTotalPrice(150,4)


// Assignment 5: Coupon Discount Function
// Create a function:
// applyCoupon(amount, couponCode)
// Rules:
// "SAVE10" → 10% discount
// "SAVE20" → 20% discount
// "NONE" → no discount
// Example:
// console.log(applyCoupon(1000, "SAVE10")); // 900
// console.log(applyCoupon(2000, "SAVE20")); // 1600
// console.log(applyCoupon(500, "NONE"));    // 500

function applyCoupon(amount,couponCode){
    if ( couponCode == "NONE"){
        console.log(amount)
    }
    else if ( couponCode == "SAVE10"){
        console.log(amount*0.9)
    }
    else {
        console.log(amount*0.8)
    }
}

applyCoupon(1000,"SAVE10")
applyCoupon(2000,"SAVE20")
applyCoupon(500,"NONE")