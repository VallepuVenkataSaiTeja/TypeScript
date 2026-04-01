# TypeScript

# 🧭 TypeScript Roadmap

## 1. 🌱 Prerequisites (Must Have)

Before TypeScript, be comfortable with:

* JavaScript fundamentals (ES6+)

  * Variables (`let`, `const`)
  * Functions & arrow functions
  * Objects & arrays
  * Promises / async-await
  * Modules (`import/export`)

👉 If you’re not solid here, learn JS first—it’s non-negotiable.

---

## 2. ⚙️ TypeScript Basics

Start with the core idea: **adding types to JavaScript**

Learn:

* What is TypeScript & why it exists
* Installing TypeScript (`tsc`)
* Basic types:

  * `string`, `number`, `boolean`
  * `any`, `unknown`, `void`, `null`, `undefined`
* Type inference
* Functions with types
* Arrays & tuples

Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 3. 🧩 Objects, Interfaces & Types

This is where TypeScript becomes powerful.

Learn:

* Object types
* `interface` vs `type`
* Optional & readonly properties
* Extending interfaces
* Type aliases

Example:

```ts
interface User {
  name: string;
  age?: number;
}
```

---

## 4. 🔄 Advanced Types

Now you level up your type system thinking.

Learn:

* Union types (`string | number`)
* Intersection types (`A & B`)
* Literal types
* Enums
* Type narrowing
* Type guards (`typeof`, `instanceof`)

---

## 5. 🧠 Functions & Generics

Make reusable, flexible code.

Learn:

* Function overloading
* Generics

Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

## 6. 🏗️ Classes & OOP in TypeScript

If you use object-oriented patterns:

Learn:

* Classes
* Access modifiers (`public`, `private`, `protected`)
* `readonly`
* Abstract classes
* Interfaces with classes

---

## 7. 📦 Modules & Project Structure

Learn how TypeScript scales in real apps:

* ES Modules (`import/export`)
* `tsconfig.json`
* Path aliases
* Compilation (`tsc`)

---

## 8. 🌐 Working with Real Projects

Now apply TypeScript in real-world scenarios:

### Frontend:

* React + TypeScript
* Typing props & hooks

### Backend:

* Node.js + TypeScript
* Express with types

---

## 9. 🔍 Advanced TypeScript (Pro Level)

This is where most developers struggle—but it’s powerful.

Learn:

* Utility types:

  * `Partial`, `Pick`, `Omit`, `Record`
* Mapped types
* Conditional types
* `keyof`, `typeof`
* Infer keyword

---

## 10. 🧪 Tooling & Ecosystem

* ESLint + TypeScript
* Prettier
* ts-node
* Debugging TypeScript

---

## 11. 🧠 Best Practices

* Avoid `any` whenever possible
* Use strict mode (`"strict": true`)
* Prefer `unknown` over `any`
* Keep types simple (don’t over-engineer)

---

# 🚀 Suggested Learning Path (Timeline)

### Week 1–2:

* Basics + types + functions

### Week 3:

* Interfaces + advanced types

### Week 4:

* Generics + classes

### Week 5+:

* Build projects (React / Node)

---

# 🛠️ Projects to Practice

* CLI tool (Node + TS)
* Todo app (React + TS)
* API server (Express + TS)
* Type-safe utility library

---

# 📚 Recommended Resources

* Official TypeScript docs
* YouTube tutorials
* Practice by converting JS → TS

---

# 🎯 Final Advice

Don’t just *learn syntax*—focus on:

* **Type thinking**
* **Catching bugs early**
* **Designing safer APIs**

---
