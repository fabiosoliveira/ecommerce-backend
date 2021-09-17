export function convertToIntPositiv(number: number) {
  let num = number | 0;
  num = num < 1 ? 1 : num;
  return Math.round(num);
}
