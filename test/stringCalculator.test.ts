import { add } from "../src/stringCalculator";

test("should return the sum of two numbers separated by a comma", () => {
  expect(add("1,5")).toBe(6);
});
