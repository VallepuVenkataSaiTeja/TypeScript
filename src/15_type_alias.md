In TypeScript, a **type alias** lets you give a **name to any type**—not just objects, but also unions, primitives, tuples, functions, and more.

Think of it as creating a reusable label for a type.

---

# 🔹 Basic Syntax

```ts
type User = {
  name: string;
  age: number;
};
```

Usage:

```ts
const user: User = {
  name: "Alice",
  age: 25,
};
```

---

# 🔹 Why Use Type Aliases?

* Avoid repeating complex types
* Improve readability
* Reuse types across your codebase

---

# 🔹 Aliasing Primitive Types

```ts
type ID = string;
type Age = number;
```

---

# 🔹 Union Types

One of the most common uses:

```ts
type Status = "success" | "error" | "loading";
```

```ts
let state: Status = "success";
```

---

# 🔹 Intersection Types

Combine multiple types:

```ts
type A = { a: string };
type B = { b: number };

type C = A & B;
```

---

# 🔹 Function Types

```ts
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;
```

---

# 🔹 Tuple Types

```ts
type Point = [number, number];

const p: Point = [10, 20];
```

---

# 🔹 Type Alias with Generics

```ts
type ApiResponse<T> = {
  data: T;
  success: boolean;
};
```

```ts
const res: ApiResponse<string> = {
  data: "Hello",
  success: true,
};
```

---

# 🔹 Nested / Complex Types

```ts
type User = {
  name: string;
  address: {
    city: string;
    zip: number;
  };
};
```

---

# 🔹 Type vs Interface (Important)

```ts
interface UserI {
  name: string;
}

type UserT = {
  name: string;
};
```

### Key differences:

| Feature             | Type Alias | Interface |
| ------------------- | ---------- | --------- |
| Unions              | ✅          | ❌         |
| Intersections       | ✅          | ✅         |
| Declaration merging | ❌          | ✅         |
| Primitives          | ✅          | ❌         |

---

# 🔹 Extending Type Aliases

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};
```

---

# 🔹 When to Use Type Alias

👉 Use `type` when:

* You need **unions (`|`)**
* You need **tuples**
* You’re working with **functions or generics**
* You want flexible compositions

👉 Use `interface` when:

* Defining object shapes for classes
* You need declaration merging

---

# 🔹 Common Gotcha ⚠️

Type aliases **cannot be redefined**:

```ts
type User = { name: string };
// type User = { age: number }; ❌ Error
```

(Unlike interfaces)

---

# ✅ Key Takeaways

* `type` = name for **any kind of type**
* More flexible than interfaces
* Supports:

  * unions (`|`)
  * intersections (`&`)
  * tuples
  * generics
* Cannot merge like interfaces