// ✅ JavaScript version using sort()
const jsAscNumbers = [5, 2, 8, 1, 4];
const jsSortedAsc = jsAscNumbers.sort((a, b) => a - b);
console.log(jsSortedAsc); // Output: [1, 2, 4, 5, 8]

// ===============================================================

// ✅ Bubble Sort TypeScript version
function bubbleSortAscending(arr: number[]): number[] {
  const copy = [...arr]; // avoid mutating original
  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        const temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
      }
    }
  }
  return copy;
}

const bubbleInputAsc: number[] = [5, 2, 8, 1, 4];
const sortedBubbleAsc = bubbleSortAscending(bubbleInputAsc);
console.log(sortedBubbleAsc); // Output: [1, 2, 4, 5, 8]
