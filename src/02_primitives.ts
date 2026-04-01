// In TypeScript, primitive types are the most basic data types—values that are not objects and don’t have methods or properties beyond what the language provides.

// 1. number :
// Represents all numeric values (integers, floats, etc.).
let age: number = 25;
let price: number = 99.99;

// 2. string :
// Represents textual data.
let name: string = "Alice";
let message: string = `Hello ${name}`;

// 3. boolean
// Represents true or false.
let isLoggedIn: boolean = true;

// 4. null :
// Represents an intentional absence of value.
let empty: null = null;

// 5. undefined :
// Represents a variable that has been declared but not assigned a value.
let notAssigned: undefined = undefined;

// 6. bigint :
// Used for very large integers beyond number limits.
let bigNumber: bigint = 12345678901234567890n;

// 7. symbol
// Represents a unique and immutable value, often used as object keys.
let id: symbol = Symbol("id");

// Key Characteristics
// - Immutable: Primitive values cannot be changed (only replaced).
// - Stored by value: Variables hold the actual value, not a reference.
// - Lightweight: Faster and simpler than objects.



// --------------------------------------------------------------------------------- //



let user: string = 'dev';
// let age: number = 21;
let isCreator: boolean = true;

const bigNum: bigint = 1n;

// const mixed = bigNum + age;

const TOKEN: unique symbol = Symbol('Token')

function yearsToDay(years: number): number{
     return years * 365
}

console.log(user.toUpperCase())
// console.log(yearsToDay('2'))