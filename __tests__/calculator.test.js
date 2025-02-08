import { add } from '../src/calculator.js';

describe("String Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single input", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum for two comma separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should return the sum for numbers separated by newline", () => {
    expect(add("1\n2")).toBe(3);
  });

  test("should allow custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should allow custom delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should throw error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
  });
}); 