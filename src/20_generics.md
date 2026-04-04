**Generics in TypeScript** are like **placeholders for types** that let you write **reusable, type-safe code**. They allow a function, class, or interface to work with **any type** while still keeping type safety.

---

# 🔹 1️⃣ Basic Generic Function

```ts id="g1kz9b"
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);       // num is number
const str = identity<string>("Hello");  // str is string
```

* `<T>` = type parameter (can be any valid name)
* Type is inferred if you don’t specify:

```ts id="h2kz4p"
const inferred = identity(true); // TypeScript infers T = boolean
```

---

# 🔹 2️⃣ Generic Arrays

```ts id="q3m4lo"
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);    // number
const firstStr = getFirst(["a", "b"]);   // string
```

---

# 🔹 3️⃣ Multiple Type Parameters

```ts id="k4j2pv"
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 });
// merged: { name: string; age: number }
```

---

# 🔹 4️⃣ Generic Interfaces

```ts id="v5d8nk"
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<string> = {
  data: "Hello",
  success: true,
};
```

* `T` can be **any type**: string, number, object, array, etc.

---

# 🔹 5️⃣ Generic Classes

```ts id="r7f1yz"
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
const first = queue.dequeue(); // number
```

---

# 🔹 6️⃣ Generic Constraints

You can **restrict the allowed types** with `extends`:

```ts id="t8g3wx"
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("Hello");      // ✅ 5
getLength([1, 2, 3]);    // ✅ 3
// getLength(42);         // ❌ Error: number has no length
```

---

# 🔹 7️⃣ Default Generic Types

You can provide a **default type**:

```ts id="u9h4az"
function wrap<T = string>(value: T) {
  return { value };
}

const wrapped = wrap(42);   // T inferred as number
const wrapped2 = wrap();    // T defaults to string
```

---

# 🔹 8️⃣ Key Real-World Uses

* Reusable **utility functions** (`map`, `filter`, `identity`)
* Type-safe **API responses** (`ApiResponse<T>`)
* Generic **data structures** (`Queue<T>`, `Stack<T>`)
* Conditional types and mapped types in advanced TS

---

# 🔹 9️⃣ Quick Summary Table

| Concept           | Syntax / Example                    |
| ----------------- | ----------------------------------- |
| Function Generics | `function identity<T>(value: T): T` |
| Multiple Types    | `<T, U>`                            |
| Constraints       | `<T extends { length: number }>`    |
| Default Type      | `<T = string>`                      |
| Generic Interface | `interface ApiResponse<T>`          |
| Generic Class     | `class Queue<T>`                    |

---

# ✅ Key Takeaways

* Generics make your code **flexible but type-safe**
* Always name type parameters meaningfully if possible (`T`, `U`, `K`, `V`)
* Can be used in **functions, classes, interfaces, and type aliases**
* Combine with **constraints, defaults, and multiple parameters** for advanced patterns