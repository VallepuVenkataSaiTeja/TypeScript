**primitives in TypeScript**—the basic building blocks of types, used to represent simple, immutable values.

---

# 🔹 1️⃣ Overview of Primitives

TypeScript has several **primitive types**, which are **not objects** and represent **single values**:

| Type        | Example                                      | Notes                                 |
| ----------- | -------------------------------------------- | ------------------------------------- |
| `string`    | `"Hello"`                                    | Text values                           |
| `number`    | `42`, `3.14`                                 | All numbers (ints, floats, hex, etc.) |
| `boolean`   | `true`, `false`                              | Logical true/false                    |
| `bigint`    | `9007199254740991n`                          | Arbitrary large integers              |
| `symbol`    | `Symbol("id")`                               | Unique identifiers                    |
| `null`      | `null`                                       | Absence of value                      |
| `undefined` | `undefined`                                  | Variable not assigned                 |
| `void`      | Return type of functions that return nothing | Not really a value type               |

---

# 🔹 2️⃣ Strings

```ts
let name: string = "Alice";
let greeting: string = `Hello, ${name}`;
```

* Can use **single quotes**, **double quotes**, or **template literals**.
* Supports **string literal types**:

```ts
let direction: "up" | "down"; // only "up" or "down"
```

---

# 🔹 3️⃣ Numbers

```ts
let age: number = 30;
let pi: number = 3.1415;
let hex: number = 0xff; // hexadecimal
let binary: number = 0b1010; // binary
```

* TypeScript does not distinguish `int` vs `float`—all are `number`.

---

# 🔹 4️⃣ Booleans

```ts
let isActive: boolean = true;
let hasPermission: boolean = false;
```

* Often used in **conditional checks** and **flags**.

---

# 🔹 5️⃣ BigInt

* For **very large integers**:

```ts
let big: bigint = 9007199254740991n;
```

* Literal ends with `n`.
* Cannot mix with `number` without conversion.

---

# 🔹 6️⃣ Symbol

* **Unique values**, often used for object keys:

```ts
const id = Symbol("id");
const obj = { [id]: 123 };
```

* Each `Symbol()` is **guaranteed unique**.

---

# 🔹 7️⃣ Null and Undefined

* Represent **absence of value**:

```ts
let n: null = null;
let u: undefined = undefined;

let maybe: string | null | undefined = undefined;
maybe = "Hello";
maybe = null;
```

* With **strict null checks**, you must explicitly include `null | undefined` in type if allowed.

---

# 🔹 8️⃣ Void

* Represents **no return value** in functions:

```ts
function log(msg: string): void {
  console.log(msg);
}
```

* Rarely used as a variable type.

---

# 🔹 9️⃣ Literal Types (Special Primitives)

* Primitives can also be **restricted to exact values**:

```ts
let answer: 42;      // only the value 42
let toggle: true;    // only true
let dir: "up" | "down"; // string literals
```

* Combined with **unions** for **safe sets of values**.

---

# 🔹 10️⃣ Key Takeaways

1. **Primitives are immutable and simple**.
2. TypeScript primitives: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`, `void`.
3. **Literal types** let you restrict primitives to **exact values**.
4. `null | undefined` must be explicit with **strict mode**.
5. `bigint` and `symbol` are **special ES2020 primitives**.
