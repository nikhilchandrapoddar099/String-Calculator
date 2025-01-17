import { add } from "../src/stringCalculator";

test("should ignore numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,1001")).toBe(1000);
});
