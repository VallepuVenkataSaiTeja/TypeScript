
// In TypeScript, “special types” (often called special primitives or top/bottom types) are types that don’t behave like normal primitives such as string or number. They’re mainly used for flexibility, type safety, or edge cases.

// 1. any (opt-out of type checking)
// Disables TypeScript’s type system for a variable.
let value: any = 10;
value = "hello"; // allowed
value = true;    // allowed
// Use carefully—it removes type safety.


// 2. unknown (safe alternative to any)
// Represents any value, but you must check the type before using it.
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // safe
}
// Safer than any.


// 3. void (no return value)
// Used for functions that don’t return anything.
function logMessage(): void {
  console.log("Hello");
}


// 4. never (no possible value)
// Represents values that never occur.
function throwError(): never {
  throw new Error("Something went wrong");
}
// Also used in exhaustive checks:
function check(x: never) {}


// 5. object
// Represents non-primitive values (not number, string, etc.).
let obj: object = { name: "Alice" };


// 6. null and undefined
// These are also primitives, but considered special because of how TypeScript treats them with strict null checks.
let n: null = null;
let u: undefined = undefined;


// | Feature          | `any`   | `unknown`         |
// | ---------------- | ------- | ----------------- |
// | Type safety      | ❌ None  | ✅ Enforced        |
// | Can use directly | ✅ Yes   | ❌ No (must check) |
// | Recommended      | ❌ Avoid | ✅ Prefer          |


// Quick Summary
// - any → turns off type checking
// - unknown → safe version of any
// - void → no return
// - never → impossible value
// - object → non-primitives
// - null / undefined → absence of value



// ------------------------------------------------------------------------------------- //



let title: string | undefined = 'dev';
// title = undefined;

function add(a: number,b: number): void{
    console.log(a+b);
}

function err(msg: string): never{
    throw new Error(msg)
}

let valueAny: any = JSON.parse('{"x" : 2}');
valueAny.notThere.toFixed(2);
