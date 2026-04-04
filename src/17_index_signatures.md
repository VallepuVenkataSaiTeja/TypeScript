In TypeScript, **index signatures** allow you to define objects whose **property names are dynamic** but **all values follow a certain type**. They’re essential for dictionaries, maps, or objects with unknown keys.

---

# 🔹 Basic Syntax

```ts id="p1hk9w"
interface StringMap {
  [key: string]: string;
}
```

* `[key: string]` → any string can be a property name
* `: string` → all values must be strings

Example:

```ts id="o6p9yx"
const colors: StringMap = {
  red: "#FF0000",
  green: "#00FF00",
};

colors.blue = "#0000FF"; // ✅ Allowed
```

---

# 🔹 Number Index Signatures

You can also use numbers as keys:

```ts id="m8r0uf"
interface NumberMap {
  [key: number]: string;
}

const map: NumberMap = {
  1: "one",
  2: "two",
};
```

> Note: JS converts number keys to strings internally, but TypeScript enforces type safety.

---

# 🔹 Combined Fixed + Index Signature

You can define some fixed properties **and still allow dynamic ones**:

```ts id="v2t3qy"
interface FlexibleUser {
  id: number;          // fixed
  name: string;        // fixed
  [key: string]: string | number; // dynamic
}

const user: FlexibleUser = {
  id: 1,
  name: "Alice",
  age: 25,          // allowed
  role: "admin",    // allowed
};
```

> Important: The index signature type must include the types of **all fixed properties**.

---

# 🔹 Readonly Index Signatures

```ts id="c3h7kj"
interface ReadonlyMap {
  readonly [key: string]: number;
}

const scores: ReadonlyMap = {
  Alice: 90,
};

// scores.Alice = 95; ❌ Error
```

---

# 🔹 Optional Index Signature (via union with undefined)

```ts id="x7t4nu"
interface PartialMap {
  [key: string]: number | undefined;
}

const scores: PartialMap = {};
scores.Alice = 90; // ✅
scores.Bob = undefined; // ✅
```

---

# 🔹 Index Signature with Functions

```ts id="j5r9vm"
interface Callbacks {
  [event: string]: () => void;
}

const handlers: Callbacks = {
  onClick: () => console.log("clicked"),
  onHover: () => console.log("hovered"),
};
```

---

# 🔹 Use Cases

* Dictionaries / maps
* Dynamic API response objects
* Event handlers
* Config objects

---

# 🔹 Key Notes

1. **All fixed property types must be compatible** with the index signature.
2. Can use `string` or `number` as key type.
3. Optional & readonly modifiers are supported.
4. Can combine with generics:

```ts id="l4m7qv"
interface GenericMap<T> {
  [key: string]: T;
}

const ages: GenericMap<number> = { Alice: 25, Bob: 30 };
```

---

# ✅ Summary

* `[key: type]: valueType` = index signature
* Dynamic keys with **uniform value type**
* Works with strings, numbers, and generics
* Supports readonly and optional values