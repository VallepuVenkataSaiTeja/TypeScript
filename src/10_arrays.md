**arrays in TypeScript**—how to type them, use them safely, and leverage TypeScript features for **strongly typed array operations**.

---

# 🔹 1️⃣ Basic Array Types

There are **two main ways** to type arrays in TypeScript:

### a) Using `type[]`

```ts id="arr1"
const numbers: number[] = [1, 2, 3, 4];
const strings: string[] = ["a", "b", "c"];
```

### b) Using `Array<type>`

```ts id="arr2"
const booleans: Array<boolean> = [true, false, true];
```

✅ Both are equivalent—choose your style.

---

# 🔹 2️⃣ Mixed / Union Arrays

You can store multiple types using **union types**:

```ts id="arr3"
const mixed: (number | string)[] = [1, "a", 2, "b"];
```

---

# 🔹 3️⃣ Readonly Arrays

* Prevents modification (push, pop, splice, etc.)

```ts id="arr4"
const readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); ❌ Error
```

* Works with `ReadonlyArray<T>`:

```ts id="arr5"
const readonlyStrings: ReadonlyArray<string> = ["a", "b"];
```

---

# 🔹 4️⃣ Tuples (Fixed-length Arrays)

* Arrays with **fixed length and types per position**:

```ts id="arr6"
let user: [string, number];
user = ["Alice", 30]; // ✅
```

* Optional elements in tuples:

```ts id="arr7"
let point: [number, number?] = [10];
point = [10, 20]; // ✅
```

* Readonly tuples:

```ts id="arr8"
const point2: readonly [number, number] = [5, 10];
// point2[0] = 20; ❌ Error
```

---

# 🔹 5️⃣ Array Methods with Type Safety

TypeScript **infers types** for common methods:

```ts id="arr9"
const nums: number[] = [1, 2, 3];

const doubled = nums.map(n => n * 2); // number[]
const even = nums.filter(n => n % 2 === 0); // number[]
const total = nums.reduce((acc, n) => acc + n, 0); // number
```

* TypeScript ensures **operations match array type**.

---

# 🔹 6️⃣ Generic Array Functions

You can write **type-safe functions that work with any array type**:

```ts id="arr10"
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = first([1, 2, 3]);   // number
const s = first(["a", "b"]);  // string
```

---

# 🔹 7️⃣ Multi-dimensional Arrays

```ts id="arr11"
const matrix: number[][] = [
  [1, 2],
  [3, 4]
];

const cube: number[][][] = [
  [[1], [2]],
  [[3], [4]]
];
```

* TypeScript ensures **nested array types** are correct.

---

# 🔹 8️⃣ Array Destructuring

```ts id="arr12"
const arr: [string, number, boolean] = ["Alice", 30, true];
const [name, age, isActive] = arr;
```

* Works with tuples or normal arrays.

---

# 🔹 9️⃣ Summary Table

| Feature                  | Syntax / Example                | Notes                    |                    |
| ------------------------ | ------------------------------- | ------------------------ | ------------------ |
| Basic array              | `number[]` or `Array<number>`   | Common usage             |                    |
| Union array              | `(string                        | number)[]`               | Mixed types        |
| Readonly array           | `readonly number[]`             | Immutable                |                    |
| Tuple                    | `[string, number]`              | Fixed length & types     |                    |
| Optional tuple element   | `[number, number?]`             | Element may be undefined |                    |
| Generic functions        | `function first<T>(arr: T[]): T | undefined`               | Type-safe reusable |
| Multi-dimensional arrays | `number[][]`                    | Nested arrays            |                    |
| Array methods with type  | `map`, `filter`, `reduce`       | Type-safe operations     |                    |

---

# 🔹 10️⃣ Real-World Example

```ts id="arr13"
type User = { name: string; age: number };

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const names = users.map(u => u.name); // string[]
const adults = users.filter(u => u.age >= 18); // User[]
```

✅ TypeScript ensures **array contents and operations match your types**.