import { add } from "../src/stringCalculator";

test("should support multiple custom delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});
