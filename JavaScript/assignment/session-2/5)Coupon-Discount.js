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