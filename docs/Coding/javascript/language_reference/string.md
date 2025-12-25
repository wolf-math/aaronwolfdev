---
title: String
sidebar_position: 3
---

## Definition

A `String` is a sequence of characters used to represent text. Strings in JavaScript are immutable—once created, they cannot be changed. Only new strings can be created.

```javascript
typeof "hello"   // "string"
typeof 'world'   // "string"
typeof `template` // "string"
```

## Creating Strings

Strings can be created using single quotes, double quotes, or template literals:

```javascript
// Single quotes
'Hello, world!'

// Double quotes
"Hello, world!"

// Template literals (ES6+)
`Hello, world!`

// String constructor
new String('hello')  // String object (not recommended)
String('hello')      // "hello" (primitive)
```

## Template Literals

Template literals (backticks) allow for string interpolation and multi-line strings:

```javascript
const name = 'Alice'
const greeting = `Hello, ${name}!`  // "Hello, Alice!"

// Multi-line strings
const multiLine = `
  This is a
  multi-line
  string
`
```

## Escape Characters

Special characters can be escaped with a backslash:

```javascript
"Hello \"world\""      // Hello "world"
'It\'s a string'        // It's a string
"Line 1\nLine 2"       // Line 1
                       // Line 2
"Tab\tseparated"       // Tab    separated
"Backslash\\"          // Backslash\
```

## Basic Operations

### Concatenation

Strings can be concatenated with the `+` operator:

```javascript
"Hello" + " " + "world"  // "Hello world"
"Hello" + 42             // "Hello42" (number coerced to string)
```

### Length

Get the length of a string:

```javascript
"hello".length           // 5
```

### Accessing Characters

Access individual characters using bracket notation:

```javascript
"hello"[0]              // "h"
"hello"[1]              // "e"
"hello"[10]             // undefined
```

## String Methods

### `charAt()`

Returns the character at a specified index.

```javascript
"hello".charAt(0)       // "h"
"hello".charAt(10)      // "" (empty string, not undefined)
```

### `charCodeAt()`

Returns the Unicode value of the character at a specified index.

```javascript
"hello".charCodeAt(0)   // 104 (Unicode for 'h')
```

### `concat()`

Combines two or more strings.

```javascript
"Hello".concat(" ", "world")  // "Hello world"
"Hello" + " " + "world"       // Same result (preferred)
```

### `includes()`

Determines whether a string contains a substring.

```javascript
"hello".includes("ell")  // true
"hello".includes("xyz")  // false
```

### `indexOf()`

Returns the index of the first occurrence of a substring.

```javascript
"hello".indexOf("l")    // 2
"hello".indexOf("x")    // -1 (not found)
```

### `lastIndexOf()`

Returns the index of the last occurrence of a substring.

```javascript
"hello".lastIndexOf("l") // 3
```

### `slice()`

Extracts a section of a string and returns it as a new string.

```javascript
"hello".slice(1, 4)     // "ell"
"hello".slice(1)        // "ello"
"hello".slice(-3)       // "llo" (from end)
```

### `substring()`

Similar to `slice()`, but doesn't accept negative indices.

```javascript
"hello".substring(1, 4) // "ell"
"hello".substring(1)    // "ello"
```

### `substr()` (deprecated)

Extracts a substring starting at a specified position. **Deprecated**: Use `slice()` instead.

### `split()`

Splits a string into an array of substrings.

```javascript
"hello world".split(" ")     // ["hello", "world"]
"a,b,c".split(",")           // ["a", "b", "c"]
"hello".split("")            // ["h", "e", "l", "l", "o"]
```

### `toLowerCase()`

Converts a string to lowercase.

```javascript
"Hello".toLowerCase()   // "hello"
```

### `toUpperCase()`

Converts a string to uppercase.

```javascript
"Hello".toUpperCase()   // "HELLO"
```

### `trim()`

Removes whitespace from both ends of a string.

```javascript
"  hello  ".trim()      // "hello"
```

### `trimStart()` / `trimLeft()`

Removes whitespace from the start of a string.

```javascript
"  hello".trimStart()   // "hello"
```

### `trimEnd()` / `trimRight()`

Removes whitespace from the end of a string.

```javascript
"hello  ".trimEnd()     // "hello"
```

### `replace()`

Replaces the first occurrence of a substring or pattern.

```javascript
"hello world".replace("world", "JavaScript")  // "hello JavaScript"
"hello hello".replace("hello", "hi")         // "hi hello" (only first)
```

### `replaceAll()`

Replaces all occurrences of a substring or pattern.

```javascript
"hello hello".replaceAll("hello", "hi")  // "hi hi"
```

### `startsWith()`

Determines whether a string begins with a substring.

```javascript
"hello".startsWith("he")  // true
"hello".startsWith("lo")  // false
```

### `endsWith()`

Determines whether a string ends with a substring.

```javascript
"hello".endsWith("lo")    // true
"hello".endsWith("he")    // false
```

### `repeat()`

Returns a new string with a specified number of copies.

```javascript
"hello".repeat(3)         // "hellohellohello"
```

### `padStart()`

Pads the start of a string to a specified length.

```javascript
"42".padStart(5, "0")     // "00042"
"42".padStart(5)          // "   42" (spaces by default)
```

### `padEnd()`

Pads the end of a string to a specified length.

```javascript
"42".padEnd(5, "0")       // "42000"
```

### `match()`

Matches a string against a regular expression.

```javascript
"hello".match(/l/g)       // ["l", "l"]
"hello".match(/x/)        // null
```

### `search()`

Searches for a match between a regular expression and a string.

```javascript
"hello".search(/l/)       // 2
"hello".search(/x/)      // -1
```

## String Comparison

Strings are compared lexicographically (alphabetically):

```javascript
"a" < "b"                // true
"apple" < "banana"       // true
"Z" < "a"                // true (uppercase comes before lowercase in ASCII)
```

For case-insensitive comparison, convert to lowercase first:

```javascript
"Apple".toLowerCase() < "banana".toLowerCase()  // true
```

## String Immutability

Strings are immutable in JavaScript:

```javascript
let str = "hello"
str[0] = "H"            // Doesn't work
console.log(str)        // "hello" (unchanged)

// To modify, create a new string
str = "H" + str.slice(1)  // "Hello"
```

## Type Coercion

JavaScript automatically converts values to strings in certain contexts:

```javascript
42 + ""                 // "42"
String(42)              // "42"
`Value: ${42}`          // "Value: 42"
```

