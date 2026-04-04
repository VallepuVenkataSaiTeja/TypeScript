**literal types in TypeScript**—they’re a key part of **type safety and restricting values to exact constants**.

---

# 🔹 1️⃣ What is a Literal Type?

* A literal type is a type that **represents a specific value** instead of a general type.
* Examples: `"hello"`, `42`, `true`.

```ts id="lt1"
let str: "hello"; // can only be "hello"
str = "hello";    // ✅ OK
// str = "world"; // ❌ Error: Type '"world"' is not assignable
```

* Works with **strings, numbers, booleans**.

---

# 🔹 2️⃣ String Literal Types

```ts id="lt2"
type Direction = "up" | "down" | "left" | "right";

let move: Direction;

move = "up";    // ✅ OK
move = "down";  // ✅ OK
// move = "forward"; ❌ Error
```

* Used for **state management, enums alternatives, API constants**.

---

# 🔹 3️⃣ Number Literal Types

```ts id="lt3"
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;
roll = 3; // ✅ OK
// roll = 7; ❌ Error
```

* Restricts values to **exact numbers**.

---

# 🔹 4️⃣ Boolean Literal Types

* Can restrict to **true** or **false** explicitly:

```ts id="lt4"
type Success = true;
type Failure = false;

let isSuccess: Success = true;
// isSuccess = false; ❌ Error
```

* Often combined with **union types** for clearer results:

```ts id="lt5"
type Result = true | false;
```

---

# 🔹 5️⃣ Combining Literal Types with Unions

* Create **restricted sets of allowed values**:

```ts id="lt6"
type Status = "success" | "error" | "loading";
let currentStatus: Status;

currentStatus = "success"; // ✅
currentStatus = "error";   // ✅
// currentStatus = "done"; // ❌ Error
```

* Used heavily in **Redux, React state, or API responses**.

---

# 🔹 6️⃣ Literal Types with `as const`

* `as const` **automatically converts values to literal types**:

```ts id="lt7"
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]; // "red" | "green" | "blue"
```

* Useful for **readonly arrays or objects with fixed values**.

---

# 🔹 7️⃣ Literal Types vs Regular Types

| Feature        | Regular Type       | Literal Type               |
| -------------- | ------------------ | -------------------------- |
| Type inference | string / number    | exact literal              |
| Example value  | `"hello"` → string | `"hello"` → `"hello"`      |
| Usage          | general variable   | restrict allowed values    |
| Combine        | type unions        | type unions for fixed sets |

---

# 🔹 8️⃣ Practical Example

```ts id="lt8"
type Role = "admin" | "user" | "guest";

function accessPage(role: Role) {
  if (role === "admin") return "Full Access";
  if (role === "user") return "Limited Access";
  return "Guest Access";
}

accessPage("admin"); // ✅
accessPage("manager"); // ❌ Error
```

✅ Literal types **prevent invalid values at compile-time**.

---

# 🔹 9️⃣ Key Takeaways

1. Literal types are **exact values** (`"hello"`, `42`, `true`).
2. Often combined with **unions** to create restricted sets.
3. `as const` is a shortcut to create literal types from arrays or objects.
4. Useful for **state management, APIs, enums alternatives, and strict type safety**.
