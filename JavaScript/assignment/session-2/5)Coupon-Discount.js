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