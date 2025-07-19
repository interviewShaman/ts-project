let items = [
  { id: 1, value: 20 },
  { id: 2, value: 35 },
  { id: 3, value: 12 },
  { id: 4, value: 45 },
  { id: 5, value: 30 },
];

// Find the maximum value based on a specific property
let maxValue = Math.max(...items.map((item) => item.value));

// Find the index of the object with the maximum value
let maxIndex = items.findIndex((item) => item.value === maxValue);

console.log("Maximum value:", maxValue); //Maximum value: 45
console.log("Index of maximum value:", maxIndex); // Index of maximum value: 3
