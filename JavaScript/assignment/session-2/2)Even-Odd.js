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