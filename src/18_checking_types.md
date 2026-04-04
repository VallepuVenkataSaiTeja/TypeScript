**checking types at runtime** in TypeScript/JavaScript, especially for **Date objects**. This is a subtle but important topic. Let’s break it down clearly.

---

# 🔹 1. `typeof` Operator

`typeof` checks the **primitive type** of a value:

```ts id="b5c9hp"
console.log(typeof 123);            // "number"
console.log(typeof "hello");        // "string"
console.log(typeof true);           // "boolean"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"
console.log(typeof new Date());     // "object"
console.log(typeof null);           // "object" (quirk)
console.log(typeof undefined);      // "undefined"
console.log(typeof (() => {}));     // "function"
```

> **Important:** `typeof` cannot tell you if an object is a `Date`.
> `typeof new Date()` just returns `"object"`.

---

# 🔹 2. `instanceof` Operator

`instanceof` checks **whether an object is an instance of a specific constructor**.

```ts id="b7h2tr"
const now = new Date();

console.log(now instanceof Date);  // true
console.log([] instanceof Array);  // true
console.log({} instanceof Object); // true
console.log(now instanceof Object); // true (Date inherits Object)
```

* ✅ Best way to check if something is a `Date` object.

---

# 🔹 3. Combining Type Checks with `typeof` and `instanceof`

Example: function that handles different inputs:

```ts id="z1r6uw"
function printValue(val: any) {
  if (val instanceof Date) {
    console.log("Date:", val.toISOString());
  } else if (typeof val === "string") {
    console.log("String:", val);
  } else if (typeof val === "number") {
    console.log("Number:", val);
  } else {
    console.log("Other:", val);
  }
}
```

---

# 🔹 4. Checking for Invalid Dates

Even if a value is a Date, it could be invalid:

```ts id="y9t8mv"
const d = new Date("invalid date");

console.log(d instanceof Date);   // true
console.log(isNaN(d.getTime()));  // true → invalid date
```

* ✅ `isNaN(date.getTime())` is the standard way to check validity.

---

# 🔹 5. TypeScript Type Narrowing

TypeScript can narrow types with `instanceof`:

```ts id="x3f2qc"
function formatDate(val: string | Date) {
  if (val instanceof Date) {
    return val.toISOString();
  } else {
    return new Date(val).toISOString();
  }
}
```

* `instanceof` tells TS the variable is **definitely a Date** in that branch.

---

# 🔹 6. Summary Table

| Operator                | Works For                                                                   | Notes                                    |
| ----------------------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| `typeof`                | Primitives (`string`, `number`, `boolean`, `undefined`, `symbol`, `bigint`) | Always returns a string                  |
| `instanceof`            | Objects / Classes (`Date`, `Array`, custom classes)                         | Checks prototype chain                   |
| `Array.isArray()`       | Arrays specifically                                                         | Often safer than `instanceof` for arrays |
| `isNaN(date.getTime())` | Date validity                                                               | Checks if date is invalid                |

---

# 🔹 7. Example: Safe Date Function

```ts id="p4g2xy"
function formatDateSafe(date: any): string | null {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return date.toISOString();
  }
  return null; // invalid
}
```

---

# ✅ Key Takeaways

1. **`typeof`** → for primitives only.
2. **`instanceof`** → for objects and classes (like `Date`).
3. **Always check `isNaN(date.getTime())`** for invalid dates.
4. Use `instanceof` for **type narrowing in TypeScript**.