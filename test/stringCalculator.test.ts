import { add } from "../src/stringCalculator";

test("should handle newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});
