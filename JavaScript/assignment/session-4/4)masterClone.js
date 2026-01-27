// Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).


function masterClone(obj) {
  // Handle null
  if (obj === null) return null;

  // Handle primitives (string, number, boolean, bigint, symbol, undefined)
  if (typeof obj !== "object") return obj;

  // Handle functions (allowed to remain shared)
  if (typeof obj === "function") return obj;

  // Handle arrays
  if (Array.isArray(obj)) {
    const newArr = [];
    for (let i = 0; i < obj.length; i++) {
      newArr[i] = masterClone(obj[i]);
    }
    return newArr;
  }

  // Handle objects
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = masterClone(obj[key]);
    }
  }

  return newObj;
}


// EXAMPLE - TEST 
const original = {
  name: "Vrund",
  skills: ["Python", "JS"],
  address: {
    city: "Ahmedabad",
    coords: [23.03, 72.58]
  },
  greet: function() {
    return "Hello";
  }
};

const cloned = masterClone(original);

cloned.address.city = "Mumbai";
cloned.skills[0] = "Go";

console.log(original.address.city); // Ahmedabad 
console.log(original.skills[0]);    // Python 
console.log(original.greet === cloned.greet); // true 