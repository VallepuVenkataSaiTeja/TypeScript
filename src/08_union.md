**union types** in TypeScript—they are **one of the core tools for handling multiple possible types safely**.

---

# 🔹 1️⃣ What is a Union Type?

* Denoted with `|`
* Allows a variable to **hold values of multiple types**.

```ts id="ut1"
let value: string | number;

value = "Hello"; // ✅
value = 42;      // ✅
// value = true; // ❌ Error: boolean not allowed
```

---

# 🔹 2️⃣ Union of Literal Types

You can restrict a variable to **specific values**:

```ts id="ut2"
type Status = "success" | "error" | "loading";

let s: Status;

s = "success"; // ✅
s = "error";   // ✅
// s = "done"; // ❌ Error
```

✅ Very useful for **state management and API responses**.

---

# 🔹 3️⃣ Union of Objects

```ts id="ut3"
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; size: number };

type Shape = Circle | Square;

const shape1: Shape = { kind: "circle", radius: 10 };
const shape2: Shape = { kind: "square", size: 5 };
```

---

# 🔹 4️⃣ Narrowing Union Types

TypeScript **needs type narrowing** to safely access properties:

```ts id="ut4"
function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.size ** 2;
  }
}
```

* Use **type guards**:

  * `typeof` (primitives)
  * `instanceof` (classes)
  * `in` (object keys)
  * Custom type predicates

---

# 🔹 5️⃣ Union of Primitives

```ts id="ut5"
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

format("hello"); // "HELLO"
format(12.345);  // "12.35"
```

✅ TypeScript ensures **you handle all possible types safely**.

---

# 🔹 6️⃣ Nullable / Optional Types

```ts id="ut6"
let maybeString: string | null | undefined;

maybeString = "Hello"; // ✅
maybeString = null;    // ✅
maybeString = undefined; // ✅
```

* Often used in **strict null checks**.

---

# 🔹 7️⃣ Combining Union with Arrays

```ts id="ut7"
const items: (string | number)[] = [1, "two", 3, "four"];
```

* Array can contain **any of the union types**.

---

# 🔹 8️⃣ Using `Extract` and `Exclude` Helpers

TypeScript has **union utilities**:

```ts id="ut8"
type T = "a" | "b" | "c";

// Exclude "b"
type WithoutB = Exclude<T, "b">; // "a" | "c"

// Keep only "b" | "c"
type OnlyBC = Extract<T, "b" | "c">; // "b" | "c"
```

✅ Great for **refining union types**.

---

# 🔹 9️⃣ Key Takeaways

1. `|` allows **multiple possible types**.
2. Narrow types using `typeof`, `instanceof`, `in`, or custom type guards.
3. Useful for **primitives, objects, nullable values, and arrays**.
4. Combine with **utility types** (`Extract`, `Exclude`, `NonNullable`) for advanced typing.
5. **Union ≠ Intersection** (`&` requires all types, `|` requires any type).
