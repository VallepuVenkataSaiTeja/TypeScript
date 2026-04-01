// In TypeScript, literals are exact, fixed values—and TypeScript can use those exact values as types, not just data. This is what makes TypeScript powerful compared to plain JavaScript.

// What are Literals?
// A literal is a specific value written directly in code.
// Examples:
let name = "Alice";   // string literal
let age = 25;        // number literal
let isAdmin = true;  // boolean literal


// Literal Types :
// TypeScript allows you to use exact values as types.
// Example:
let direction: "left" | "right";

direction = "left";   // ✅
direction = "right";  // ✅
// direction = "up";     // ❌ Error
//  Here, "left" and "right" are string literal types


// Types of Literal Types :
// 1. String Literal Types
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";

// 2. Number Literal Types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 3;  // ✅
// diceRoll = 7;  // ❌

// 3. Boolean Literal Types
let isTrue: true;
isTrue = true;   // ✅
// isTrue = false;  // ❌


// Union of Literals (Very Common) :
// You can combine literals using | (union):

type Role = "admin" | "user" | "guest";

// This restricts values to only those options.


// Literal Inference (const vs let) :
// TypeScript treats values differently based on how you declare them.

// Using let
let color = "red";  
// type: string (not "red")

// Using const
const color1 = "red";
// type: "red" (literal type)

// const keeps the exact value → literal type


// Using Literals in Objects
type Button = {
  type: "primary" | "secondary";
};

let btn: Button = {
  type: "primary"
};


// Literal Types with Functions
function printStatus(status: "success" | "error") {
  console.log(status);
}

printStatus("success"); // ✅
// printStatus("loading"); // ❌


// Why Literal Types are Useful
// - Restrict allowed values
// - Prevent bugs
// - Improve autocomplete
// - Make APIs predictable


// Example use cases:
// - API response status
// - user roles
// - UI states (loading, error, success)


// Advanced: as const :
let obj = {
  name: "Alice",
  role: "admin"
} as const;

// Now:
// name → "Alice" (not string)
// role → "admin"


// Quick Summary :
// - Literals = fixed values (e.g., "hello", 10, true)
// - Literal types = exact values as types
// - Combine them using union (|)
// - const preserves literal types
// - Useful for strict and predictable code