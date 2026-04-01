// In TypeScript, assertions (often called type assertions) are a way to tell the compiler:
// “Trust me — I know more about this value’s type than you do.”
// They don’t change the runtime behavior — they only affect type checking.

// Assertions override TypeScript’s type inference
// No runtime effect , Can be unsafe if misused

//  Basic Syntax
// 1. as syntax (recommended)
// 2. Angle-bracket syntax

let value : any = 'hello';
let strLength: number = (value as string).length; // as syntax
let strLength2: number = (<string>value).length; // Angle-bracket syntax
console.log(strLength)
console.log(strLength2)

// Note: The as syntax is preferred, especially when using JSX (like in React), because angle brackets can conflict with HTML-like syntax.


// Example Use Cases

//1. Narrowing unknown or any
let data: unknown = "TypeScript";
let len = (data as string).length;

// 2. Working with DOM elements
const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);

// 3. Fixing overly broad types
let id: number | string = "123";
let strId = id as string;


// Non-null Assertion (!)
// Used when you’re sure a value is not null or undefined:
const el = document.getElementById("app")!;
// This tells TypeScript: “This will not be null — don’t worry.”
// Use carefully — it can cause runtime errors if you're wrong.


// Type Assertion vs Type Casting :
// TypeScript assertions ≠ runtime casting ,They do not convert values
let num = "123" as unknown as number; // allowed, but unsafe
// The value is still a string at runtime.



// type guards instead of blindly asserting
if(typeof value === 'string'){
    console.log(value)
}


// Summary :
// Assertions override TypeScript’s type inference
// Use as Type syntax
// No runtime effect
// Can be unsafe if misused


// real-world TypeScript assertion examples

// 1. Working with Form Inputs (Frontend)
const input1 = document.getElementById("email") as HTMLInputElement;
input1.value = "user@example.com";
// getElementById returns HTMLElement | null
// But you know it's an <input> 
//  Without assertion, .value would give an error.


// 2. Handling API Responses (Very Common)
// When calling APIs, responses are often typed as any or unknown.
type User = {
  id: number;
  name: string;
};

async function getUser() {
  const res = await fetch("/api/user");
  const data = await res.json();
  const user = data as User;
  console.log(user.name);
}
// TypeScript doesn’t know API response shape
// You assert it to your expected type
// Risk: If API changes, this can break at runtime.


// 3. Using Local Storage
// Data from localStorage is always a string or null.
const storedUser = localStorage.getItem("user");
const user = JSON.parse(storedUser!) as { name: string };
console.log(user.name);
// ! → non-null assertion
// as → tells TypeScript the structure


// 4. Event Handling (Frontend frameworks like React)
function handleChange(event: Event) {
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}
// event.target is typed as EventTarget
// But you know it's an <input>


// 5. Third-party Library Data
// Sometimes libraries don’t have perfect types.
/* 
 const chartData = getChartData() as { labels: string[]; values: number[] };
 console.log(chartData.labels); 
*/


// 6. Narrowing Union Types (Quick Fix)
function printId(id: string | number) {
  const strId = id as string;
  console.log(strId.toUpperCase());
}
// Not ideal — better to use type guards:
if (typeof id === "string") {
  console.log(id.toUpperCase());
}