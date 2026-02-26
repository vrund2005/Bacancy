// ### Exercise 1: Basic setTimeout

// Task: Create a function that logs numbers 1 to 5, with a 1-second delay between each number.
// TODO: Implement countWithDelay function
function countWithDelay() {
    for ( let i = 1; i <= 5; i++){
        setTimeout(()=>{console.log(i)},i*1000);
    }
}
countWithDelay();



// ### Exercise 2: setTimeout in Loop (Fix the Bug)

// Task: Fix the following code so it logs 0, 1, 2 instead of 3, 3, 3.
// BUGGY CODE - Fix this
// for (var i = 0; i < 3; i++) {
//  setTimeout(function() {
//    console.log(i); // Currently logs: 3, 3, 3
//  }, 1000);
// }

for (let i = 0; i < 3; i++) {       //use let instead of var
 setTimeout(function() {
   console.log(i); // now logs: 0 , 1 , 2
 }, 1000);
}



// ### Exercise 3: setTimeout with Clear

// Task: Create a countdown timer that counts from 10 to 0, then stops.
// TODO: Implement countdown function
function countdown(start) {
    let count = 0;
    for ( let i = 10; i>=0 ; i--){
        setTimeout(function(){console.log(i)},count*1000);
        count++;
    }
}
countdown(10);