---
title: Boolean
sidebar_position: 4
---

## Definition

A `Boolean` is a logical value: `true` or `false`. It answers questions like "Is this statement correct?"

```javascript
typeof true      // "boolean"
typeof false     // "boolean"
```

## Creating Booleans

Booleans can be created using literals or the `Boolean` constructor:

```javascript
// Literal syntax
true
false

// Boolean constructor
new Boolean(true)   // Boolean object (not recommended)
Boolean(true)       // true (primitive)
```

## Truthy and Falsy Values

In JavaScript, values are automatically converted to booleans in boolean contexts. Some values are "truthy" (convert to `true`) and others are "falsy" (convert to `false`).

### Falsy Values

These values evaluate to `false`:

| Value      | Type        | Notes                    |
| ---------- | ----------- | ------------------------ |
| `false`    | `boolean`   | The literal `false`      |
| `0`        | `number`    | Zero                     |
| `-0`       | `number`    | Negative zero            |
| `0n`       | `bigint`    | BigInt zero              |
| `""`       | `string`    | Empty string             |
| `null`     | `null`      | Represents "no value"     |
| `undefined`| `undefined` | Represents "not defined" |
| `NaN`      | `number`    | Not-a-Number             |

### Truthy Values

Everything else is truthy, including:

```javascript
true                    // true
1                       // true
-1                      // true
"hello"                 // true
"0"                     // true (string, not number)
"false"                 // true (string, not boolean)
[]                      // true (empty array)
{}                      // true (empty object)
function() {}           // true
```

## Boolean Operations

### Logical AND (`&&`)

Returns the first falsy value, or the last value if all are truthy.

```javascript
true && true            // true
true && false           // false
false && true           // false
false && false          // false

"hello" && "world"      // "world" (returns last truthy)
"" && "world"           // "" (returns first falsy)
```

### Logical OR (`||`)

Returns the first truthy value, or the last value if all are falsy.

```javascript
true || true            // true
true || false           // true
false || true           // true
false || false          // false

"hello" || "world"      // "hello" (returns first truthy)
"" || "world"           // "world" (returns first truthy)
```

### Logical NOT (`!`)

Returns the opposite boolean value.

```javascript
!true                   // false
!false                  // true
!"hello"                // false
!""                     // true
```

### Double NOT (`!!`)

Converts a value to a boolean.

```javascript
!!"hello"               // true
!!""                    // false
!!0                     // false
!!1                     // true
```

## Comparison Operations

Comparison operations return boolean values:

```javascript
// Equality
5 == 8                  // false
5 === 8                 // false (strict equality)

// Inequality
5 != 8                  // true
5 !== 8                 // true (strict inequality)

// Greater than
5 > 8                   // false

// Less than
5 < 8                   // true

// Greater than or equal
5 >= 8                  // false

// Less than or equal
5 <= 8                  // true
```

## Boolean Constructor

The `Boolean` constructor can convert values to booleans:

```javascript
Boolean(1)              // true
Boolean(0)              // false
Boolean("hello")        // true
Boolean("")             // false
Boolean(null)           // false
Boolean(undefined)      // false
```

## Common Patterns

### Conditional Statements

```javascript
if (value) {
  // Executes if value is truthy
}

if (!value) {
  // Executes if value is falsy
}
```

### Default Values

```javascript
// Using logical OR for defaults
const name = username || "Guest"

// Using nullish coalescing (ES2020)
const name = username ?? "Guest"
```

### Short-Circuit Evaluation

```javascript
// Only call function if condition is true
condition && doSomething()

// Only call function if condition is false
condition || doSomething()
```

## Boolean Methods

### `toString()`

Converts a boolean to a string.

```javascript
true.toString()         // "true"
false.toString()        // "false"
```

### `valueOf()`

Returns the primitive value of a boolean object.

```javascript
const bool = new Boolean(true)
bool.valueOf()          // true
```

## Type Coercion

JavaScript automatically converts values to booleans in boolean contexts:

```javascript
if (1) {                // 1 is coerced to true
  console.log("truthy")
}

const result = "hello" ? "yes" : "no"  // "yes" (string is truthy)
```

## Best Practices

1. **Use strict equality** (`===`) instead of loose equality (`==`) to avoid unexpected type coercion.

2. **Be explicit** with boolean conversions when clarity is important:

```javascript
// Explicit
const isValid = Boolean(value)

// Implicit (can be confusing)
const isValid = !!value
```

3. **Use nullish coalescing** (`??`) instead of `||` when you only want to check for `null` or `undefined`:

```javascript
const value = input ?? "default"  // Only if null/undefined
const value = input || "default"  // If any falsy value
```

