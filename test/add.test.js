const add = require("../add");
describe("add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });
  test("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,5")).toBe(6);
  });
  test("should handle newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("should handle custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });
  test("should handle custom delimiters with special characters like |", () => {
    expect(add("//|\n4|5|6")).toBe(15);
  });

  test("should throw an error for a single negative number", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test("should throw an error for multiple negative numbers", () => {
    expect(() => add("1,-2,-3")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });

  test("should return the sum for numbers with no negatives", () => {
    expect(add("2,4,6")).toBe(12);
  });
});
