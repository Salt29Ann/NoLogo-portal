const mapArrToStrings = require('./mapArrToString');

describe('map Array to Sring', () => {
    test('Check of correct value', () => {
        expect(mapArrToStrings( [1, 2, 3])).toEqual(['1', '2', '3']); 
        // toEqual сравнивание свойства одного объекта со свойством другого объекта
    })
    test('Check of array with mixed values', () => {
        expect(mapArrToStrings( [1, 2, 3, null, undefined, 'string'])).toEqual(['1', '2', '3']); 
    })
    test('Check of empty array', () => {
        expect(mapArrToStrings( [])).toEqual([]); 
    })
    test('Check of array value when inqequal', () => {
        expect(mapArrToStrings( [1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
    })
})