// Trace the execution of this class logic.(ANSWER is in the comments)

class Counter {
  static count = 0; //refers to the class
  count = 10;       //refers to the instance

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {     //class method , cannot call by instances
    return this.count;          //in static method , 'this' refers to the class (this === Counter)
  }
}

const c1 = new Counter(); // here , Counter.count = 1 
const c2 = new Counter(); // then , Counter.count = 2

console.log(c1.getCount());            
// c1.count = 10 -> refers to the instance
console.log(Counter.getStaticCount()); 
// Counter.count = 2 -> class can call the static method
console.log(c1.getStaticCount());      
// Error : instances can't call the static methods