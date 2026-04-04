**TypeScript “union helpers”**—these are utility patterns and types that help you **work with union types safely and flexibly**. Let’s break them down clearly with examples.

---

# 🔹 1️⃣ `Exclude<UnionType, ExcludedMembers>`

Removes specific types from a union.

```ts id="uh1"
type Status = "success" | "error" | "loading";

type NonLoading = Exclude<Status, "loading">; // "success" | "error"
```

✅ Useful when you want to **narrow a union**.

---

# 🔹 2️⃣ `Extract<UnionType, MembersToKeep>`

Keeps only types that exist in both unions.

```ts id="uh2"
type T1 = "a" | "b" | "c";
type T2 = "a" | "c" | "d";

type Common = Extract<T1, T2>; // "a" | "c"
```

✅ Helps **filter union members**.

---

# 🔹 3️⃣ `NonNullable<Type>`

Removes `null` and `undefined` from a type.

```ts id="uh3"
type MaybeString = string | null | undefined;

type StringOnly = NonNullable<MaybeString>; // string
```

✅ Great for **safe handling of optional values**.

---

# 🔹 4️⃣ `ReturnType` + Union Narrowing

```ts id="uh4"
function fetchResult(): { success: true } | { success: false; error: string } {
  return Math.random() > 0.5
    ? { success: true }
    : { success: false, error: "Failed" };
}

type Result = ReturnType<typeof fetchResult>; 
// { success: true } | { success: false; error: string }
```

* You can then narrow the union safely:

```ts id="uh5"
const res = fetchResult();
if (res.success) {
  console.log("Success!");
} else {
  console.log(res.error); // TypeScript knows error exists
}
```

---

# 🔹 5️⃣ `Distributive Conditional Types`

Distribute unions over types to create helper utilities:

```ts id="uh6"
type ToArray<T> = T extends any ? T[] : never;

type StrOrNumArray = ToArray<string | number>; // string[] | number[]
```

✅ Useful for transforming union types systematically.

---

# 🔹 6️⃣ Tagged / Discriminated Unions

```ts id="uh7"
type Shape = 
  | { kind: "circle"; radius: number } 
  | { kind: "square"; size: number };

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.size ** 2;
  }
}
```

* Use **`kind` or `type` fields** to safely discriminate union members.
* TypeScript will **narrow types automatically** in branches.

---

# 🔹 7️⃣ `Extract` + `Exclude` for Discriminated Unions

```ts id="uh8"
type Circle = Extract<Shape, { kind: "circle" }>; // { kind: "circle"; radius: number }
type NonCircle = Exclude<Shape, { kind: "circle" }>; // { kind: "square"; size: number }
```

✅ Handy for **picking or removing union members programmatically**.

---

# 🔹 8️⃣ Common Patterns / Helpers

| Helper             | Purpose                          | Example                              |         |                      |      |
| ------------------ | -------------------------------- | ------------------------------------ | ------- | -------------------- | ---- |
| `Exclude<T, U>`    | Remove types from a union        | `Exclude<"a"                         | "b"     | "c","b"> => "a"      | "c"` |
| `Extract<T, U>`    | Keep only types in both unions   | `Extract<"a"                         | "b","b" | "c"> => "b"`         |      |
| `NonNullable<T>`   | Remove null & undefined          | `string                              | null    | undefined => string` |      |
| Tagged union       | Narrow union with a discriminant | `{ kind: "circle"; radius: number }` |         |                      |      |
| Distributive types | Transform each member of a union | `T extends X ? Y : Z`                |         |                      |      |

---

# 🔹 9️⃣ Real-World Example

```ts id="uh9"
type ApiResponse = 
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResponse(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data); // narrowed to success type
  } else {
    console.error(res.message); // narrowed to error type
  }
}
```

✅ This is the standard pattern for **safe union handling in TypeScript APIs**.

---

# ✅ Key Takeaways

1. `Exclude`, `Extract`, and `NonNullable` are your **main union helpers**.
2. Use **discriminated unions** (`kind` / `type`) for safe branching.
3. **Conditional types** allow powerful union transformations.
4. Combine these for **robust type-safe code**.