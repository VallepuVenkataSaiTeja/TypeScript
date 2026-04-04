**type inference in TypeScript**, one of the core features that makes TypeScript smart and concise.

---

# 🔹 1️⃣ What is Type Inference?

* **Type inference** means TypeScript automatically **deduces the type of a variable, parameter, or return value** when you don’t explicitly specify it.
* Helps **reduce redundancy** while keeping type safety.

```ts id="ti1"
let x = 42; // inferred as number
let y = "hello"; // inferred as string

x = 50; // ✅ OK
// x = "world"; // ❌ Error: Type 'string' not assignable to type 'number'
```

---

# 🔹 2️⃣ Inference with Functions

* TypeScript infers **parameter types** from usage or **return type** from function body.

```ts id="ti2"
function add(a: number, b: number) {
  return a + b; // return type inferred as number
}

const result = add(2, 3); // inferred as number
```

* Explicit return type is optional but can improve readability:

```ts id="ti3"
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

---

# 🔹 3️⃣ Contextual Typing (Parameter Inference)

* TypeScript can **infer types from context**, e.g., array methods or object literals.

```ts id="ti4"
const names = ["Alice", "Bob", "Charlie"]; 
// inferred as string[]

names.forEach(name => {
  console.log(name.toUpperCase()); // name inferred as string
});
```

* No need to write `(name: string)` explicitly.

---

# 🔹 4️⃣ Best Common Type

* When multiple types are possible, TypeScript finds a **“best common type”**.

```ts id="ti5"
let arr = [0, 1, null];
// inferred as (number | null)[]
```

* Helps with **heterogeneous arrays** safely.

---

# 🔹 5️⃣ Inference with `const` and `let`

* `let` allows **mutable values**, TypeScript infers a **general type**:

```ts id="ti6"
let message = "hello"; // inferred as string
message = "world"; // ✅ OK
```

* `const` infers **literal type**:

```ts id="ti7"
const greeting = "hello"; // inferred as "hello" (string literal)
```

---

# 🔹 6️⃣ Inference in Objects

```ts id="ti8"
const person = {
  name: "Alice",
  age: 25
};
// inferred as { name: string; age: number }
```

* Works with **nested objects and arrays**.
* Using `as const` makes it **readonly literals**.

---

# 🔹 7️⃣ Generics and Inference

* TypeScript infers **generic types** from arguments.

```ts id="ti9"
function wrap<T>(value: T) {
  return { value };
}

const wrappedNumber = wrap(42); // T inferred as number
const wrappedString = wrap("hello"); // T inferred as string
```

* No need to specify `<number>` or `<string>` manually.

---

# 🔹 8️⃣ Key Takeaways

1. **Type inference reduces boilerplate** while maintaining safety.
2. Infers types for **variables, constants, function returns, parameters, and generics**.
3. Works with **arrays, objects, union types, literals, and generics**.
4. `const` + `as const` can make **narrow literal types**.
5. Understanding inference helps **write cleaner, safer, and more concise TypeScript code**.
