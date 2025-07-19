// ✅ Example 1: Swap index 0 and 2 using temporary variable
const swapTempExample: number[] = [10, 20, 30, 40];

const tempValue = swapTempExample[0];
swapTempExample[0] = swapTempExample[2];
swapTempExample[2] = tempValue;

console.log("After temp swap (0 and 2):", swapTempExample); // Output: [30, 20, 10, 40]

// ============================================================

// ✅ Example 2: Swap index 1 and 3 using ES6 destructuring
const swapDestructExample: number[] = [10, 20, 30, 40];

[swapDestructExample[1], swapDestructExample[3]] = [swapDestructExample[3], swapDestructExample[1]];

console.log("After destructuring swap (1 and 3):", swapDestructExample); // Output: [10, 40, 30, 20]

