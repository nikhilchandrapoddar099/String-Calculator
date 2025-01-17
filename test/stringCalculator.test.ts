import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  // 1. Empty string returns 0
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  // 2. Single number returns the number itself
  test("should return the number itself for a single number", () => {
    expect(add("5")).toBe(5);
    expect(add("10")).toBe(10);
  });

  // 3. Two numbers separated by a comma return their sum
  test("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,4")).toBe(7);
  });

  // 4. Handle an unknown amount of numbers
  test("should return the sum of an unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40")).toBe(100);
  });

  // 5. Handle newlines as delimiters
  test("should handle newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  // 6. Negative numbers throw an exception with all negative numbers in the message
  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2,-4"
    );
    expect(() => add("-5,-6")).toThrow("negative numbers not allowed: -5,-6");
  });

  // 7. Numbers bigger than 1000 should be ignored
  test("should ignore numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,999")).toBe(1999);
  });

  // 8. Delimiters can be of any length with the format "//[delimiter]\\n"
  test("should support custom delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[###]\n4###5###6")).toBe(15);
  });

  // 9. Allow multiple delimiters, even with length > 1
  test("should support multiple custom delimiters, including those with length > 1", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });
});
