// ============================================================
// ✅ Example 1: Simple closure with outer and inner variables

function createMessagePrinter(outerMessage: string) {
  return function printInnerMessage(innerMessage: string): void {
    console.log("Outer Variable:", outerMessage);
    console.log("Inner Variable:", innerMessage);
  };
}

const showMessage = createMessagePrinter("outside");
showMessage("inside");
