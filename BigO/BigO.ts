/**
 * Big O Notation
 *
 * Order of Growth
 * O(1)         Constant
 * O(log n)     Logarithmic
 * O(n)         Linear
 * O(n log n)   Linearithmic
 * O(n^2)       Quadratic
 * O(n^3)       Cubic
 * O(2^n)       Exponential
 * O(n!)        Factorial
 *
 */

function constant(n: any) {
  return n
}

function logarithmic(n: number) {
  while (n > 1) {
    n = n / 2
  }
}

function linear(n: number) {
  for (let i = 0; i < n; i++) {}
}

function linearithic(n: number) {}
