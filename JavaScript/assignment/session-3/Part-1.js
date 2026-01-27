// Exercise 1: The URL Slug Builder
// Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).
// Input: "JavaScript For Beginners"
// Task:
// Convert the string to lowercase.
// Split the string into words.
// Join the words back together using hyphens (-).
// Expected Output: "javascript-for-beginners"

const input1 = "Javascript For Beginners"

const lower = input1.toLowerCase()
console.log(lower)

const words = lower.split(" ")
console.log(words)

const url = words.join("-")
console.log(url)



// Exercise 2: Pagination Logic
// Scenario: You have a list of 10 items. You need to simulate "Page 2" of a table, displaying only items 4, 5, and 6.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Task: Use .slice() to extract the items at indices 3, 4, and 5.
// Expected Output: [4, 5, 6]

const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const output = input2.slice(3,6)
console.log(output)