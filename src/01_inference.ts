// In TypeScript, type inference means the compiler automatically figures out the type of a variable, function return value, or expression without you explicitly specifying it.
// Instead of writing types everywhere, TypeScript “infers” them from the context.


// let message = "Hello";
// You didn’t write a type, but TypeScript infers:
let message: string;
// So now:
// message = 42; // ❌ Error (number not assignable to string)


// Function Return Type Inference
function add(a: number, b: number) {
  return a + b;
}
// TypeScript infers the return type as number. Equivalent to:
// function add(a: number, b: number): number


// Array Type Inference
let numbers = [1, 2, 3];
// Inferred as:
// let numbers: number[];
// But:
let mixed = [1, "hello"];
// Inferred as:
// let mixed: (number | string)[];


// Contextual Typing (Smart Inference)
// TypeScript also infers types based on where the value is used:
window.addEventListener("click", (event) => {
  console.log(event.clientX);
});
// Here, event is inferred as a MouseEvent automatically.


// Object Inference
const user = {
  name: "Alice",
  age: 25
};
// Inferred as:
/* 
{
  name: string;
  age: number;
}
*/


// Let vs Const Inference
let x = 10;     // type: number
const y = 10;   // type: 10 (literal type)


// When Inference Can Be Weak
// Sometimes TypeScript can’t infer well, like:
let value;
value = 10;
value = "hello";
// Here, value becomes:
// any - This removes type safety — avoid this.


//Best Practice
// - Let TypeScript infer simple types
// - Explicitly define types when:
// - Code is complex
// - Public APIs are involved
// - You want stricter safety



// Quick Summary :
// Type inference in TypeScript:
// - Saves time (less typing)
// - Keeps code clean
// - Still provides strong type safety
// - Works for variables, functions, arrays, objects, and more


// --------------------------------------------------------------------------------- //


let count = 0;
let site = 'academydev'
const scores = [10,20,30]


// function add(a: number,b: number): number{
//     return a+b
// }
// console.log(add(2,3))


let maybe: string | number;
maybe = Math.random() > 0.5 ? 'test' : 10