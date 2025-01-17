import { add } from "../src/stringCalculator";

test("should support custom delimiters of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});
