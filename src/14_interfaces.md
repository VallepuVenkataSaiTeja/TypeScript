In TypeScript, **interfaces** are used to define the **shape of objects**—what properties and methods they should have. They’re one of the main ways to enforce structure and type safety.

---

# 🔹 Basic Interface

```ts id="7a3m9k"
interface User {
  name: string;
  age: number;
}
```

Usage:

```ts id="m3g5i7"
const user: User = {
  name: "Alice",
  age: 25,
};
```

---

# 🔹 Optional Properties

Use `?` for properties that may or may not exist:

```ts id="f4y3u1"
interface User {
  name: string;
  age?: number;
}
```

---

# 🔹 Readonly Properties

Prevent modification:

```ts id="n9t2pq"
interface User {
  readonly id: number;
  name: string;
}
```

```ts id="p8w3xz"
const u: User = { id: 1, name: "Alice" };
// u.id = 2 ❌ Error
```

---

# 🔹 Function Types in Interfaces

```ts id="k2d7af"
interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;
```

---

# 🔹 Method Definitions

```ts id="r6u1jw"
interface User {
  name: string;
  greet(): void;
}
```

---

# 🔹 Extending Interfaces

Interfaces can inherit from other interfaces:

```ts id="v1e9kx"
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

---

# 🔹 Multiple Inheritance

```ts id="t8s4cz"
interface A {
  a: string;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: boolean;
}
```

---

# 🔹 Interfaces vs Type Aliases

```ts id="l0d2pq"
type UserType = {
  name: string;
  age: number;
};
```

👉 Key differences:

| Feature            | Interface | Type |
| ------------------ | --------- | ---- |
| Extend             | ✅         | ✅    |
| Merge declarations | ✅         | ❌    |
| Use for primitives | ❌         | ✅    |

---

# 🔹 Declaration Merging (Unique Feature)

Interfaces with the same name **merge automatically**:

```ts id="b7h2lm"
interface User {
  name: string;
}

interface User {
  age: number;
}
```

👉 Becomes:

```ts id="y5n8qa"
interface User {
  name: string;
  age: number;
}
```

---

# 🔹 Index Signatures

For dynamic keys:

```ts id="j9r3wd"
interface Dictionary {
  [key: string]: string;
}
```

---

# 🔹 Interfaces with Classes

```ts id="c4z8ty"
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name = "Dog";

  makeSound() {
    console.log("Bark");
  }
}
```

---

# 🔹 Extending Built-in Types

```ts id="x2v9bn"
interface CustomArray extends Array<number> {}
```

---

# 🔹 When to Use Interfaces

👉 Prefer interfaces when:

* Defining object shapes
* Working with classes
* You want extensibility (like libraries)

👉 Prefer `type` when:

* Using unions (`A | B`)
* Creating complex types

---

# ✅ Key Takeaways

* Interfaces define **structure, not implementation**
* Support:

  * optional (`?`)
  * readonly
  * methods
  * extension
* Can **merge automatically**
* Commonly used for:

  * APIs
  * class contracts
  * large-scale applications