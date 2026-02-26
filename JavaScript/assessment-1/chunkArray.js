/*                      Chunk an Array

Write a function chunkArray (arr, size) that:
Splits an array into smaller arrays (chunks) of a given size
Returns a new array containing these chunks
Uses reduce
Uses slice OR index-based logic
Does not use loops (for, while)
Example:
Input: ([1, 2, 3, 4, 5], 2)
Output: [[1, 2], [3, 4], [5]]
Contraints:
size will always be greater than 0
Original array should not be mutated

*/



//      slicing method
function chunkArray(arr,size){
    return arr.reduce((acc,item,index)=>{
        if(index%size===0){
            acc.push(arr.slice(index,index+size))
        }
        return acc;
    },[])
}

console.log(chunkArray([1,2,3,4,5],2))

//      index-based logic
function chunkArray(arr,size){
    return arr.reduce((acc,item,index)=>{
        const chunkIndex = Math.floor(index/size)
        if(!acc[chunkIndex]){
            acc[chunkIndex] = []
        }
        acc[chunkIndex].push(item)
        return acc;
    },[])
}