const successTask1 = Promise.resolve("✅ Task 1 done");
const successTask2 = Promise.resolve("✅ Task 2 done");
const successTask3 = Promise.resolve("✅ Task 3 done");

const allSuccessfulTasks: Promise<string>[] = [
  successTask1,
  successTask2,
  successTask3,
];

Promise.all(allSuccessfulTasks)
  .then((results) => {
    console.log("✅ All tasks completed successfully:", results);
  })
  .catch((error) => {
    console.error("❌ One of the tasks failed:", error);
  });

// Output:
// ✅ All tasks completed successfully: [ '✅ Task 1 done', '✅ Task 2 done', '✅ Task 3 done' ]

//===============================================================================
//===============================================================================

const mixedTask1 = Promise.resolve("✅ Task 1 done");
const mixedTask2 = Promise.reject("❌ Task 2 failed");
const mixedTask3 = Promise.resolve("✅ Task 3 done");

const mixedTasks: Promise<string>[] = [mixedTask1, mixedTask2, mixedTask3];

Promise.all(mixedTasks)
  .then((results) => {
    console.log("✅ All tasks completed successfully:", results);
  })
  .catch((error) => {
    console.error("❌ One of the tasks failed:", error);
  });

// Output:
// ❌ One of the tasks failed: ❌ Task 2 failed




// ✅ To See Both Success and Failure:
Promise.allSettled([mixedTask1, mixedTask2, mixedTask3]).then((results) => {
  console.log("🔍 All results (settled):", results);
});


//=========================== EXPLANATION ===========================
//
// const p1 = Promise.resolve("✅ Task 1 done");
// const p2 = Promise.reject("❌ Task 2 failed");
// const p3 = Promise.resolve("✅ Task 3 done");

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log("Success results:", results); // ❌ Will NOT run
//   })
//   .catch((err) => {
//     console.error("❌ One of the promises failed:", err);
//   });
//
//
//------------------ Output: -❌ One of the promises failed: ❌ Task 2 failed
//----------------------------------------------------------------------------


