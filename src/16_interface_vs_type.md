👉 **Both `interface` and `type` can describe object shapes—but they’re not identical.**

Let’s break it down clearly.

---

# 🔹 1. Basic Comparison

```ts id="l7c7vy"
interface UserI {
  name: string;
  age: number;
}

type UserT = {
  name: string;
  age: number;
};
```

✅ For simple objects → **both are almost the same**

---

# 🔹 2. Key Differences

## ✅ A. Declaration Merging (ONLY interfaces)

```ts id="t48oel"
interface User {
  name: string;
}

interface User {
  age: number;
}
```

👉 Merges into:

```ts id="0x9z8r"
interface User {
  name: string;
  age: number;
}
```

❌ Type aliases cannot do this.

---

## ✅ B. Unions (ONLY types)

```ts id="btd1jg"
type Status = "success" | "error" | "loading";
```

❌ Interfaces cannot represent unions directly.

---

## ✅ C. Intersections

Both support combining types, but syntax differs:

```ts id="d78m2m"
// type
type A = { a: string };
type B = { b: number };
type C = A & B;

// interface
interface C extends A, B {}
```

---

## ✅ D. Primitives & Non-Objects

```ts id="0n6v4n"
type ID = string;  // ✅ works
```

❌ Interfaces cannot represent primitives.

---

## ✅ E. Tuples & Advanced Types

```ts id="9qzz6l"
type Point = [number, number]; // ✅
```

❌ Interfaces can’t define tuples like this.

---

## ✅ F. Computed / Mapped Types

```ts id="49u6fz"
type Keys = "a" | "b";

type Obj = {
  [K in Keys]: number;
};
```

👉 Only possible with `type`

---

## ✅ G. Class Implementation

```ts id="7rj9aq"
interface Animal {
  name: string;
}

class Dog implements Animal {
  name = "Dog";
}
```

👉 Interfaces are slightly more natural for OOP-style design

---

# 🔹 3. When to Use What (Practical Rule)

## 👉 Use `interface` when:

* Defining object shapes
* Working with classes (`implements`)
* You want **extensibility / merging**
* Building libraries or public APIs

## 👉 Use `type` when:

* You need **unions (`|`)**
* You need **tuples**
* You need **mapped/conditional types**
* You’re composing complex types

---

# 🔹 4. Real-World Guideline

A common convention in many codebases:

* **`interface` → for objects (especially models, DTOs)**
* **`type` → for everything else**

---

# 🔹 5. Important Insight

👉 You can often replace one with the other—but not always.

Example where only `type` works:

```ts id="a0i9xq"
type Result = { success: true } | { success: false; error: string };
```

---

# 🔹 6. Performance Note (Advanced)

* Interfaces can be slightly more performant in large-scale projects
* But in most apps, **difference is negligible**

---

# ✅ Final Takeaway

* Use **`interface` for structure**
* Use **`type` for flexibility**

👉 If unsure:

> Start with `interface`, switch to `type` when you hit limitations.