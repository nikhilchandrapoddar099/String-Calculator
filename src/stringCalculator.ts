export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2);
    numbers = parts[1];
  }

  const sanitized = numbers.replace(/\n/g, delimiter);
  const nums = sanitized.split(delimiter).map(Number);

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  // Ignore numbers greater than 1000
  return nums.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
}
