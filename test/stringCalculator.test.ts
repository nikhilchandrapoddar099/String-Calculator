import { add } from "../src/stringCalculator";

test("should return the sum of multiple numbers separated by commas", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});
