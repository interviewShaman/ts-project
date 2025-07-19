const fastSuccess1 = Promise.resolve("✅ Task 1 done instantly");
const fastSuccess2 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("✅ Task 2 done (1s)"), 1000)
);
const fastSuccess3 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("✅ Task 3 done (2s)"), 2000)
);

const allRacingTasks: Promise<string>[] = [
  fastSuccess1,
  fastSuccess2,
  fastSuccess3,
];

Promise.race(allRacingTasks)
  .then((result) => {
    console.log("🏁 First task resolved:", result);
  })
  .catch((error) => {
    console.error("❌ First task failed:", error);
  });

// Output:
// 🏁 First task resolved: ✅ Task 1 done instantly
//===============================================================================

const raceTask1 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("✅ Task 1 done (2s)"), 2000)
);
const raceTask2 = new Promise<string>((_, reject) =>
  setTimeout(() => reject("❌ Task 2 failed early (1s)"), 1000)
);
const raceTask3 = new Promise<string>((resolve) =>
  setTimeout(() => resolve("✅ Task 3 done (3s)"), 3000)
);

const racingTasksWithFailure: Promise<string>[] = [
  raceTask1,
  raceTask2,
  raceTask3,
];

Promise.race(racingTasksWithFailure)
  .then((result) => {
    console.log("🏁 First task resolved:", result);
  })
  .catch((error) => {
    console.error("❌ First task failed:", error);
  });

// Output (after 1 second):
// ❌ First task failed: ❌ Task 2 failed early (1s)
//===============================================================================
