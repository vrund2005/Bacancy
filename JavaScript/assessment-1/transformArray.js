/*               Transform Array of Objects into Tag-Based Mapping

You are given an array of objects. Each object contains:
an id (number)
a tags array (list of strings)
Some objects may have duplicate id values.
Your task is to transform this array into an object where:
Each key is a unique tag
Each value is an array of unique IDs associated with that tag IDs inside each array should be sorted in ascending order
Duplicate IDs for the same tag should appear only once
Example:
const input = [
    { id: 3, tags: ["a", "b"] }, 
    { id: 1, tags: ["b", "c"] }, 
    { id: 2, tags: ["a", "c", "d"] }, 
    {id: 2, tags: ["d", "e"] }, // duplicate id
];
const output = {
    a: [2, 3], 
    b: [1, 3], 
    C: [1, 2], 
    d: [2], 
    e: [2]
}

*/



const input = [
  { id: 3, tags: ["a", "b"] },
  { id: 1, tags: ["b", "c"] },
  { id: 2, tags: ["a", "c", "d"] },
  { id: 2, tags: ["d", "e"] }
];
const ans = {};
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].tags.length; j++) {
    const tag = input[i].tags[j];
    if (!(tag in ans)) {
      ans[tag] = new Set();
    }
    ans[tag].add(input[i].id);
  }
}

console.log(ans);

const new_dict = {};
for (const key of Object.keys(ans)){
  new_dict[key] = (Array.from(ans[key])).sort((a, b) => a - b);
}

console.log(new_dict);