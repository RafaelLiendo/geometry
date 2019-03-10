import { sum, subtract, multiply, divide } from "./vector.js";

export const center = ([p, q], [r, s]) => [
  divide(sum(p, r), 2).x,
  divide(sum(s, q), 2).y
]

export const fromTriangle = (triangle) => {
  const [p, q, r] = triangle;
  const s = sum(p, multiply(subtract(r, q), -1) );

  return [p, q, r, s];
}