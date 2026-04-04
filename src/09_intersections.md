**intersection types** in TypeScript—they’re extremely powerful for **combining multiple types into one**.

---

# 🔹 1️⃣ What is an Intersection Type?

* Denoted with `&`
* Combines **two or more types** into **a single type** that must satisfy **all of them**.

```ts id="it1"
type A = { name: string };
type B = { age: number };

type Person = A & B;

const p: Person = {
  name: "Alice",
  age: 25
}; // ✅ Must have both name and age
```

---

# 🔹 2️⃣ Intersection vs Union

| Feature        | Intersection `&`                     | Union `|`                     |
|----------------|------------------------------------|--------------------------------|
| Meaning        | Must satisfy **all types**          | Can satisfy **any type**      |
| Example        | `{a: number} & {b: string}` → `{a, b}` | `{a: number} | {b: string}` → `{a}` or `{b}` |
| Use Case       | Combining multiple objects          | Multiple possible types       |

---

# 🔹 3️⃣ Combining Object Types

```ts id="it2"
type Admin = { admin: true };
type User = { name: string };

type AdminUser = Admin & User;

const au: AdminUser = {
  admin: true,
  name: "Alice"
};
```

✅ Now `au` must have **both `admin` and `name` properties**.

---

# 🔹 4️⃣ Combining Functions

* Intersection of function types requires a function to satisfy **all signatures**.

```ts id="it3"
type Fn1 = (x: number) => string;
type Fn2 = (y: string) => number;

type CombinedFn = Fn1 & Fn2;

const fn: CombinedFn = (arg: any) => {
  if (typeof arg === "number") return arg.toString();
  if (typeof arg === "string") return arg.length;
  throw new Error("Invalid type");
};

fn(42);     // "42"
fn("Hello"); // 5
```

> This is advanced but sometimes used in **overloaded functions**.

---

# 🔹 5️⃣ Intersection with Classes

```ts id="it4"
class Person {
  constructor(public name: string) {}
}

class Employee {
  constructor(public salary: number) {}
}

type Staff = Person & Employee;

const staff: Staff = {
  name: "Bob",
  salary: 5000
};
```

✅ Works well for **combining multiple class types structurally**.

---

# 🔹 6️⃣ Intersection with Generics

```ts id="it5"
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const obj = merge({ name: "Alice" }, { age: 25 });
// obj: { name: string; age: number }
```

* Very common **utility pattern** in TypeScript.

---

# 🔹 7️⃣ Intersection with Interfaces

```ts id="it6"
interface A { a: number }
interface B { b: string }

type C = A & B;

const c: C = { a: 1, b: "hello" };
```

* Works identically to type aliases.
* Can be useful for **extending multiple interfaces**.

---

# 🔹 8️⃣ Key Takeaways

1. `&` **combines multiple types**; resulting type must satisfy **all constraints**.
2. Works with **objects, functions, classes, generics, and interfaces**.
3. Different from union `|` which allows **any one of the types**.
4. Very useful in **mixins, merging objects, and type-safe utility functions**.
