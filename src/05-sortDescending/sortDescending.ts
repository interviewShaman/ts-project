// ✅ JavaScript-style sort using built-in sort()
const jsInputDesc = [5, 2, 8, 1, 4];
const sortedDescJS = jsInputDesc.sort((a, b) => b - a);
console.log("JS sorted (desc):", sortedDescJS); // Output: [8, 5, 4, 2, 1]

// =============================================================

// ✅ TypeScript bubble sort (descending)
function bubbleSortDesc(numbers: number[]): number[] {
  const arr = [...numbers]; // clone to avoid mutating original input

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const inputForBubbleDesc: number[] = [5, 2, 8, 1, 4];
const sortedDescBubble = bubbleSortDesc(inputForBubbleDesc);
console.log("Bubble sorted (desc):", sortedDescBubble); // Output: [8, 5, 4, 2, 1]
