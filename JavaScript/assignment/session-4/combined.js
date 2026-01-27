//QUE-[1] Predict the output and explain the memory state.
// const registry = {
//   active: [{ id: 1, name: "Alpha" }],
//   archived: []
// };

// function cloneAndModify(data) {
//   // Goal: Create a copy so the original registry isn't changed
//   const copy = { ...data };
  
//   copy.active.push({ id: 2, name: "Beta" });
//   copy.active[0].name = "Gamma";
//   copy.version = 2.0;
  
//   return copy;
// }

// const newRegistry = cloneAndModify(registry);

// console.log(registry.active.length); // ?
// console.log(registry.active[0].name); // ?
// console.log(registry.version);       // ?


const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // 2
console.log(registry.active[0].name); // Gamma
console.log(registry.version);       // undefined

// Reason : here we made a shallow copy , where the primitive type's value is copied and
//  the non-primitve type's reference is copied not the value.
//  The array object inside the registry is non-primitive so it's value is not copied , 
//  but the reference is copied in newRegistry , so they both will share the same object
//  and that's why when you change the copy.active[0].name , it will also reflect in the 
//  Registry , and we get Gamma as output.
//  While the copy.version is primitive so it's only created in the newRegitry and not in
//  the Registry. and that's why it results into undefined.


//QUE-[2] Identify why the following code throws an error and fix it without using the class keyword.

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log(`${this.name} is eating.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// // Intent: Dog should inherit from Animal
// Dog.prototype = Animal.prototype; 

// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };

// const myDog = new Dog("Buddy", "Golden");
// const genericAnimal = new Animal("Generic");

// genericAnimal.bark(); // Why does this happen?
// console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?



//////////////////////// ANSWER ////////////////////////
/*
    genericAnimal.bark(); // Why does this happen?
->  because we type "Dog.prototype = Animal.prototype;" , 
    It makes both constructors share the exact same prototype object in memory,
    They are pointing to the same object, and Because of that You accidentally 
    added bark to Animal.prototype too. that's why it results into 'Woof!'
    but to call it in Animal , we have to create a method named bark


    console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
->  by writing "Dog.prototype = Animal.prototype;" , we assign the constructor reference of 
    Animal to Dog, and that's the reason the constructor property now points to Animal
*/

    `Actual Code`

function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};
Animal.prototype.bark = function(){
    console.log("Woof!")
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype.bark = function() {
  console.log("Woof!");
};

Object.setPrototypeOf(Dog,Animal)

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark();
console.log(myDog.constructor.name);


//QUE-[3] Predict the result of the following execution.

function SmartPhone(brand) {
  this.brand = brand;
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // undefined

/*
REASON  ->  When a constructor explicitly returns an object,
            JavaScript throws away the automatically created object
            and returns explicitly returned object instead.
            myPhone = {
                        brand: "Generic,
                        os: "Android"
                    }
            myPhone.brand = "Generic"
            as myPhone is just a simple object , it doesn't contain getBrand method.
            that's why myPhone.getBrand returns undefined.
*/


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