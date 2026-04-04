**TypeScript’s built-in utility types specifically for functions**—these are types that let you **extract, manipulate, or transform function signatures**. Let’s go step by step with examples.

---

# 🔹 1️⃣ `ReturnType<T>`

Extracts the **return type** of a function.

```ts id="ft1"
function greet(name: string) {
  return `Hello ${name}`;
}

type GreetReturn = ReturnType<typeof greet>; // string
```

---

# 🔹 2️⃣ `Parameters<T>`

Extracts the **parameter types** of a function as a tuple.

```ts id="ft2"
function add(a: number, b: number) {
  return a + b;
}

type AddParams = Parameters<typeof add>; // [number, number]

const args: AddParams = [5, 10];
```

---

# 🔹 3️⃣ `ConstructorParameters<T>`

Extracts the **parameters of a class constructor** as a tuple.

```ts id="ft3"
class Person {
  constructor(public name: string, public age: number) {}
}

type PersonCtorParams = ConstructorParameters<typeof Person>; // [string, number]

const p = new Person(...([ "Alice", 25 ] as PersonCtorParams));
```

---

# 🔹 4️⃣ `InstanceType<T>`

Extracts the **instance type of a class**.

```ts id="ft4"
class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}

type CarInstance = InstanceType<typeof Car>; // Car
const myCar: CarInstance = new Car("Tesla");
```

---

# 🔹 5️⃣ `ThisParameterType<T>`

Extracts the type of `this` in a function.

```ts id="ft5"
function sayHello(this: { name: string }, greeting: string) {
  return `${greeting}, ${this.name}`;
}

type ThisType = ThisParameterType<typeof sayHello>; // { name: string }

const obj: ThisType = { name: "Alice" };
console.log(sayHello.call(obj, "Hi")); // Hi, Alice
```

---

# 🔹 6️⃣ `OmitThisParameter<T>`

Removes the `this` parameter from a function type.

```ts id="ft6"
const fn = function(this: { name: string }) {
  console.log(this.name);
};

type FnWithoutThis = OmitThisParameter<typeof fn>;

const safeFn: FnWithoutThis = () => console.log("No this needed");
```

---

# 🔹 7️⃣ `Parameters` + `ReturnType` Combo

You can combine them for **advanced function manipulation**:

```ts id="ft7"
type AsyncReturnType<T extends (...args: any) => any> = ReturnType<T> extends Promise<infer U> ? U : never;

async function fetchUser() {
  return { name: "Alice", age: 25 };
}

type User = AsyncReturnType<typeof fetchUser>; // { name: string; age: number }
```

---

# 🔹 8️⃣ `Required`, `Partial`, etc. for function params

Sometimes you can use utility types to **modify function parameter objects**:

```ts id="ft8"
type Fn = (options: { id?: number; name?: string }) => void;

type FnWithRequired = (options: Required<Parameters<Fn>[0]>) => void;

const f: FnWithRequired = (options) => {
  console.log(options.id, options.name);
};
```

* Forces all options to be required.

---

# 🔹 9️⃣ Summary Table of Function Utility Types

| Utility Type               | What it Does                               |
| -------------------------- | ------------------------------------------ |
| `ReturnType<T>`            | Extract return type of function T          |
| `Parameters<T>`            | Extract parameter types as a tuple         |
| `ConstructorParameters<T>` | Extract constructor parameters as tuple    |
| `InstanceType<T>`          | Get instance type of a class               |
| `ThisParameterType<T>`     | Get type of `this` in a function           |
| `OmitThisParameter<T>`     | Remove `this` parameter from function type |

---

# ✅ Key Takeaways

* Use these to **extract types from existing functions or classes**
* Combine them for **advanced type transformations**
* Super useful in **generic libraries, higher-order functions, or API wrappers**
