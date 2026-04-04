**objects in TypeScript**—how to type them, ensure type safety, and work with their properties effectively.

---

# 🔹 1️⃣ Basic Object Type

* You can type an object **inline**:

```ts id="obj1"
const person: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
```

✅ TypeScript ensures **name is string** and **age is number**.

---

# 🔹 2️⃣ Optional Properties

* Use `?` to make a property optional:

```ts id="obj2"
type Person = {
  name: string;
  age?: number;
};

const bob: Person = { name: "Bob" }; // ✅ age is optional
```

---

# 🔹 3️⃣ Readonly Properties

* Use `readonly` to make **properties immutable**:

```ts id="obj3"
type Car = {
  readonly model: string;
  year: number;
};

const car: Car = { model: "Tesla", year: 2023 };
// car.model = "BMW"; ❌ Error
car.year = 2024;        // ✅ Allowed
```

---

# 🔹 4️⃣ Index Signatures

* Allow objects with **dynamic keys** of a certain type:

```ts id="obj4"
type Scores = {
  [student: string]: number;
};

const scores: Scores = {
  Alice: 90,
  Bob: 85
};
```

✅ Useful for **maps, dictionaries, or dynamic objects**.

---

# 🔹 5️⃣ Nested Objects

* Type objects **inside other objects**:

```ts id="obj5"
type Address = { city: string; zip: string };
type User = { name: string; address: Address };

const user: User = {
  name: "Alice",
  address: { city: "NYC", zip: "10001" }
};
```

* TypeScript ensures **nested properties are correct**.

---

# 🔹 6️⃣ Combining Types with Intersections

```ts id="obj6"
type Admin = { admin: true };
type Employee = { name: string; salary: number };

type AdminEmployee = Admin & Employee;

const ae: AdminEmployee = { admin: true, name: "Bob", salary: 5000 };
```

* Object must satisfy **all combined types**.

---

# 🔹 7️⃣ Objects with Methods

* Methods can be typed inside objects:

```ts id="obj7"
type Person = {
  name: string;
  greet: () => string;
};

const person: Person = {
  name: "Alice",
  greet: () => "Hello!"
};

console.log(person.greet()); // "Hello!"
```

---

# 🔹 8️⃣ Using `Record` Utility

* Shorthand for **dynamic keys with fixed value types**:

```ts id="obj8"
const scores: Record<string, number> = {
  Alice: 90,
  Bob: 85
};
```

* Equivalent to index signature: `[key: string]: number`.

---

# 🔹 9️⃣ Partial, Required, Readonly Utilities

```ts id="obj9"
type User = { name: string; age: number };

const partialUser: Partial<User> = { name: "Alice" }; // age optional
const fullUser: Required<User> = { name: "Bob", age: 30 }; // all required
const readonlyUser: Readonly<User> = { name: "Carol", age: 25 };
// readonlyUser.age = 26; ❌ Error
```

* Very handy for **managing object updates and immutability**.

---

# 🔹 10️⃣ Key Takeaways

1. Objects are typed using `{ key: type; }`.
2. `?` makes properties optional; `readonly` makes them immutable.
3. Index signatures (`[key: string]: type`) allow dynamic keys.
4. Nested objects and methods can be typed safely.
5. Use utility types (`Record`, `Partial`, `Required`, `Readonly`) for common patterns.
6. Intersections (`&`) combine multiple object types.

---

If you want, I can make a **visual cheat sheet for TypeScript objects**, covering **basic types, optional/readonly properties, index signatures, nested objects, methods, and utilities**. This is super practical for real-world TypeScript coding.

Do you want me to create that?
