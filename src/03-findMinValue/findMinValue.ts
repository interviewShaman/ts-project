// Basic JavaScript version using Math.min
const jsNumbers = [5, 2, 8, 1, 4];
const jsMinValue = Math.min(...jsNumbers);
console.log(jsMinValue); // Output: 1

// =====================================================================

// TypeScript version using Math.min
const tsNumbers: number[] = [5, 2, 8, 1, 4];
const tsMinValue: number = Math.min(...tsNumbers);
console.log(tsMinValue); // Output: 1

// =====================================================================

// Traditional function (non-TypeScript)
function findMinValueJS(arr: string | any[]) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const jsArray = [5, 2, 8, 1, 4];
const jsResult = findMinValueJS(jsArray);

if (jsResult !== undefined) {
  console.log(jsResult); // Output: 1
} else {
  console.log("The array is empty.");
}

// =====================================================================

// Sinhala Explanation:
// මෙහිදී Array එකේ පලමු number එක තියාගෙන
// එය array එකෙහි අනෙක් numbers වලට වඩා කුඩාද කියා බලනවා.

// =====================================================================

// Full TypeScript version
function findMinValueTS(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const tsArray: number[] = [5, 2, 8, 1, 4];
const tsResult: number | undefined = findMinValueTS(tsArray);

if (tsResult !== undefined) {
  console.log(tsResult); // Output: 1
} else {
  console.log("The array is empty.");
}
