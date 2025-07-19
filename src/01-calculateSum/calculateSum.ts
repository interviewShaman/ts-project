// Simple one-liner reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

// ==============================================================================

// TypeScript version using reduce
function calculateSum(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

const numbers2: number[] = [1, 2, 3, 4, 5];
const result: number = calculateSum(numbers2);
console.log(result); // Output: 15

// ==============================================================================

// Traditional for loop version in plain JavaScript style
function calculateSumOld(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const numbers3: number[] = [1, 2, 3, 4, 5];
const resultOld: number = calculateSumOld(numbers3);
console.log(resultOld); // Output: 15
