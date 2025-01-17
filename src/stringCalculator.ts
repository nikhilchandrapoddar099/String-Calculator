export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2); // Extract delimiter
    numbers = parts[1]; // Extract numbers
  }

  const sanitized = numbers.replace(/\n/g, delimiter);
  const nums = sanitized.split(delimiter).map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}
