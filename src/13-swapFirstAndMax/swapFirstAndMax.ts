// =============== swapping the first and max value of an object ====================


//✅ Version 1: Manual swap using temporary values
// This version manually swaps the first and maximum values in the object
// It finds the maximum value and swaps it with the first value in the object.

const valueMap1: { [key: string]: number } = { a: 3, b: 2, c: 5, d: 8 };

const swapFirstAndMaxManual = (data: { [key: string]: number }) => {
  const values = Object.values(data);
  const maxValue = Math.max(...values);
  const maxIndex = values.indexOf(maxValue);

  const keys = Object.keys(data);
  const firstKey = keys[0];
  const maxKey = keys[maxIndex];

  const firstValue = data[firstKey];

  data[firstKey] = maxValue;
  data[maxKey] = firstValue;

  console.log("Manual Swap Result:", data);
};

swapFirstAndMaxManual(valueMap1);

// ✅ Version 2: Using ES6 destructuring for swapping
// This version uses destructuring to swap the first and maximum values in the object
// It finds the maximum value and swaps it with the first value in the object.
// It is more concise and leverages modern JavaScript features.

const valueMap2: { [key: string]: number } = { a: 1, b: 2, c: 5, d: 8 };

const swapFirstAndMaxDestruct = (data: { [key: string]: number }) => {
  const values = Object.values(data);
  const maxValue = Math.max(...values);
  const maxIndex = values.indexOf(maxValue);

  const keys = Object.keys(data);
  const firstKey = keys[0];
  const maxKey = keys[maxIndex];

  [data[firstKey], data[maxKey]] = [data[maxKey], data[firstKey]];

  console.log("Destructuring Swap Result:", data);
};

swapFirstAndMaxDestruct(valueMap2);

