export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiters = [","];
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    const delimiterPart = parts[0].slice(2);

    if (delimiterPart.startsWith("[") && delimiterPart.includes("][")) {
      delimiters =
        delimiterPart.match(/\[([^\]]+)\]/g)?.map((d) => d.slice(1, -1)) || [];
    } else if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
      delimiters = [delimiterPart.slice(1, -1)];
    } else {
      delimiters = [delimiterPart];
    }
    numbers = parts[1];
  }

  const splitRegex = new RegExp(
    `[${delimiters
      .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")}]`
  );
  const sanitized = numbers.replace(/\n/g, ",");
  const nums = sanitized.split(splitRegex).map(Number);

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
}
