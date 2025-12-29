---
title: undefined
sidebar_position: 8
---

## Definition

`undefined` is a primitive value that indicates a variable has been declared but not assigned a value, or a property doesn't exist on an object. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

```javascript
typeof undefined  // "undefined"
undefined === undefined  // true
undefined == null        // true (loose equality)
undefined === null       // false (strict equality)
```

## When undefined Appears

### Uninitialized Variables

```javascript
let x
console.log(x)           // undefined
```

### Missing Function Parameters

```javascript
function example(param) {
  console.log(param)     // undefined if not passed
}

example()                // undefined
```

### Missing Object Properties

```javascript
const obj = { a: 1 }
console.log(obj.b)       // undefined
```

### Function Return Value

```javascript
function noReturn() {
  // No return statement
}

console.log(noReturn())  // undefined
```

### Array Holes

```javascript
const arr = [1, , 3]     // Sparse array
console.log(arr[1])      // undefined
```

## undefined vs null

| Aspect        | `undefined`                    | `null`                          |
| ------------- | ------------------------------ | ------------------------------- |
| **Type**      | `undefined`                    | `object` (bug)                  |
| **Intent**    | Variable not assigned          | Intentional absence of value    |
| **Default**   | Automatically assigned         | Must be explicitly set          |
| **Usage**     | Uninitialized variables        | Explicitly set to "no value"    |

```javascript
let x                    // undefined (not assigned)
let y = null            // null (explicitly set)

function example(param) {
  console.log(param)    // undefined if not passed
}

example()               // undefined
example(null)           // null
```

## Checking for undefined

```javascript
// Strict equality (recommended)
value === undefined     // true if undefined
value !== undefined     // true if not undefined

// Loose equality (not recommended)
value == undefined      // true if undefined or null

// typeof check (works even if undefined is shadowed)
typeof value === 'undefined'  // true if undefined
```

## The undefined Global

`undefined` is a property of the global object, but it's not a reserved word, so it can be shadowed:

```javascript
// In older code, undefined could be reassigned (not in strict mode)
// Modern JavaScript: undefined is read-only

(function() {
  let undefined = "not undefined"
  console.log(undefined)  // "not undefined" (local variable)
})()

// Safe check using typeof
function isUndefined(value) {
  return typeof value === 'undefined'
}
```

## Common Patterns

### Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`
}

greet()                 // "Hello, Guest!"
greet("Alice")          // "Hello, Alice!"
```

### Optional Chaining

```javascript
const user = { name: "Alice" }
console.log(user.address?.city)  // undefined (safe access)
```

### Nullish Coalescing

```javascript
const name = username ?? "Guest"  // "Guest" if username is undefined/null
```

## JSON Serialization

`undefined` is not preserved in JSON—properties with `undefined` values are omitted:

```javascript
JSON.stringify({ name: undefined })  // '{}'
JSON.stringify({ name: null })      // '{"name":null}'
```

## Best Practices

1. **Don't assign `undefined`**: Let it be the default for uninitialized variables.

2. **Use `null` for intentional absence**: If you need to explicitly indicate "no value", use `null`.

3. **Use strict equality**: Always use `===` to check for `undefined`.

4. **Use default parameters**: Instead of checking for `undefined` inside functions:

```javascript
// Good
function greet(name = "Guest") {
  return `Hello, ${name}!`
}

// Less ideal
function greet(name) {
  name = name || "Guest"
  return `Hello, ${name}!`
}
```

5. **Use optional chaining**: For safe property access:

```javascript
// Safe access
const city = user?.address?.city  // undefined if any part is missing
```

