const suma = require('./script');

test("la suma de 2 + 3 = 5", () => {
    expect(suma(2, 3)).toBe(5);
});