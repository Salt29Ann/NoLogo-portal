const delay = require('./delay');

describe('delay launch', () => {
    test('Check of correct value', async() => {
        const sum = await delay( () => 5 + 5, 1000);
        expect(sum).toBe(10);
    })
})