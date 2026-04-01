**TypeScript (TS)** is a modern programming language developed by Microsoft that builds on top of **JavaScript** by adding **static typing** and other powerful features.

---

## What is TypeScript?

TypeScript is a **superset of JavaScript**, which means:

* Any valid JavaScript code is also valid TypeScript
* It adds extra features like types, interfaces, and better tooling

TypeScript code is compiled into plain JavaScript, which can run in any browser or JavaScript runtime like Node.js.

---

## Why use TypeScript?

### 1. Static Typing

You can define types for variables, parameters, and return values:

```ts
function greet(name: string): string {
  return "Hello " + name;
}
```

This helps catch errors early during development.

---

### 2. Better Developer Experience

* Autocomplete (IntelliSense)
* Easier debugging
* Clearer code structure

---

### 3. Scalability

TypeScript is especially useful for **large applications**, where maintaining code becomes complex.

---

### 4. Modern JavaScript Features

Supports latest JavaScript features and compiles them for older environments.

---

## Key Features

* Types (`string`, `number`, `boolean`, etc.)
* Interfaces and type aliases
* Classes and object-oriented programming
* Generics
* Modules and namespaces

---

## How TypeScript Works

1. You write code in `.ts` files
2. TypeScript compiler (`tsc`) checks types
3. It converts (transpiles) code into JavaScript
4. JavaScript runs in browser or Node.js

---

## Example Comparison

**JavaScript:**

```js
function add(a, b) {
  return a + b;
}
```

**TypeScript:**

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## In Short

TypeScript = JavaScript + Types + Better Tools

It helps you:

* Write safer code
* Avoid runtime errors
* Build large, maintainable applications