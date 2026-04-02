// In TypeScript, arrays are like JavaScript arrays—but with type safety, so you control what kind of values they can hold.

// Basic Array Types :

// 1. Using type[]
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// 2. Using Array<Type> (generic syntax)
let numbers2: Array<number> = [1, 2, 3];

// Both are equivalent ✅


// Mixed Types (Union in Arrays)
let values: (string | number)[] = [1, "hello", 2, "world"];


// Readonly Arrays
let nums: readonly number[] = [1, 2, 3];
// nums.push(4); ❌ Error (can't modify)
// Or:
let nums2: ReadonlyArray<number> = [1, 2, 3];


// Array of Objects
type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];


// Multi-dimensional Arrays
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];


// Tuple (Fixed-Length Array)
let user: [string, number] = ["Alice", 25];
// Order matters
// Length is fixed


// Common Array Methods (Typed)
let nums3: number[] = [1, 2, 3];

nums3.push(4);        // ✅
nums3.map(n => n * 2); // inferred as number[]

// TypeScript infers types automatically in many cases.


// Key Points
// - Arrays are type-restricted (unlike plain JS).
// - Use T[] for simplicity, Array<T> for generics.
// - Combine with union, intersection, and tuples for flexibility.


// --------------------------------------------------------------------------------- //


let n: number[] = [1,2,3]
let n2: Array<number> = [1,2,3]