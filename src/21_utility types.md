**TypeScript utility types**—these are built-in **generic types** that help you manipulate or transform types without writing a lot of repetitive code. They’re super powerful for real-world TypeScript projects.

---

# 🔹 1️⃣ `Partial<Type>`

Makes all properties optional.

```ts id="p1kz7b"
interface User {
  name: string;
  age: number;
}

const partialUser: Partial<User> = {
  name: "Alice",
  // age is optional
};
```

---

# 🔹 2️⃣ `Required<Type>`

Makes all properties required.

```ts id="p2kz7c"
interface User {
  name: string;
  age?: number;
}

const fullUser: Required<User> = {
  name: "Alice",
  age: 25, // must provide now
};
```

---

# 🔹 3️⃣ `Readonly<Type>`

Makes all properties **readonly**.

```ts id="p3kz7d"
interface User {
  name: string;
  age: number;
}

const readOnlyUser: Readonly<User> = {
  name: "Alice",
  age: 25,
};

// readOnlyUser.age = 30 ❌ Error
```

---

# 🔹 4️⃣ `Pick<Type, Keys>`

Selects a subset of properties.

```ts id="p4kz7e"
interface User {
  name: string;
  age: number;
  email: string;
}

type UserPreview = Pick<User, "name" | "email">;

const preview: UserPreview = {
  name: "Alice",
  email: "alice@example.com",
};
```

---

# 🔹 5️⃣ `Omit<Type, Keys>`

Removes specific properties.

```ts id="p5kz7f"
type UserWithoutEmail = Omit<User, "email">;

const user: UserWithoutEmail = {
  name: "Alice",
  age: 25,
};
```

---

# 🔹 6️⃣ `Record<Keys, Type>`

Creates an object type with **specific keys and uniform value type**.

```ts id="p6kz7g"
type Roles = "admin" | "editor" | "viewer";

const roleAccess: Record<Roles, number> = {
  admin: 3,
  editor: 2,
  viewer: 1,
};
```

---

# 🔹 7️⃣ `Exclude<Type, ExcludedUnion>`

Removes specific types from a union.

```ts id="p7kz7h"
type Status = "success" | "error" | "loading";

type NonLoading = Exclude<Status, "loading">; // "success" | "error"
```

---

# 🔹 8️⃣ `Extract<Type, Union>`

Keeps only types that exist in both.

```ts id="p8kz7i"
type T1 = "a" | "b" | "c";
type T2 = "a" | "c" | "d";

type Common = Extract<T1, T2>; // "a" | "c"
```

---

# 🔹 9️⃣ `NonNullable<Type>`

Removes `null` and `undefined` from a type.

```ts id="p9kz7j"
type MaybeString = string | null | undefined;

type StringOnly = NonNullable<MaybeString>; // string
```

---

# 🔹 🔟 `ReturnType<Type>` / `Parameters<Type>`

* `ReturnType` extracts the return type of a function
* `Parameters` extracts the parameter types as a tuple

```ts id="p10kz7k"
function greet(name: string, age: number) {
  return `${name} is ${age}`;
}

type GreetReturn = ReturnType<typeof greet>;    // string
type GreetParams = Parameters<typeof greet>;   // [string, number]
```

---

# 🔹 11️⃣ `InstanceType<Type>`

Gets the instance type of a class.

```ts id="p11kz7l"
class Person {
  constructor(public name: string) {}
}

type PersonInstance = InstanceType<typeof Person>;

const p: PersonInstance = new Person("Alice");
```

---

# 🔹 12️⃣ Combining Utility Types

```ts id="p12kz7m"
interface User {
  id: number;
  name?: string;
  email?: string;
}

type ReadonlyPartialUser = Readonly<Partial<User>>;

const user: ReadonlyPartialUser = { id: 1 };
// Cannot modify user.id ❌
```

---

# 🔹 Key Takeaways

* **Utility types** are pre-defined **generics** that manipulate types.
* They save you from writing **boilerplate types**.
* Most common ones: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `NonNullable`, `Readonly`, `Extract`, `Exclude`.
* Combine them for **complex type transformations**.