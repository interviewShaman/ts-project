// ✅ Object with a method that depends on `this`
const carObject = {
  brand: "Tesla",
  getDetails: function (type: string, color: string): void {
    console.log(`This is a ${color} ${this.brand} ${type}`);
  },
};

// ✅ Another object to reuse the method with a different context
const bikeObject = {
  brand: "Yamaha",
};

// ✅ Using `call` to invoke the method with bikeObject as `this`
carObject.getDetails.call(bikeObject, "motorbike", "blue");
// Output: This is a blue Yamaha motorbike

// ✅ Using `apply` (same as call but arguments as array)
carObject.getDetails.apply(bikeObject, ["scooter", "red"]);
// Output: This is a red Yamaha scooter

// ✅ Using `bind` to permanently bind the method to bikeObject
const getBikeDetails = carObject.getDetails.bind(bikeObject);
getBikeDetails("sports bike", "black");
// Output: This is a black Yamaha sports bike
