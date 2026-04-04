**TypeScript access modifiers** in detail—they control **visibility and mutability of class members**.

---

# 🔹 1️⃣ Public (default)

* Accessible **anywhere**: inside the class, subclasses, and instances.
* Default if no modifier is specified.

```ts id="am1"
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const alice = new Person("Alice");
console.log(alice.name); // ✅ Accessible
```

---

# 🔹 2️⃣ Private

* Accessible **only inside the class**.
* Not accessible in subclasses or instances.

```ts id="am2"
class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  getAge() {
    return this.age; // ✅ Accessible inside class
  }
}

const bob = new Person(30);
// console.log(bob.age); ❌ Error: private property
```

---

# 🔹 3️⃣ Protected

* Accessible **inside the class and subclasses**, but **not from instances**.

```ts id="am3"
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  getSpecies() {
    return this.species; // ✅ Accessible in subclass
  }
}

const dog = new Dog("Canine");
// console.log(dog.species); ❌ Error: protected
```

---

# 🔹 4️⃣ Readonly

* Can **only be assigned once** (in declaration or constructor).
* Cannot be modified afterwards.

```ts id="am4"
class Car {
  readonly model: string;

  constructor(model: string) {
    this.model = model;
  }
}

const car = new Car("Tesla");
// car.model = "BMW"; ❌ Error: readonly
```

* Often combined with `public/private/protected`:

```ts id="am5"
class Employee {
  protected readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

---

# 🔹 5️⃣ Parameter Properties (Access + Readonly Shortcut)

TypeScript allows defining **and initializing class properties directly in the constructor**:

```ts id="am6"
class Person {
  constructor(public name: string, private readonly age: number) {}
}

const alice = new Person("Alice", 30);
console.log(alice.name); // ✅ public
// alice.age ❌ Error: private
```

* Combines **declaration + access modifier + initialization** in one line.

---

# 🔹 6️⃣ Summary Table

| Modifier    | Class | Subclass | Instance | Can reassign? |
| ----------- | ----- | -------- | -------- | ------------- |
| `public`    | ✅     | ✅        | ✅        | ✅             |
| `private`   | ✅     | ❌        | ❌        | ✅             |
| `protected` | ✅     | ✅        | ❌        | ✅             |
| `readonly`  | ✅     | ✅        | ✅        | ❌ (once set)  |

* You can **combine modifiers**, e.g., `protected readonly`.

---

# 🔹 7️⃣ Real-World Example

```ts id="am7"
class BankAccount {
  constructor(private readonly accountNumber: string, public balance: number) {}

  deposit(amount: number) {
    this.balance += amount;
  }

  getAccountNumber() {
    return this.accountNumber; // safe access inside class
  }
}

const account = new BankAccount("12345", 1000);
account.deposit(500);
console.log(account.balance);       // ✅ Accessible
// console.log(account.accountNumber); ❌ Error: private
```

---

# ✅ Key Takeaways

1. **`public`** – default, accessible everywhere
2. **`private`** – only inside the class
3. **`protected`** – inside class & subclasses
4. **`readonly`** – assign once, immutable afterwards
5. **Parameter properties** reduce boilerplate
6. Combine modifiers for flexible access control (`protected readonly`)