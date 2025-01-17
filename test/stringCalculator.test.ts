import { add } from "../src/stringCalculator";

test("should return the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});
