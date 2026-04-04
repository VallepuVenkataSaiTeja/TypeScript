In TypeScript, **parameter annotations** are how you explicitly specify the types of function parameters. This is one of the core features that gives TypeScript its type safety.

---

## 🔹 Basic Syntax

You annotate a parameter by adding `: Type` after its name:

```ts
function greet(name: string) {
  console.log("Hello, " + name);
}
```

Here:

* `name` is the parameter
* `string` is the type annotation

---

## 🔹 Multiple Parameters

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

* `a` and `b` are annotated as `number`
* The return type `: number` is also specified (optional but recommended)

---

## 🔹 Optional Parameters

Use `?` to mark a parameter as optional:

```ts
function greet(name: string, age?: number) {
  console.log(name, age);
}
```

* `age` can be `undefined`

---

## 🔹 Default Parameters

You can assign default values:

```ts
function greet(name: string = "Guest") {
  console.log("Hello, " + name);
}
```

* Type is inferred as `string`

---

## 🔹 Rest Parameters

Used for variable number of arguments:

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}
```

---

## 🔹 Destructured Parameter Annotations

When using object destructuring, annotate the whole object:

```ts
function printUser({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}
```

---

## 🔹 Function Type as Parameter

```ts
function process(callback: (x: number) => number) {
  return callback(5);
}
```

---

## 🔹 Union Types

```ts
function printId(id: number | string) {
  console.log(id);
}
```

---

## 🔹 Any vs Unknown

```ts
function log(value: any) {
  console.log(value);
}
```

* `any`: disables type checking
* Prefer `unknown` for safer handling:

```ts
function log(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

## 🔹 Inline vs Type Alias

Instead of repeating types:

```ts
type User = {
  name: string;
  age: number;
};

function printUser(user: User) {
  console.log(user.name);
}
```

---

## ✅ Key Takeaways

* Parameter annotations use `param: Type`
* Help catch errors at compile time
* Work with advanced types (unions, functions, objects)
* Optional (`?`), default, and rest parameters add flexibility