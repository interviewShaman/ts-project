//============================
//In JavaScript, this inside an object method refers to the object itself.
//=============================

const person = {
  name: "Zamaan",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Zamaan

//============================
// Beware of this in Arrow Functions
// Arrow functions do not bind their own this. They inherit this from the outer (lexical) scope
//============================

// const personWithArrowFunction = {
//   name: "Zamaan",
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`); // Error:
//   }
// };

// personWithArrowFunction.greet(); // Output: Hello, my name is undefined
