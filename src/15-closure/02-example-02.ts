// ✅ Example 2: Closure-based counter (independent state)

function makeSimpleCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const simpleCounter1 = makeSimpleCounter();
simpleCounter1(); // Output: 1
simpleCounter1(); // Output: 2
simpleCounter1(); // Output: 3

const simpleCounter2 = makeSimpleCounter();
simpleCounter2(); // Output: 1
simpleCounter2(); // Output: 2
