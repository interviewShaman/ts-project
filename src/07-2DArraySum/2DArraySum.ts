// ✅ Creating a 2D number matrix
const numberMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// ✅ Function to calculate the total sum of elements in a 2D array
function calculateMatrixSum(matrix: number[][]): number {
  let total = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      total += matrix[row][col];
    }
  }

  return total;
}

const matrixSum: number = calculateMatrixSum(numberMatrix);
console.log("Total sum of 2D array:", matrixSum); // Output: 45
