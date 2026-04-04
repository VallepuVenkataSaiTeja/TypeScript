**TypeScript/JavaScript operators and syntax for safety and optional handling**. Let’s break these down one by one with examples.

---

# 1️⃣ `in` Operator

The `in` operator checks whether a **property exists in an object**.

```ts
interface User {
  name: string;
  age?: number;
}

const user: User = { name: "Alice" };

console.log("name" in user); // true
console.log("age" in user);  // false
console.log("email" in user); // false
```

* ✅ Useful for **type narrowing** in TypeScript:

```ts
function printAge(user: User) {
  if ("age" in user) {
    console.log(user.age); // TypeScript knows age exists here
  }
}
```

---

# 2️⃣ Optional Chaining `?.`

Optional chaining lets you **safely access nested properties** without throwing an error if something is `null` or `undefined`.

```ts
const user = { name: "Alice", address: { city: "NY" } };

console.log(user.address?.city); // "NY"
console.log(user.contact?.phone); // undefined, doesn't throw
```

* Works for:

  * properties: `obj?.prop`
  * arrays: `arr?.[index]`
  * functions: `fn?.()`

---

# 3️⃣ Nullish Coalescing `??`

The nullish coalescing operator provides a **default value only if the value is `null` or `undefined`** (not falsy like `0` or `""`).

```ts
const foo = null ?? "default";  // "default"
const bar = undefined ?? 42;    // 42
const baz = 0 ?? 99;            // 0 (not nullish, so keeps 0)
const qux = "" ?? "empty";      // "" (not nullish)
```

* Often combined with optional chaining:

```ts
const city = user.address?.city ?? "Unknown";
```

---

# 4️⃣ Optional Parameters / Properties `?`

In TypeScript, `?` marks a property or parameter as **optional**:

```ts
interface User {
  name: string;
  age?: number;
}

function greet(user: User) {
  console.log(user.name);
  if (user.age !== undefined) {
    console.log(user.age);
  }
}
```

* Optional parameters in functions:

```ts
function log(message: string, level?: string) {
  console.log(level ?? "INFO", message);
}
```

---

# 5️⃣ Combining Operators (Safe Access Patterns)

```ts
interface User {
  name: string;
  address?: {
    city?: string;
  };
}

const user: User = { name: "Alice" };

const city = user.address?.city ?? "Unknown City"; // safe default
```

* ✅ Safe access + default in **one line**

---

# 6️⃣ Quick Comparison

| Feature                          | Syntax          | Checks                              | Notes                      |
| -------------------------------- | --------------- | ----------------------------------- | -------------------------- |
| Property exists                  | `"prop" in obj` | `true/false`                        | Type narrowing             |
| Optional property access         | `obj?.prop`     | `undefined` if missing              | Safe nested access         |
| Default value for null/undefined | `??`            | replaces only `null` or `undefined` | Not for `0`, `false`, `""` |
| Optional function param          | `param?: type`  | undefined if missing                | Can combine with `??`      |

---

# ✅ Example: Combined Usage

```ts
interface Config {
  retryCount?: number;
  timeout?: number;
}

function start(config?: Config) {
  const retries = config?.retryCount ?? 3;
  const timeout = config?.timeout ?? 5000;

  console.log(`Retries: ${retries}, Timeout: ${timeout}`);
}

start(); // Retries: 3, Timeout: 5000
```
