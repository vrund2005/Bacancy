// Exercise 1: The URL Slug Builder

const input1 = "Javascript For Beginners"

const lower = input1.toLowerCase()
console.log(lower)

const words = lower.split(" ")
console.log(words)

const url = words.join("-")
console.log(url)


// Exercise 2: Pagination Logic

const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const output = input2.slice(3,6)
console.log(output)