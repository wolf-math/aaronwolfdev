---
title: Array
sidebar_position: 6
---

## Definition

An `Array` is a collection of items defined with square brackets `[]`. These items are stored at locations within the array starting at index `0`. Items within an array can be modified, added, or removed, and can contain multiple types, including other arrays. Unlike many other programming languages, a JavaScript array can contain many different types: `['apple', 2, true, 'string cheese']`.

```javascript
typeof []        // "object"
Array.isArray([]) // true
```

## Creating Arrays

Arrays can be created using array literals or the `Array` constructor:

```javascript
// Literal syntax (preferred)
const myArray = ['apple', 2, true, 'string cheese']

// Array constructor
const myArray2 = new Array('apple', 2, true)
const myArray3 = new Array(5)  // Creates array with 5 empty slots

// Array.of()
const myArray4 = Array.of(1, 2, 3)  // [1, 2, 3]

// Array.from()
const myArray5 = Array.from('hello')  // ['h', 'e', 'l', 'l', 'o']
```

## Accessing Elements

Array elements are accessed by their index. Indices start at `0`. A negative index can be used with `at()` method (ES2022) or calculated manually.

```javascript
const myArray = ['apple', 2, true, 'string cheese']

myArray[0]       // 'apple'
myArray[1]       // 2
myArray[3]       // 'string cheese'
myArray[10]      // undefined (out of bounds)

// Using at() method (ES2022)
myArray.at(-1)   // 'string cheese' (last element)
myArray.at(-2)   // true (second from end)
```

## Array Length

Get the length of an array:

```javascript
const arr = [1, 2, 3]
arr.length       // 3

// Setting length can truncate or extend array
arr.length = 5
// arr is now [1, 2, 3, empty × 2]

arr.length = 2
// arr is now [1, 2]
```

## Modifying Arrays

### Adding Elements

```javascript
const arr = [1, 2, 3]

// push() - adds to end
arr.push(4)      // [1, 2, 3, 4]

// unshift() - adds to beginning
arr.unshift(0)   // [0, 1, 2, 3, 4]

// Direct assignment
arr[5] = 6       // [0, 1, 2, 3, 4, empty, 6]
```

### Removing Elements

```javascript
const arr = [1, 2, 3, 4, 5]

// pop() - removes from end
arr.pop()        // Returns 5, arr is now [1, 2, 3, 4]

// shift() - removes from beginning
arr.shift()      // Returns 1, arr is now [2, 3, 4]

// splice() - removes/inserts at specific index
arr.splice(1, 1) // Removes 1 element at index 1, arr is now [2, 4]
```

### Modifying Elements

```javascript
const arr = [1, 2, 3]
arr[1] = 20      // [1, 20, 3]
```

## Array Methods

### Iteration Methods

#### `forEach()`

Executes a function for each array element.

```javascript
[1, 2, 3].forEach((item, index) => {
  console.log(item, index)
})
// 1 0
// 2 1
// 3 2
```

#### `map()`

Creates a new array with the results of calling a function on every element.

```javascript
[1, 2, 3].map(x => x * 2)  // [2, 4, 6]
```

#### `filter()`

Creates a new array with elements that pass a test.

```javascript
[1, 2, 3, 4, 5].filter(x => x > 2)  // [3, 4, 5]
```

#### `find()`

Returns the first element that passes a test.

```javascript
[1, 2, 3, 4, 5].find(x => x > 2)  // 3
```

#### `findIndex()`

Returns the index of the first element that passes a test.

```javascript
[1, 2, 3, 4, 5].findIndex(x => x > 2)  // 2
```

#### `some()`

Tests whether at least one element passes a test.

```javascript
[1, 2, 3].some(x => x > 2)  // true
```

#### `every()`

Tests whether all elements pass a test.

```javascript
[1, 2, 3].every(x => x > 0)  // true
```

### Transformation Methods

#### `reduce()`

Reduces an array to a single value.

```javascript
[1, 2, 3, 4].reduce((acc, val) => acc + val, 0)  // 10
```

#### `reduceRight()`

Same as `reduce()`, but processes from right to left.

```javascript
[1, 2, 3].reduceRight((acc, val) => acc - val, 0)  // -6
```

### Search Methods

#### `indexOf()`

Returns the first index of an element, or -1 if not found.

```javascript
[1, 2, 3, 2].indexOf(2)     // 1
[1, 2, 3].indexOf(4)        // -1
```

#### `lastIndexOf()`

Returns the last index of an element, or -1 if not found.

```javascript
[1, 2, 3, 2].lastIndexOf(2) // 3
```

#### `includes()`

Determines whether an array includes a certain value.

```javascript
[1, 2, 3].includes(2)       // true
[1, 2, 3].includes(4)       // false
```

### Array Manipulation Methods

#### `concat()`

Merges two or more arrays.

```javascript
[1, 2].concat([3, 4])       // [1, 2, 3, 4]
[1, 2].concat([3, 4], [5, 6]) // [1, 2, 3, 4, 5, 6]
```

#### `slice()`

Returns a shallow copy of a portion of an array.

```javascript
[1, 2, 3, 4, 5].slice(1, 4)  // [2, 3, 4]
[1, 2, 3, 4, 5].slice(2)     // [3, 4, 5]
[1, 2, 3, 4, 5].slice(-2)   // [4, 5]
```

#### `splice()`

Changes the contents of an array by removing or replacing elements.

```javascript
const arr = [1, 2, 3, 4, 5]
arr.splice(1, 2, 'a', 'b')  // Removes 2 elements starting at index 1, inserts 'a', 'b'
// arr is now [1, 'a', 'b', 4, 5]
```

#### `reverse()`

Reverses an array in place.

```javascript
const arr = [1, 2, 3]
arr.reverse()              // [3, 2, 1] (mutates original)
```

#### `sort()`

Sorts an array in place.

```javascript
const arr = [3, 1, 2]
arr.sort()                 // [1, 2, 3] (mutates original)

// Custom sort
[3, 1, 2].sort((a, b) => b - a)  // [3, 2, 1] (descending)
```

### Array Creation Methods

#### `join()`

Joins all elements into a string.

```javascript
[1, 2, 3].join(', ')      // "1, 2, 3"
[1, 2, 3].join('')        // "123"
```

#### `toString()`

Returns a string representation of an array.

```javascript
[1, 2, 3].toString()       // "1,2,3"
```

## Array Destructuring

Extract elements from arrays:

```javascript
const arr = [1, 2, 3]

// Basic destructuring
const [a, b, c] = arr
// a is 1, b is 2, c is 3

// Skip elements
const [first, , third] = arr
// first is 1, third is 3

// Rest operator
const [first, ...rest] = arr
// first is 1, rest is [2, 3]

// Default values
const [a = 0, b = 0] = [1]
// a is 1, b is 0
```

## Spread Operator

Copy and merge arrays:

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// Copy
const copy = [...arr1]    // [1, 2, 3]

// Merge
const merged = [...arr1, ...arr2]  // [1, 2, 3, 4, 5, 6]

// Add elements
const extended = [...arr1, 4, 5]   // [1, 2, 3, 4, 5]
```

## Multidimensional Arrays

Arrays can contain other arrays:

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

matrix[0][1]              // 2
```

## Sparse Arrays

Arrays can have "holes" (undefined elements):

```javascript
const sparse = [1, , 3]    // [1, empty, 3]
sparse.length              // 3
sparse[1]                 // undefined
```

## Array-like Objects

Some objects look like arrays but aren't:

```javascript
// Arguments object
function example() {
  console.log(Array.isArray(arguments))  // false
  const arr = Array.from(arguments)     // Convert to array
}

// NodeList
const nodes = document.querySelectorAll('div')
const nodeArray = Array.from(nodes)     // Convert to array
```

## Best Practices

1. **Use array literals**: Prefer `[]` over `new Array()`.

2. **Use const for arrays**: The array reference is constant, but elements can change.

3. **Prefer immutable methods**: Use `map()`, `filter()`, `slice()` instead of mutating methods when possible.

4. **Use destructuring**: Makes code cleaner when extracting multiple elements.

5. **Use spread operator**: For copying and merging arrays.

6. **Be aware of mutation**: Methods like `push()`, `pop()`, `sort()`, `reverse()` mutate the original array.

