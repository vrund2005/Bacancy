// Create a variable prices as an array of numbers

const prices: number[] = [10, 20, 40, 50];
console.log(prices);


// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum

function calculateTotal(prices: number[]): number {
    return prices.reduce((acc: number, cur: number): number => {
        return acc + cur;
    }, 0);
}
console.log(calculateTotal(prices));


// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100

function check_me(a: number, b: number): string {
    if ((a + b) > 100) {
        return `${a + b} is greater than 100`;
    }
    return `${a + b} is not greater than 100`;
}
console.log(check_me(50, 60));