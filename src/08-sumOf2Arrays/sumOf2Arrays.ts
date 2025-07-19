// ✅ Using map() to sum corresponding elements of two arrays
const firstArray: number[] = [1, 2, 3];
const secondArray: number[] = [4, 5, 6];

const summedArrayUsingMap: number[] = firstArray.map(
  (value, index) => value + secondArray[index]
);
console.log("Sum using map():", summedArrayUsingMap); // Output: [5, 7, 9]

// ============================================================

// ✅ Using for loop to sum corresponding elements of two arrays
const arrayA: number[] = [1, 2, 3];
const arrayB: number[] = [4, 5, 6];
const summedArrayUsingLoop: number[] = [];

for (let i = 0; i < arrayA.length; i++) {
  summedArrayUsingLoop.push(arrayA[i] + arrayB[i]);
}

console.log("Sum using loop:", summedArrayUsingLoop); // Output: [5, 7, 9]
