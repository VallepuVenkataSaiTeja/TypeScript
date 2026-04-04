In TypeScript, **tuples** are a special kind of array where **the number of elements and their types are fixed and known in advance**.

Think of them as **typed, ordered lists**.

---

# 🔹 Basic Tuple

```ts
let person: [string, number] = ["Alice", 25];
```

* 1st element → `string`
* 2nd element → `number`

✅ Valid:

```ts
let person: [string, number] = ["Bob", 30];
```

❌ Invalid:

```ts
let person: [string, number] = [30, "Bob"]; // wrong order
```

---

# 🔹 Why Use Tuples?

Use tuples when:

* Order matters
* Each position has a specific meaning

Example:

```ts
let user: [string, number, boolean] = ["Alice", 25, true];
// name, age, isActive
```

---

# 🔹 Accessing Tuple Elements

```ts
let user: [string, number] = ["Alice", 25];

console.log(user[0]); // string
console.log(user[1]); // number
```

TypeScript **knows the exact type** at each index 👍

---

# 🔹 Destructuring Tuples

```ts
let user: [string, number] = ["Alice", 25];

const [name, age] = user;
```

---

# 🔹 Optional Elements

```ts
let user: [string, number?];

user = ["Alice"];
user = ["Alice", 25];
```

---

# 🔹 Readonly Tuples

Prevent modification:

```ts
const point: readonly [number, number] = [10, 20];

// point[0] = 5 ❌ Error
```

---

# 🔹 Named Tuples (Improves Readability)

```ts
type User = [name: string, age: number];

const u: User = ["Alice", 25];
```

---

# 🔹 Tuples vs Arrays

```ts
let arr: string[] = ["a", "b", "c"];        // flexible
let tuple: [string, number] = ["a", 1];     // fixed
```

| Feature       | Array    | Tuple             |
| ------------- | -------- | ----------------- |
| Length        | Variable | Fixed             |
| Types         | Same     | Different allowed |
| Order matters | No       | Yes               |

---

# 🔹 Tuples in Functions

Return multiple values:

```ts
function getUser(): [string, number] {
  return ["Alice", 25];
}
```

---

# 🔹 Tuples with Rest (Connection to Rest Tuples)

```ts
type Data = [string, ...number[]];
```

* First → string
* Rest → numbers

---

# 🔹 Common Gotcha ⚠️

Tuples are still arrays under the hood:

```ts
let t: [string, number] = ["Alice", 25];

t.push("extra"); // allowed at runtime 😬
```

But TypeScript may still allow this in some cases due to JS behavior.

---

# 🔹 When to Use Tuples vs Objects

👉 Prefer **tuples** when:

* Data is small and positional
* Example: `[x, y]`, `[status, message]`

👉 Prefer **objects** when:

* Data has meaning beyond position
* Example:

```ts
{ name: "Alice", age: 25 }
```

---

# ✅ Key Takeaways

* Tuples = **fixed-length, ordered, typed arrays**
* Each index has a **specific type**
* Great for:

  * returning multiple values
  * structured positional data
* Combine with rest (`...`) for flexible patterns