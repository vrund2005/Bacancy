// Exercise 3: The Price Formatter
// Scenario: You have a list of raw number prices. You need to format them for the UI.
// Input: [10, 20, 30]
// Task: Use .map() to add a "$" sign to the front of every number.
// Expected Output: ["$10", "$20", "$30"]

const input1 = [ 10 , 20 , 30 ]
const result1 = input1.map((x)=>`$${x}`)
console.log(result1)



// Exercise 4: The Clean-Up Crew
// Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).
// Input: [25, -5, 18, 0, 40]
// Task: Use .filter() to keep only valid ages (positive numbers > 0).
// Expected Output: [25, 18, 40]

const input = [25, -5, 18, 0, 40]
const result2 = input.filter((x) => x > 0)
console.log(result2)



// Exercise 5: The "One-Liner" Chain
// Scenario: Combine both methods.
// Input: [-10, 20, 50, -5]
// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).
// Expected Output: [40, 100]

const input3 = [-10, 20, 50, -5]
const result3 = input3.filter((x) => x > 0).map((x) => x * 2)
console.log(result3)