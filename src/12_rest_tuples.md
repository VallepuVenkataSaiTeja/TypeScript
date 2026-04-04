In TypeScript, **tuples** are a special kind of array where **the number of elements and their types are fixed and known in advance**.

Think of them as **typed, ordered lists**.

---

# 🔹 Basic Tuple

```ts
let person: [string, number] = ["Alice", 25];
```

* 1st element → `string`
* 2nd element → `number`

✅ Valid:

```ts
let person: [string, number] = ["Bob", 30];
```

❌ Invalid:

```ts
let person: [string, number] = [30, "Bob"]; // wrong order
```

---

# 🔹 Why Use Tuples?

Use tuples when:

* Order matters
* Each position has a specific meaning

Example:

```ts
let user: [string, number, boolean] = ["Alice", 25, true];
// name, age, isActive
```

---

# 🔹 Accessing Tuple Elements

```ts
let user: [string, number] = ["Alice", 25];

console.log(user[0]); // string
console.log(user[1]); // number
```

TypeScript **knows the exact type** at each index 👍

---

# 🔹 Destructuring Tuples

```ts
let user: [string, number] = ["Alice", 25];

const [name, age] = user;
```

---

# 🔹 Optional Elements

```ts
let user: [string, number?];

user = ["Alice"];
user = ["Alice", 25];
```

---

# 🔹 Readonly Tuples

Prevent modification:

```ts
const point: readonly [number, number] = [10, 20];

// point[0] = 5 ❌ Error
```

---

# 🔹 Named Tuples (Improves Readability)

```ts
type User = [name: string, age: number];

const u: User = ["Alice", 25];
```

---

# 🔹 Tuples vs Arrays

```ts
let arr: string[] = ["a", "b", "c"];        // flexible
let tuple: [string, number] = ["a", 1];     // fixed
```

| Feature       | Array    | Tuple             |
| ------------- | -------- | ----------------- |
| Length        | Variable | Fixed             |
| Types         | Same     | Different allowed |
| Order matters | No       | Yes               |

---

# 🔹 Tuples in Functions

Return multiple values:

```ts
function getUser(): [string, number] {
  return ["Alice", 25];
}
```

---

# 🔹 Tuples with Rest (Connection to Rest Tuples)

```ts
type Data = [string, ...number[]];
```

* First → string
* Rest → numbers

---

# 🔹 Common Gotcha ⚠️

Tuples are still arrays under the hood:

```ts
let t: [string, number] = ["Alice", 25];

t.push("extra"); // allowed at runtime 😬
```

But TypeScript may still allow this in some cases due to JS behavior.

---

# 🔹 When to Use Tuples vs Objects

👉 Prefer **tuples** when:

* Data is small and positional
* Example: `[x, y]`, `[status, message]`

👉 Prefer **objects** when:

* Data has meaning beyond position
* Example:

```ts
{ name: "Alice", age: 25 }
```

---

# ✅ Key Takeaways

* Tuples = **fixed-length, ordered, typed arrays**
* Each index has a **specific type**
* Great for:

  * returning multiple values
  * structured positional data
* Combine with rest (`...`) for flexible patterns

---

**Rest tuples** in TypeScript are a powerful feature that lets you describe functions (or arrays) with a **fixed structure plus a variable-length tail**—but with *type safety*.

---

# 🔹 What Are Rest Tuples?

A **rest tuple** uses `...` inside a tuple type to represent “the remaining elements”.

```ts
type Numbers = [number, ...number[]];
```

This means:

* First element must be a `number`
* After that, you can have **any number of additional numbers**

---

# 🔹 Basic Example

```ts
function sum(...args: [number, ...number[]]) {
  return args.reduce((a, b) => a + b, 0);
}
```

✅ Valid:

```ts
sum(1, 2, 3);
sum(10);
```

❌ Invalid:

```ts
sum();        // needs at least one number
sum("hello"); // wrong type
```

---

# 🔹 Why Not Just `number[]`?

Compare:

```ts
function sum(...args: number[]) {}
```

vs

```ts
function sum(...args: [number, ...number[]]) {}
```

👉 Difference:

* `number[]` → allows **zero arguments**
* `[number, ...number[]]` → enforces **at least one argument**

---

# 🔹 Mixing Fixed + Variable Parts

```ts
type NameAndScores = [string, ...number[]];
```

```ts
function record(...data: NameAndScores) {
  const [name, ...scores] = data;
}
```

Example call:

```ts
record("Alice", 90, 85, 88);
```

---

# 🔹 Multiple Fixed Positions

```ts
type Complex = [string, number, ...boolean[]];
```

* 1st → string
* 2nd → number
* rest → booleans

```ts
const example: Complex = ["test", 42, true, false, true];
```

---

# 🔹 Rest Tuples in Function Parameters (Very Important)

They shine when typing flexible APIs:

```ts
function logMessage(...args: [string, ...any[]]) {
  const [message, ...optionalParams] = args;
  console.log(message, ...optionalParams);
}
```

---

# 🔹 Variadic Tuple Types (Advanced)

Rest tuples enable **variadic types** (functions that preserve argument types):

```ts
function call<T extends any[]>(...args: [...T]): T {
  return args;
}
```

Usage:

```ts
const result = call(1, "hello", true);
// type of result = [number, string, boolean]
```

---

# 🔹 Combining with Other Tuples

```ts
type Prefix = [string, number];
type Full = [...Prefix, ...boolean[]];
```

```ts
const value: Full = ["id", 1, true, false];
```

---

# 🔹 Real-World Use Case (Function Wrappers)

```ts
function wrap<T extends any[], R>(
  fn: (...args: T) => R
) {
  return (...args: T): R => {
    console.log("Calling function");
    return fn(...args);
  };
}
```

* `T` is a rest tuple
* Preserves exact parameter types of `fn`

---

# ✅ Key Takeaways

* `...` inside tuples = **rest elements**
* Lets you define:

  * minimum arguments
  * mixed fixed + variable structures
* Core to:

  * variadic functions
  * function wrappers
  * advanced type inference