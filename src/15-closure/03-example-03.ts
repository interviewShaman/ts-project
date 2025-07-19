// ✅ Example 3: Closure with multiple methods (encapsulation)

function createAdvancedCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log("Current Count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current Count:", count);
    },
    getCount: function (): number {
      return count;
    },
  };
}

const advancedCounter = createAdvancedCounter();
advancedCounter.increment(); // Current Count: 1
advancedCounter.increment(); // Current Count: 2
advancedCounter.decrement(); // Current Count: 1
console.log("Final Count:", advancedCounter.getCount()); // Final Count: 1
