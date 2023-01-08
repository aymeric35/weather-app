export function closest(input: number, values: number[]): number {
  return values.reduce((a, b) => Math.abs(b - input) < Math.abs(a - input) ? b : a, 0)
}
