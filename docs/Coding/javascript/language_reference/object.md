---
title: Object
sidebar_position: 5
---

## Definition

An `Object` is a collection of properties, where each property is a key-value pair. Objects are the fundamental data structure in JavaScript and are used to store and organize data.

```javascript
typeof {}        // "object"
typeof []        // "object" (arrays are objects)
typeof null      // "object" (this is a bug)
```

## Creating Objects

Objects can be created using object literals or the `Object` constructor:

```javascript
// Object literal (preferred)
const person = {
  name: "Alice",
  age: 30
}

// Object constructor
const person2 = new Object()
person2.name = "Alice"
person2.age = 30

// Object.create()
const person3 = Object.create(null)
person3.name = "Alice"
```

## Object Properties

### Accessing Properties

```javascript
const person = { name: "Alice", age: 30 }

// Dot notation
person.name     // "Alice"

// Bracket notation
person["name"]  // "Alice"
person["age"]   // 30

// Dynamic property access
const key = "name"
person[key]     // "Alice"
```

### Setting Properties

```javascript
const person = {}

// Dot notation
person.name = "Alice"
person.age = 30

// Bracket notation
person["city"] = "Boston"
person["favorite color"] = "blue"  // Spaces allowed with brackets
```

### Deleting Properties

```javascript
const person = { name: "Alice", age: 30 }

delete person.age
// person is now { name: "Alice" }
```

## Object Methods

### Object.keys()

Returns an array of a given object's own enumerable property names.

```javascript
const person = { name: "Alice", age: 30 }
Object.keys(person)  // ["name", "age"]
```

### Object.values()

Returns an array of a given object's own enumerable property values.

```javascript
const person = { name: "Alice", age: 30 }
Object.values(person)  // ["Alice", 30]
```

### Object.entries()

Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

```javascript
const person = { name: "Alice", age: 30 }
Object.entries(person)  // [["name", "Alice"], ["age", 30]]
```

### Object.assign()

Copies all enumerable own properties from one or more source objects to a target object.

```javascript
const target = { a: 1 }
const source = { b: 2, c: 3 }

Object.assign(target, source)
// target is now { a: 1, b: 2, c: 3 }
```

### Object.create()

Creates a new object with the specified prototype object and properties.

```javascript
const proto = { greet() { return "Hello" } }
const obj = Object.create(proto)
obj.greet()  // "Hello"
```

### Object.freeze()

Freezes an object, preventing new properties from being added and existing properties from being modified or deleted.

```javascript
const obj = { name: "Alice" }
Object.freeze(obj)
obj.name = "Bob"  // Ignored in strict mode, throws error
obj.age = 30      // Ignored
```

### Object.seal()

Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.

```javascript
const obj = { name: "Alice" }
Object.seal(obj)
obj.name = "Bob"  // Allowed
obj.age = 30      // Ignored
delete obj.name   // Ignored
```

### Object.is()

Determines whether two values are the same value.

```javascript
Object.is(5, 5)           // true
Object.is(NaN, NaN)       // true (unlike ===)
Object.is(-0, +0)         // false (unlike ===)
```

### Object.hasOwnProperty()

Returns a boolean indicating whether the object has the specified property as its own property.

```javascript
const obj = { name: "Alice" }
obj.hasOwnProperty("name")  // true
obj.hasOwnProperty("toString")  // false (inherited)
```

### Object.prototype.toString()

Returns a string representing the object.

```javascript
const obj = { name: "Alice" }
obj.toString()  // "[object Object]"
```

## Iterating Over Objects

### for...in Loop

Iterates over all enumerable properties (including inherited ones).

```javascript
const person = { name: "Alice", age: 30 }

for (let key in person) {
  console.log(key, person[key])
}
// name Alice
// age 30
```

### Object.keys() with forEach

```javascript
const person = { name: "Alice", age: 30 }

Object.keys(person).forEach(key => {
  console.log(key, person[key])
})
```

### Object.entries() with for...of

```javascript
const person = { name: "Alice", age: 30 }

for (let [key, value] of Object.entries(person)) {
  console.log(key, value)
}
```

## Object Destructuring

Extract properties from objects:

```javascript
const person = { name: "Alice", age: 30 }

// Basic destructuring
const { name, age } = person
// name is "Alice", age is 30

// With renaming
const { name: personName } = person
// personName is "Alice"

// With default values
const { name, city = "Unknown" } = person
// city is "Unknown" if not present
```

## Spread Operator

Copy and merge objects:

```javascript
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

// Copy
const copy = { ...obj1 }  // { a: 1, b: 2 }

// Merge
const merged = { ...obj1, ...obj2 }  // { a: 1, b: 2, c: 3, d: 4 }

// Override
const updated = { ...obj1, b: 3 }  // { a: 1, b: 3 }
```

## Computed Property Names

Use expressions as property names:

```javascript
const key = "name"
const obj = {
  [key]: "Alice",
  [`${key}Length`]: 5
}
// { name: "Alice", nameLength: 5 }
```

## Property Shorthand

When property name matches variable name:

```javascript
const name = "Alice"
const age = 30

const person = { name, age }
// Same as { name: name, age: age }
```

## Object Methods (ES6+)

Define methods in object literals:

```javascript
const person = {
  name: "Alice",
  greet() {
    return `Hello, I'm ${this.name}`
  }
}

person.greet()  // "Hello, I'm Alice"
```

## Getters and Setters

```javascript
const person = {
  _age: 30,
  get age() {
    return this._age
  },
  set age(value) {
    if (value > 0) {
      this._age = value
    }
  }
}

person.age = 25  // Uses setter
console.log(person.age)  // 25 (uses getter)
```

## Prototypes

Objects inherit properties from their prototype:

```javascript
const obj = {}
obj.toString()  // "[object Object]" (inherited from Object.prototype)
```

## Best Practices

1. **Use object literals**: Prefer `{}` over `new Object()`.

2. **Use const for objects**: The object reference is constant, but properties can change.

3. **Use Object methods**: Prefer `Object.keys()`, `Object.values()`, `Object.entries()` for iteration.

4. **Be careful with prototypes**: Understand prototype chain when accessing properties.

5. **Use destructuring**: Makes code cleaner when extracting multiple properties.

