//QUE-[1] Predict the output and explain the memory state.

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

