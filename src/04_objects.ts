// In TypeScript, objects are a fundamental way to group related data and behavior together using key–value pairs (similar to JavaScript, but with added type safety).

// What is an Object in TypeScript?
// An object is a collection of properties, where each property has:
// - a name (key)
// - a value (with a defined type)
let user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};


// Adding Types to Objects :
// TypeScript lets you define exactly what an object should look like.

// 1. Inline Type Annotation
let user1: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
// If you try:
// user1.age = "twenty-five"; // ❌ Error


// Optional Properties
// Use ? to make properties optional:
let user2: { name: string; age?: number } = {
  name: "Alice"
};


// Readonly Properties
// Prevent modification using readonly:
let user3: { readonly id: number; name: string } = {
  id: 1,
  name: "Alice"
};
// user3.id = 2; // ❌ Error


// Using Type Aliases :
// You can reuse object structures:
type User = {
  name: string;
  age: number;
};

let user4: User = { name: "Alice", age: 25 };
let user5: User = { name: "Bob", age: 30 };


// Using Interfaces :
// Another way to define object shapes:

interface Users {
  name: string;
  age: number;
}

let user6: Users = {
  name: "Alice",
  age: 25
};

// Difference:
// interface → preferred for objects & extensibility
// type → more flexible (unions, etc.)


// Nested Objects :
// Objects can contain other objects:

let user7: {
  name: string;
  address: {
    city: string;
    zip: number;
  };
} = {
  name: "Alice",
  address: {
    city: "Bangalore",
    zip: 560001
  }
};


// Methods in Objects :
// Objects can have functions:

let user8 = {
  name: "Alice",
  greet(): string {
    return "Hello " + this.name;
  }
};


// Index Signatures (Dynamic Keys) :
// When you don’t know all property names:

let scores: { [key: string]: number } = {
  math: 90,
  science: 85
};


// Object vs Object vs {}
// Important distinctions:

// Type	Meaning
// object	Any non-primitive value
// Object	Very general (avoid using)
// {}	Empty object type


// Key Benefits of Objects in TypeScript :
// - Type safety (fewer runtime errors)
// - Better IDE support (autocomplete)
// - Clear structure for data
// - Easier refactoring


// Quick Summary :
// - Objects store structured data using key–value pairs
// - TypeScript adds strict typing to objects
// - You can define shapes using:
        // - inline types
        // - type
        // - interface
// - Supports optional, readonly, nested, and dynamic properties