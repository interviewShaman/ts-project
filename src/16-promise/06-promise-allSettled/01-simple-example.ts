const mixedPromise1 = Promise.resolve("✅ Task 1 done");
const mixedPromise2 = Promise.reject("❌ Task 2 failed");
const mixedPromise3 = Promise.resolve("✅ Task 3 done");

// ✅ To See Both Success and Failure:
Promise.allSettled([mixedTask1, mixedTask2, mixedTask3]).then((results) => {
  console.log("🔍 All results (settled):", results);
});

// ======================= Output: =========================
//
// 🔍 All results (settled):
// [
//   { status: 'fulfilled', value: '✅ Task 1 done' },
//   { status: 'rejected', reason: '❌ Task 2 failed' },
//   { status: 'fulfilled', value: '✅ Task 3 done' }
// ]
//
// ===========================================================
