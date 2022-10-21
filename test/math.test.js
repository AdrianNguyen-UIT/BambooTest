const math = require("../math");

test("testing sum function", () => {
    expect(math.sum(-100, 100)).toBe(0);
    expect(math.sum(-99, 97)).toBe(-2);
});

test("testing subtract function", () => {
    expect(math.subtract(10, 2)).toBe(8);
    expect(math.subtract(3, 10)).toBe(-7);
});