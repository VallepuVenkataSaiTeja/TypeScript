**TypeScript’s `Awaited` utility type** and handling **Promises**. This is crucial for working with async code safely.

---

# 🔹 1️⃣ `Promise` Basics

A **Promise** represents a value that may be available **now, later, or never**.

```ts id="p1"
const p: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 1000);
});

p.then((value) => console.log(value)); // 42
```

* Use `async` functions to **return Promises automatically**:

```ts id="p2"
async function fetchData(): Promise<string> {
  return "Hello";
}

const result = await fetchData(); // "Hello"
```

---

# 🔹 2️⃣ `Awaited<Type>` Utility Type

`Awaited` **extracts the resolved type of a Promise**.

```ts id="p3"
type T1 = Promise<string>;
type ResolvedT1 = Awaited<T1>; // string

type T2 = Promise<Promise<number>>;
type ResolvedT2 = Awaited<T2>; // number (auto-flattens nested Promises)
```

* ✅ Very useful for **type inference with async functions**.

---

# 🔹 3️⃣ Example: Using `Awaited` with Async Functions

```ts id="p4"
async function getUser() {
  return { name: "Alice", age: 25 };
}

type User = Awaited<ReturnType<typeof getUser>>;
// { name: string; age: number }

async function printUser() {
  const user: User = await getUser();
  console.log(user.name); // Alice
}
```

---

# 🔹 4️⃣ Handling Multiple Promises

### a) `Promise.all`

```ts id="p5"
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

const results = await Promise.all([p1, p2]); // [1, 2]
```

* TypeScript infers: `results: number[]`

### b) `Promise.allSettled`

Returns **status + value** for each promise:

```ts id="p6"
const results = await Promise.allSettled([p1, p2]);
/*
results:
[
  { status: "fulfilled", value: 1 },
  { status: "fulfilled", value: 2 }
]
*/
```

---

# 🔹 5️⃣ Example: Combining `Awaited` and `Promise.all`

```ts id="p7"
async function fetchA(): Promise<number> { return 1; }
async function fetchB(): Promise<string> { return "B"; }

type Combined = [Awaited<ReturnType<typeof fetchA>>, Awaited<ReturnType<typeof fetchB>>]; 
// [number, string]

const [a, b]: Combined = await Promise.all([fetchA(), fetchB()]);
```

✅ Guarantees the **exact types** of resolved promises.

---

# 🔹 6️⃣ `Awaited` vs `ReturnType<T>`

* `ReturnType<T>` gives **the Promise type** from an async function
* `Awaited<ReturnType<T>>` gives the **resolved value type**

```ts id="p8"
async function fetchNumber() { return 42; }

type R1 = ReturnType<typeof fetchNumber>; // Promise<number>
type R2 = Awaited<R1>;                   // number
```

---

# 🔹 7️⃣ Real-World Pattern

```ts id="p9"
async function getApiData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json() as Promise<T>;
}

type UserData = Awaited<ReturnType<typeof getApiData<{ name: string }>>>;
// UserData = { name: string }
```

* ✅ Useful for **type-safe API responses** without manually specifying the resolved type.

---

# 🔹 8️⃣ Key Takeaways

1. **Promises** are the core of async JavaScript.
2. **`async/await`** simplifies handling them.
3. **`Awaited<Type>`** extracts the type inside a promise (even nested ones).
4. Combine with **`ReturnType`** for type-safe async function handling.
5. **`Promise.all`, `allSettled`** help handle multiple promises with proper typing.
