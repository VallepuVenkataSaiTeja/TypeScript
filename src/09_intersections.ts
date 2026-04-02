// In TypeScript, an intersection type combines multiple types into one. A value of an intersection type must satisfy all the combined types at the same time.

// Basic Syntax
type A = { name: string };
type B = { age: number };

type Person = A & B;
// Now Person must have both name and age.


// Example
const user: { name: string } & { age: number } = {
  name: "Alice",
  age: 25
};
// If you miss any property → ❌ error.


// With Reusable Types
type Employee = {
  id: number;
};

type User = {
  name: string;
};

type EmployeeUser = Employee & User;

const emp: EmployeeUser = {
  id: 1,
  name: "Bob"
};


// Intersection with Functions
// type A = { a: string };
// type B = { b: number };

// function combine(obj: A & B) {
//   console.log(obj.a, obj.b);
// }


// Conflicting Types ⚠️
// If properties conflict, the result can become unusable:

// type A = { id: string };
// type B = { id: number };

// type C = A & B; // id becomes never ❌

// Because id cannot be both string AND number.


// Real-world Use Case
// Common in:
// - Extending objects
// - Combining props in React
// - API response composition
type Base = { id: number };
type WithTimestamp = { createdAt: Date };

type Model = Base & WithTimestamp;



// --------------------------------------------------------------------------------- //


type a = { name: string }
type b = {age: number }

type com = a & b

const d : com = {
    name: 'st',
    age: 3
}

const c : a & b = {
    name : 'str',
    age : 2
}