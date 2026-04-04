**`as const` in TypeScript**—it’s a **powerful way to create immutable, literal-typed values**.

---

# 🔹 1️⃣ What is `as const`?

* `as const` **tells TypeScript to infer the **narrowest possible type** for a value.
* Normally, TypeScript widens types (e.g., `"hello"` → `string`), but `as const` keeps **exact literals**.

```ts id="ac1"
let a = "hello";        // type: string
let b = "hello" as const; // type: "hello" (literal type)
```

✅ Useful for **immutable constants and literal unions**.

---

# 🔹 2️⃣ With Arrays

* Normally, arrays are **mutable** and elements are widened:

```ts id="ac2"
let arr = [1, 2, 3]; // number[]
```

* Using `as const`:

```ts id="ac3"
let arr2 = [1, 2, 3] as const; 
// readonly [1, 2, 3] → immutable, each element is a literal type
```

* Features:

  1. Array becomes **readonly**
  2. Element types are **literal types** (not widened)

```ts id="ac4"
arr2[0] = 10; // ❌ Error: readonly
```

---

# 🔹 3️⃣ With Objects

* Normally, object properties are **mutable and widened**:

```ts id="ac5"
let obj = { name: "Alice", age: 25 };
// type: { name: string; age: number; }
```

* Using `as const`:

```ts id="ac6"
let obj2 = { name: "Alice", age: 25 } as const;
// type: { readonly name: "Alice"; readonly age: 25; }
```

* Properties are now **readonly**, and their values are **literal types**.

---

# 🔹 4️⃣ Practical Example: Union from Array

```ts id="ac7"
const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number]; 
// "red" | "green" | "blue"
```

✅ You can now safely restrict values to this literal union.

---

# 🔹 5️⃣ Enums Alternative

* `as const` can sometimes replace enums:

```ts id="ac8"
const Roles = {
  ADMIN: "admin",
  USER: "user"
} as const;

type Role = typeof Roles[keyof typeof Roles]; 
// "admin" | "user"
```

* Benefit: **literal types + type safety without runtime enum overhead**.

---

# 🔹 6️⃣ Key Points

1. `as const` **prevents widening**:

   * `"hello"` stays `"hello"`
   * `1` stays `1`
2. Makes **arrays and objects readonly**.
3. Useful for creating **literal unions** from arrays or objects.
4. Works with **`typeof`** to extract literal types.

---

# 🔹 7️⃣ Summary Table

| Feature                 | Without `as const`                       | With `as const`                                             |
| ----------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| String literal          | `"hello"` → string                       | `"hello"` → `"hello"` (literal)                             |
| Number literal          | `1` → number                             | `1` → 1 (literal)                                           |
| Array                   | `[1,2,3]` → number[]                     | `[1,2,3] as const` → readonly [1,2,3]                       |
| Object                  | `{ name: "Alice" }` → `{ name: string }` | `{ name: "Alice" } as const` → `{ readonly name: "Alice" }` |
| Union from array/object | ❌ Not automatic                          | ✅ Literal union via `typeof`                                |

---

# 🔹 8️⃣ Real-World Example

```ts
const directions = ["up", "down", "left", "right"] as const;

function move(dir: typeof directions[number]) {
  console.log(`Moving ${dir}`);
}

move("up");    // ✅ Works
// move("forward"); ❌ Error: not part of union
```

✅ This is a common pattern for **API-safe strings, configuration options, and constants**.