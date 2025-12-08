---
title: Ranges
sidebar_position: 4
---

Ranges represent an immutable sequence of evenly spaced integers. They're memory-efficient and commonly used for loops, generating sequences, and indexing. Unlike lists, ranges don't store all values in memory—they generate them on demand.

## What are ranges?

A **range** is an immutable sequence of integers that follows a pattern defined by start, stop, and step values. Ranges are:
- **Immutable**: Cannot be changed after creation
- **Memory efficient**: Don't store all values in memory
- **Lazy**: Generate values as needed
- **Indexed**: Can access values by position

```python
# Range from 0 to 4 (not including 5)
numbers = range(5)  # 0, 1, 2, 3, 4
```

## Creating ranges

### Basic syntax

Ranges use the `range()` function with three possible forms:

```python
range(stop)           # Start at 0, go up to (but not including) stop
range(start, stop)    # Start at start, go up to (but not including) stop
range(start, stop, step)  # Start at start, step by step, up to (but not including) stop
```

### range(stop)

Start at 0 and count up to (but not including) the stop value:

```python
# Range from 0 to 4
r = range(5)
for num in r:
    print(num)  # 0, 1, 2, 3, 4
```

### range(start, stop)

Specify both start and stop values:

```python
# Range from 2 to 4
r = range(2, 5)
for num in r:
    print(num)  # 2, 3, 4
```

### range(start, stop, step)

Add a step value to control the increment:

```python
# Range from 0 to 8, step by 2
r = range(0, 10, 2)
for num in r:
    print(num)  # 0, 2, 4, 6, 8

# Negative step (count backwards)
r = range(10, 0, -2)
for num in r:
    print(num)  # 10, 8, 6, 4, 2
```

## Common use cases

### for loops

Ranges are most commonly used in `for` loops:

```python
# Count from 0 to 9
for i in range(10):
    print(i)

# Count from 1 to 10
for i in range(1, 11):
    print(i)

# Count by 2s
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
```

### Creating lists of numbers

Convert ranges to lists when you need all values:

```python
numbers = list(range(5))  # [0, 1, 2, 3, 4]
evens = list(range(0, 10, 2))  # [0, 2, 4, 6, 8]
backwards = list(range(10, 0, -1))  # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

### Indexing sequences

Use ranges to iterate over sequence indices:

```python
fruits = ['apple', 'banana', 'orange']

# Loop through indices
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# Output:
# 0: apple
# 1: banana
# 2: orange
```

:::tip
For indexing, `enumerate()` is often more Pythonic than `range(len())`:

```python
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```
:::

## Accessing range values

### Indexing

Access individual values by index:

```python
r = range(0, 10, 2)
print(r[0])   # 0
print(r[1])   # 2
print(r[2])   # 4
print(r[-1])  # 8 (last value)
```

### Slicing

Slice ranges to create new ranges:

```python
r = range(0, 10, 2)
sliced = r[1:3]  # range(2, 6, 2)

print(list(sliced))  # [2, 4]
```

### Membership testing

Check if a value is in the range:

```python
r = range(0, 10, 2)
print(4 in r)   # True
print(5 in r)   # False
print(8 in r)   # True
```

:::tip
Membership testing with ranges is efficient because it's computed mathematically, not by iterating.
:::

### Length

Get the number of values in a range:

```python
print(len(range(10)))     # 10
print(len(range(2, 10)))  # 8
print(len(range(0, 10, 2)))  # 5
```

## Range attributes

Access the start, stop, and step values:

```python
r = range(3, 9, 2)
print(r.start)  # 3
print(r.stop)   # 9
print(r.step)   # 2
```

## Converting ranges

### To lists

Convert ranges to lists when you need all values at once:

```python
numbers = list(range(5))  # [0, 1, 2, 3, 4]
```

### To tuples

Convert ranges to tuples:

```python
numbers = tuple(range(5))  # (0, 1, 2, 3, 4)
```

### From lists

Ranges can be created from sequences, but it's more common to use the values:

```python
# Extract values to create a range
values = [0, 1, 2, 3, 4]
r = range(len(values))  # Common pattern
```

## Common patterns

### Counting down

Use negative step to count backwards:

```python
# Countdown from 10 to 1
for i in range(10, 0, -1):
    print(i)

# Countdown from 9 to 0
for i in range(9, -1, -1):
    print(i)
```

### Repeating a task N times

```python
# Repeat 5 times
for _ in range(5):
    print("Hello!")
```

### Iterating through indices

```python
items = ['a', 'b', 'c']
for i in range(len(items)):
    print(f"Index {i}: {items[i]}")
```

### Creating sequences

```python
# Even numbers from 0 to 18
evens = list(range(0, 20, 2))  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Multiples of 5
multiples = list(range(0, 50, 5))  # [0, 5, 10, 15, 20, 25, 30, 35, 40, 45]
```

### Reversing with range

```python
items = ['a', 'b', 'c', 'd']
# Iterate backwards through indices
for i in range(len(items) - 1, -1, -1):
    print(items[i])  # d, c, b, a
```

## Memory efficiency

Ranges are memory-efficient because they don't store all values:

```python
# This uses very little memory
large_range = range(1_000_000_000)
print(len(large_range))  # 1000000000 (works instantly!)

# Converting to a list would use gigabytes of memory
# large_list = list(large_range)  # Would take a long time and lots of memory
```

This makes ranges perfect for loops over large sequences:

```python
# Efficient: doesn't create a large list
for i in range(1_000_000):
    # Do something
    pass
```

## Range methods

### count()

Count how many times a value appears (always 0 or 1 for ranges):

```python
r = range(0, 10, 2)
print(r.count(4))  # 1
print(r.count(5))  # 0
```

### index()

Find the index of a value:

```python
r = range(0, 10, 2)
print(r.index(4))  # 2

r.index(5)  # ValueError: 5 is not in range
```

## Limitations

Ranges only work with integers:

```python
# Valid
range(10)
range(0, 10, 2)

# Invalid (floats not allowed)
range(0.0, 10.0, 0.5)  # TypeError
```

If you need non-integer sequences, use other approaches:

```python
# For floating-point sequences, use a loop
import math
for i in range(10):
    value = i * 0.5
    print(value)
```

## Best practices

- **Use ranges for loops**: More memory-efficient than creating lists
- **Use `enumerate()` instead of `range(len())`**: More Pythonic when you need both index and value
- **Prefer ranges for large sequences**: They're much more memory-efficient than lists
- **Remember ranges are exclusive**: The stop value is not included
- **Use negative steps for counting backwards**: More readable than complex calculations

```python
# Good: Using range for counting
for i in range(5):
    print(i)

# Better: Using enumerate when you need the value too
items = ['a', 'b', 'c']
for i, item in enumerate(items):
    print(f"{i}: {item}")

# Avoid: Creating unnecessary lists
numbers = list(range(5))  # Only if you actually need the list!
for num in numbers:
    print(num)
```

## Summary

Ranges are efficient sequences of integers:
- Memory-efficient (don't store all values)
- Perfect for loops and counting
- Support indexing, slicing, and membership testing
- Immutable and fast

Use ranges when you need sequences of integers for loops, counting, or generating numeric patterns. They're an essential tool for iteration and sequence generation in Python.

