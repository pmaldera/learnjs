const {Car} = require('./exercise.js');

const car = new Car(1, 'brand', 'blue');

describe('Classes basics exercise', () => {
    test("The `Car` class must have a public property called `brand` and its constructor must set a value for this property (if one is given).", () => {
        expect(car.brand).not.toBeUndefined()
    });

    test("The `Car` class must have a public property called `color` and its constructor must set a value for this property (if one is given).", () => {
        expect(car.color).not.toBeUndefined()
    });

    test('The `Car` class must have 1 private property: `#registrationNumber` and its constructor must set a value for this property (if one is given) which value is returned by the class method `getRegistrationNumber`.', () => {
        expect(car.registrationNumber).toBeUndefined()
        expect(typeof car.getRegistrationNumber).toBe("function")
        const registrationNumber = car.getRegistrationNumber()
        expect(registrationNumber).not.toBeUndefined()
        expect(registrationNumber).not.toBeNull()
    });

    test("The `Car` class must have a private property called `#price` and its constructor must NOT set a value for it. Its default value should be 0. It should have a getter and a setter called `price`", () => {
        expect(car.price).toBe(0)
        car.price = 10
        expect(car.price).toBe(10)
    });

    test("The `Car` class must have one static property `maxPrice`, its value should be 999.", () => {
        expect(Car.maxPrice).not.toBeUndefined()
        expect(Car.maxPrice).toBe(999)
    });

    test("Trying to set a Car price higher than its static property `maxPrice` should set it to the value of `maxPrice`.", () => {
        car.price = Car.maxPrice + 1
        expect(car.price).toBe(Car.maxPrice)
    });

    test("The `Car` class must have one public method called `getTaxedPrice` with one parameter `tax`. This method should return the Car price multiplied by the `tax` parameter value.", () => {
        car.price = 1
        expect(car.getTaxedPrice(10)).toBe(10)
    });
});

