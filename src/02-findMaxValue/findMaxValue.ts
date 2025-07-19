// ✅ Basic JavaScript version using Math.min
const jsMinNumbers = [5, 2, 8, 1, 4];
const jsMin = Math.min(...jsMinNumbers);
console.log(jsMin); // Output: 1

// =====================================================================

// ✅ TypeScript version using Math.min
const tsMinNumbers: number[] = [5, 2, 8, 1, 4];
const tsMin: number = Math.min(...tsMinNumbers);
console.log(tsMin); // Output: 1

// =====================================================================

// ✅ JavaScript-style function - renamed for uniqueness
function minValueUsingLoop(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const inputArrLoop = [5, 2, 8, 1, 4];
const resultLoop = minValueUsingLoop(inputArrLoop);

if (resultLoop !== undefined) {
  console.log(resultLoop); // Output: 1
} else {
  console.log("The array is empty.");
}

// =====================================================================

// 🗒 Sinhala Explanation:
// මෙහිදී Array එකේ පලමු number එක තියාගෙන
// එය array එකෙහි අනෙක් numbers වලට වඩා කුඩාද කියා බලනවා.

// =====================================================================

// ✅ TypeScript-style reusable function
function minValueTS(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const inputArrTS: number[] = [5, 2, 8, 1, 4];
const resultTS = minValueTS(inputArrTS);

if (resultTS !== undefined) {
  console.log(resultTS); // Output: 1
} else {
  console.log("The array is empty.");
}
