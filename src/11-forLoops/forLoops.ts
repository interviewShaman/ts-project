// ✅ Iterating over an object using 'for...in'
const scoreMap: { [key: string]: number } = { a: 1, b: 2, c: 5, d: 8 };

for (const key in scoreMap) {
  const value = scoreMap[key];
  console.log(`Key: ${key}, Value: ${value}`);
}

// Output:
// Key: a, Value: 1
// Key: b, Value: 2
// Key: c, Value: 5
// Key: d, Value: 8

// ===========================================================

// ✅ Iterating over an array using 'for...of'
const numberList: number[] = [1, 2, 3, 4, 5];

for (const num of numberList) {
  console.log(num);
}

// Output:
// 1
// 2
// 3
// 4
// 5
