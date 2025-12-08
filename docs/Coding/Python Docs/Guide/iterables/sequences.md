---
title: Sequences
sidebar_position: 1
---

Sequences are a fundamental concept in Python. They represent ordered collections of items that you can access by position. Understanding sequences helps you work effectively with lists, tuples, strings, and other ordered data structures.

## What are sequences?

A **sequence** is an ordered collection of items where each item has a specific position (index). Sequences share common characteristics and operations that make them predictable and easy to work with.

### Key characteristics

All sequences have these properties:
- **Ordered**: Items maintain their position
- **Indexed**: Each item has a numeric position starting from 0
- **Iterable**: You can loop through items in order
- **Length**: You can count the number of items

## Types of sequences

Python includes several built-in sequence types:

- **Lists** (`list`): Mutable, changeable collections
- **Tuples** (`tuple`): Immutable, unchangeable collections
- **Strings** (`str`): Immutable sequences of characters
- **Ranges** (`range`): Immutable sequences of numbers
- **Bytes** (`bytes`): Immutable sequences of bytes (0-255)
- **Bytearrays** (`bytearray`): Mutable sequences of bytes

Each sequence type is suited to different purposes, but they all support the same basic operations.

## Common sequence operations

### Indexing

Access individual items using square brackets and an index:

```python
text = "Python"
numbers = [1, 2, 3, 4]

text[0]      # 'P' (first character)
numbers[1]   # 2 (second item)
```

Indexes start at 0 for the first item:
- Index 0 = first item
- Index 1 = second item
- Index 2 = third item
- And so on...

### Negative indexing

Use negative numbers to count from the end:

```python
text = "Python"
numbers = [1, 2, 3, 4]

text[-1]     # 'n' (last character)
numbers[-2]  # 3 (second to last)
```

### Slicing

Get a portion of a sequence using `[start:end]`:

```python
text = "Python"
numbers = [0, 1, 2, 3, 4, 5]

text[0:3]      # 'Pyt' (from index 0 to 3, not including 3)
numbers[1:4]   # [1, 2, 3]
numbers[:3]    # [0, 1, 2] (from start)
numbers[3:]    # [3, 4, 5] (to end)
```

### Length

Get the number of items with `len()`:

```python
len("hello")        # 5
len([1, 2, 3, 4])   # 4
len((10, 20, 30))   # 3
```

### Membership testing

Check if an item exists using `in`:

```python
'a' in "Python"           # False
3 in [1, 2, 3, 4]         # True
10 in (5, 10, 15)         # True
'x' not in "Python"       # True
```

### Concatenation

Combine sequences with `+`:

```python
"hello" + " " + "world"        # 'hello world'
[1, 2] + [3, 4]                # [1, 2, 3, 4]
(1, 2) + (3, 4)                # (1, 2, 3, 4)
```

### Repetition

Repeat sequences with `*`:

```python
"hi" * 3              # 'hihihi'
[1, 2] * 2            # [1, 2, 1, 2]
(10,) * 3             # (10, 10, 10)
```

### Iteration

Loop through items with `for`:

```python
for char in "abc":
    print(char)

for num in [1, 2, 3]:
    print(num)

for item in (10, 20, 30):
    print(item)
```

## Mutability: Mutable vs Immutable

One key difference between sequence types is **mutability**—whether you can change the sequence after creation.

### Immutable sequences

Cannot be changed after creation:
- **Tuples**: `(1, 2, 3)`
- **Strings**: `"hello"`
- **Ranges**: `range(5)`
- **Bytes**: `b"hello"`

```python
text = "Python"
text[0] = 'J'  # TypeError: 'str' object does not support item assignment

numbers = (1, 2, 3)
numbers[0] = 10  # TypeError: 'tuple' object does not support item assignment
```

### Mutable sequences

Can be changed after creation:
- **Lists**: `[1, 2, 3]`
- **Bytearrays**: `bytearray(b"hello")`

```python
numbers = [1, 2, 3]
numbers[0] = 10  # Works! numbers is now [10, 2, 3]
numbers.append(4)  # Works! numbers is now [10, 2, 3, 4]
```

## Choosing the right sequence

### Use lists when:
- You need to add, remove, or modify items
- The size of the collection may change
- Order matters, but items can be rearranged

```python
shopping_list = ['apples', 'bread']
shopping_list.append('milk')
shopping_list.remove('bread')
```

### Use tuples when:
- Data shouldn't change (like coordinates, database records)
- You need a sequence as a dictionary key (tuples are hashable)
- You're returning multiple values from a function
- You want to ensure data integrity

```python
point = (3, 4)  # x, y coordinates
name_age = ("Alice", 30)
```

### Use strings when:
- You're working with text
- You don't need to modify individual characters
- You need text processing methods

```python
name = "Python"
greeting = f"Hello, {name}!"
```

### Use ranges when:
- You need a sequence of numbers
- You want memory-efficient iteration
- You're creating numeric sequences for loops

```python
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

numbers = list(range(10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Converting between sequences

You can convert between sequence types:

```python
# List to tuple
list_data = [1, 2, 3]
tuple_data = tuple(list_data)

# Tuple to list
tuple_data = (1, 2, 3)
list_data = list(tuple_data)

# String to list
text = "hello"
char_list = list(text)  # ['h', 'e', 'l', 'l', 'o']

# Range to list
numbers = list(range(5))  # [0, 1, 2, 3, 4]
```

## Common patterns

### Checking if a sequence is empty

```python
items = []

if not items:  # or: if len(items) == 0
    print("Empty sequence")
```

### Getting the last item

```python
items = [1, 2, 3, 4, 5]
last = items[-1]  # 5
```

### Reversing a sequence

```python
items = [1, 2, 3]
reversed_items = items[::-1]  # [3, 2, 1]

# Or for mutable sequences
items.reverse()  # Modifies in place: [3, 2, 1]
```

### Finding an item's position

```python
items = ['a', 'b', 'c', 'b']
index = items.index('b')  # 1 (first occurrence)
```

## Best practices

- **Choose immutability when possible**: Immutable sequences prevent accidental changes and can be used as dictionary keys
- **Use slicing carefully**: Remember that `[start:end]` includes `start` but excludes `end`
- **Be consistent with types**: Don't mix sequence types unnecessarily in a single variable
- **Consider memory**: For large sequences, ranges are more memory-efficient than lists
- **Use appropriate methods**: Some sequences have type-specific methods (like string methods or list methods)

## Summary

Sequences are ordered, indexed collections that share common operations:
- Indexing with `[]`
- Slicing with `[start:end]`
- Length with `len()`
- Membership with `in`
- Concatenation with `+`
- Repetition with `*`
- Iteration with `for`

The main differences are:
- **Mutability**: Lists and bytearrays can change; tuples, strings, ranges, and bytes cannot
- **Purpose**: Each type is optimized for specific use cases

Understanding these fundamentals helps you work effectively with all sequence types in Python. The following guides will explore specific sequence types in detail.

