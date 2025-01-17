import { add } from "../src/stringCalculator";

test("should support multiple delimiters with length > 1", () => {
  expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
});
