export function add(numbers: string): number {
  if (numbers === "") return 0;
  const sanitized = numbers.replace(/\n/g, ","); // Replace newlines with commas
  const nums = sanitized.split(",").map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}
