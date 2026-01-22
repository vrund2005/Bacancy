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