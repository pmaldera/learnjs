/**
 * - The `Car` class must have a public property called `brand` and its constructor must set a value for this property (if one is given).
 * - The `Car` class must have a public property called `color` and its constructor must set a value for this property (if one is given).
 * - The `Car` class must have 1 private property: `#registrationNumber` and its constructor must set a value for this property (if one is given) which value is returned by the class method `getRegistrationNumber`.
 * - The `Car` class must have a private property called `#price` and its constructor must NOT set a value for it. Its default value should be 0. It should have a getter and a setter called `price`.
 * - The `Car` class must have one static property called `maxPrice`, its value should be 999.
 * - Trying to set a Car price higher than its static property `maxPrice` should set it to the value of `maxPrice`.
 * - The `Car` class must have one public method called `getTaxedPrice` with one parameter `tax`. This method should return the Car price multiplied by the `tax` parameter value.
 * - The `Octavia` class must implement a constructor that uses the `Car` class constructor through the `super` keyword
 * - Any `Octavia` instance must have a brand property with the value 'Skoda'
 * - The `Ocatvia` class must reimplement the `getRegistrationNumber` which will return the instance registrationNumber followed by '-OCT'. Once again the `super` keyword might help you.
 */

class Car {
    // WRITE YOUR CODE HERE
}

class Octavia extends Car {
    constructor(registrationNumber, color) {
        // WRITE YOUR CODE HERE
    }

    getRegistrationNumber() {
        // WRITE YOUR CODE HERE
    }
}

// Do not touch anything above this.
module.exports = {
    Car,
    Octavia
}