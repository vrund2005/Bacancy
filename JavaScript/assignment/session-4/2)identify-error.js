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



// ANSWER
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
