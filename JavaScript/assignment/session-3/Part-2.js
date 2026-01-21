// Exercise 3: The Price Formatter

const input1 = [ 10 , 20 , 30 ]
const result1 = input1.map((x)=>`$${x}`)
console.log(result1)

// Exercise 4: The Clean-Up Crew

const input = [25, -5, 18, 0, 40]
const result2 = input.filter((x) => x > 0)
console.log(result2)

// Exercise 5: The "One-Liner" Chain

const input3 = [-10, 20, 50, -5]
const result3 = input3.filter((x) => x > 0).map((x) => x * 2)
console.log(result3)