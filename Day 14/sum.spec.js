const sum = require("./index"); //import
test("testing function sum", () => {
  expect(sum(3, 3)).toBe(6);
});
