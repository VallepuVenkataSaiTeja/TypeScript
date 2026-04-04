**getters and setters in TypeScript**—these are special **methods that control access to class properties**, often combined with access modifiers.

---

# 🔹 1️⃣ Basic Getter

* A getter **reads a property**.
* Defined using `get` keyword.

```ts id="gs1"
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

const alice = new Person("Alice");
console.log(alice.name); // ✅ "Alice"
```

> Notice: you access `name` **like a property**, not a method.

---

# 🔹 2️⃣ Basic Setter

* A setter **modifies a property**.
* Defined using `set` keyword.

```ts id="gs2"
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) throw new Error("Age cannot be negative");
    this._age = value;
  }
}

const bob = new Person(30);
bob.age = 35;       // ✅ sets value
// bob.age = -5;    // ❌ throws error
console.log(bob.age); // 35
```

> Setters are perfect for **validation or computed values**.

---

# 🔹 3️⃣ Access Modifiers with Getters/Setters

* You can combine with `private`, `protected`, or `readonly`.

```ts id="gs3"
class Car {
  constructor(private _speed: number) {}

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    if (value < 0) throw new Error("Speed cannot be negative");
    this._speed = value;
  }
}

const car = new Car(50);
console.log(car.speed); // 50
car.speed = 100;        // ✅
```

---

# 🔹 4️⃣ Readonly via Getter Only

* If you **only define a getter**, the property becomes **read-only** outside the class.

```ts id="gs4"
class Circle {
  constructor(private _radius: number) {}

  get radius(): number {
    return this._radius;
  }
}

const c = new Circle(10);
console.log(c.radius); // 10
// c.radius = 20;      ❌ Error: no setter
```

---

# 🔹 5️⃣ Computed / Derived Properties

* Getters can **compute values** dynamically.

```ts id="gs5"
class Rectangle {
  constructor(private width: number, private height: number) {}

  get area(): number {
    return this.width * this.height;
  }

  get perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area);      // 50
console.log(rect.perimeter); // 30
```

---

# 🔹 6️⃣ Key Points

1. **Getters** – read access, behave like properties.
2. **Setters** – write access, can include **validation**.
3. **Getter-only** → read-only.
4. Combine with **access modifiers** (`private _prop`, `protected _prop`).
5. Great for **encapsulation** and **computed properties**.

---

# 🔹 7️⃣ Example: Full Encapsulation

```ts id="gs6"
class BankAccount {
  constructor(private _balance: number) {}

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this._balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this._balance) throw new Error("Insufficient funds");
    this._balance -= amount;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.balance); // 1500
account.withdraw(200);
console.log(account.balance); // 1300
```

> Notice how **balance** cannot be set directly, but controlled via methods and a getter.
