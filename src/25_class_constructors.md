**class constructors in TypeScript** and how to type them properly. I’ll cover **basic syntax, parameter properties, access modifiers, generics, and utility types for constructors**.

---

# 🔹 1️⃣ Basic Class Constructor

```ts id="c1"
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // Hi, I am Alice
```

* `constructor` is a **special method** to initialize class instances.
* You can **define parameters** and assign them to properties.

---

# 🔹 2️⃣ Parameter Properties (Shortcut)

TypeScript lets you define and initialize **properties directly in the constructor parameters** using access modifiers:

```ts id="c2"
class Person {
  constructor(public name: string, private age: number) {}

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }

  getAge() {
    return this.age; // accessible because it's private within the class
  }
}
```

✅ No need to manually declare `name` and `age` outside the constructor.

---

# 🔹 3️⃣ Optional & Default Constructor Parameters

```ts id="c3"
class Person {
  constructor(public name: string, public age: number = 18) {}
}

const bob = new Person("Bob"); 
console.log(bob.age); // 18
```

* Use `?` or default values for **optional parameters**.

---

# 🔹 4️⃣ Access Modifiers

| Modifier    | Access                               |
| ----------- | ------------------------------------ |
| `public`    | Accessible anywhere                  |
| `private`   | Accessible only inside the class     |
| `protected` | Accessible inside class + subclasses |
| `readonly`  | Cannot modify after initialization   |

```ts id="c4"
class Car {
  constructor(public readonly model: string, private speed: number) {}

  getSpeed() {
    return this.speed;
  }
}
```

---

# 🔹 5️⃣ Generics in Constructors

You can make classes **generic** for flexible types:

```ts id="c5"
class Box<T> {
  constructor(public content: T) {}

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello");
```

* `T` ensures **type-safe content**.

---

# 🔹 6️⃣ Constructor Signatures / Typing Constructor Functions

Sometimes you want **type-safe constructor references**:

```ts id="c6"
class Person {
  constructor(public name: string) {}
}

// Constructor type: new (name: string) => Person
type PersonConstructor = new (name: string) => Person;

function createPerson(ctor: PersonConstructor, name: string): Person {
  return new ctor(name);
}

const alice = createPerson(Person, "Alice");
```

* `new (...) => Type` is the **type of a constructor function**.

---

# 🔹 7️⃣ Abstract Classes & Constructors

Abstract classes **cannot be instantiated**, but can define constructors:

```ts id="c7"
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Woof!
```

* Abstract classes **enforce a common constructor structure**.

---

# 🔹 8️⃣ Using `ConstructorParameters` Utility Type

TypeScript can **extract constructor parameter types**:

```ts id="c8"
class User {
  constructor(public name: string, public age: number) {}
}

type UserCtorParams = ConstructorParameters<typeof User>; // [string, number]

const params: UserCtorParams = ["Alice", 25];
const user = new User(...params);
```

✅ Super useful for **factory functions**.

---

# 🔹 9️⃣ Key Takeaways

1. `constructor` initializes class instances.
2. Parameter properties (`public`, `private`, `readonly`) reduce boilerplate.
3. Optional & default parameters are supported.
4. Access modifiers control visibility.
5. Generics make constructors **flexible and type-safe**.
6. `new (...) => Type` is used for **constructor type references**.
7. `ConstructorParameters` extracts constructor argument types.
8. Abstract classes define **constructor contracts** for subclasses.
