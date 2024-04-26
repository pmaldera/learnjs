const {sumWithForEach, sumWithReduce, sumWithFor} = require('./exercise.js');

describe('sumWithFor', () => {
    const arr = [1, 2, 3];
    const spyReduce = jest.spyOn(arr, 'reduce');
    const spyForEach = jest.spyOn(arr, 'forEach');
    const spyForMap = jest.spyOn(arr, 'map');
    const result = sumWithFor(arr);

    test("`sumWithFor` shouldn't use `reduce` or `forEach` or `map` methods", () => {
        expect(spyReduce).not.toHaveBeenCalled();
        expect(spyForEach).not.toHaveBeenCalled();
        expect(spyForMap).not.toHaveBeenCalled();
    });

    test('`sumWithForEach` returned value should be the sum of the numbers in the array', () => {
        expect(result).toBe(6);
    });
})

describe('`sumWithReduce`', () => {
    const arr = [1, 2, 3];
    const spy = jest.spyOn(arr, 'reduce');
    const result = sumWithReduce(arr);

    test('`sumWithForEach` should have used `reduce` method once', () => {
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('`sumWithForEach` returned value should be the sum of the numbers in the array', () => {
        expect(result).toBe(6);
    });
})


describe('`sumWithForEach`', () => {
    const arr = [1, 2, 3];
    const spy = jest.spyOn(arr, 'forEach');
    const result = sumWithForEach(arr);

    test('`sumWithForEach` should have used `forEach` method once', () => {
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('`sumWithForEach` returned value should be the sum of the numbers in the array', () => {
        expect(result).toBe(6);
    });
})
