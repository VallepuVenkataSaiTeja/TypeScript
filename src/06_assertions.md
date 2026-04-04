**TypeScript assertions**, which are ways to **tell TypeScript “trust me, I know this type”** or to **refine types**.

---

# 🔹 1️⃣ What Are Type Assertions?

* Type assertions **don’t change runtime behavior**, they only **tell TypeScript how to treat a value**.
* Syntax:

```ts id="ta1"
// Angle bracket syntax
let someValue: any = "Hello";
let strLength: number = (<string>someValue).length;

// 'as' syntax (recommended)
let strLength2: number = (someValue as string).length;
```

> ✅ Use `as` syntax in modern TypeScript, especially in **JSX/React**.

---

# 🔹 2️⃣ When to Use Type Assertions

1. **Narrow `any` to a specific type**:

```ts id="ta2"
let value: any = "hello";
let length: number = (value as string).length;
```

2. **Tell TypeScript about a more specific type than it infers**:

```ts id="ta3"
const input = document.querySelector("input") as HTMLInputElement;
console.log(input.value); // ✅ Type-safe
```

3. **Refine union types**:

```ts id="ta4"
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Pet = Fish | Bird;

function move(pet: Pet) {
  (pet as Fish).swim?.(); // tell TS it is a Fish
}
```

---

# 🔹 3️⃣ Double Assertion (Rare)

* Sometimes you need to **assert across incompatible types**:

```ts id="ta5"
let value: unknown = "Hello";
let num: number = value as unknown as number; // first to unknown, then number
```

> ⚠️ Use carefully; bypasses type safety.

---

# 🔹 4️⃣ Non-null Assertion (`!`)

* Tells TypeScript a value is **not null or undefined**.

```ts id="ta6"
const input = document.querySelector("input")!;
console.log(input.value); // ✅ TS trusts input is not null
```

* Works on **variables, function calls, properties**.

---

# 🔹 5️⃣ Assertions vs Type Casting

* **TypeScript assertions are NOT runtime casts**:

```ts id="ta7"
let x: any = "123";
let y = x as number; // ✅ TS trusts it, but runtime value is still "123"
console.log(typeof y); // string
```

* Only **compiler-level type check** is affected.

---

# 🔹 6️⃣ Key Points

1. `as Type` tells TS to treat a value as a specific type.
2. `<Type>` is **older syntax**, not allowed in JSX.
3. Use **non-null assertion `!`** for DOM elements or possibly undefined values.
4. Can **narrow unions or refine any/unknown types**.
5. ⚠️ **Assertions don’t change runtime behavior**—misuse can cause runtime errors.

---

# 🔹 7️⃣ Practical Examples

```ts id="ta8"
// DOM Example
const button = document.querySelector("button") as HTMLButtonElement;
button.disabled = true;

// Union Example
type A = { a: number };
type B = { b: string };
let obj: A | B = { a: 10 };
console.log((obj as A).a); // ✅ access safely

// Non-null
const container = document.getElementById("app")!;
console.log(container.innerHTML);
```
