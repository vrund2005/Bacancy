// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.

function wrapInArray<T>(val:T):T[]{
    return [val]
}


// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number

interface PaginatedResponse<T>{
    item : T[],
    total : number
}


// // Create a generic class called KeyValuePair that has two type parameters K and V. It should have
// // properties key of type K and value of type V.

// class KeyValuePair<K,V>{
//     key:K;
//     value:V;

//     constructor(key:K,value:V){
//         this.key = key;
//         this.value = value;
//     }
// }