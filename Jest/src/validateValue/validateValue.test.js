const validateValue = require('./validateValue');

test('Check of validate Value', () => {
    expect(validateValue(50)).toBe(true);
})

describe('Check of validate Value', () => {
    test('Check of correct value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Check of value less than expected', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('Check of value more than expected', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('Check of boundary value', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('Check of boundary value', () => {
        expect(validateValue(100)).toBe(true);
    })
})