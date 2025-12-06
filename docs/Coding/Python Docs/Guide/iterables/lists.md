---
title: Lists
sidebar_position: 1
---

Lists are one of Python's most versatile data structures. They let you store and organize multiple items in a single variable, making it easy to work with collections of data.

## What are lists?

A list is a collection of items enclosed in square brackets `[]`. Lists are:
- **Ordered**: Items have a specific position (index)
- **Mutable**: You can add, remove, or change items after creation
- **Flexible**: Can contain items of different types
- **Indexed**: Each item has a position starting from 0

```python
fruits = ['apple', 'banana', 'orange']
numbers = [1, 2, 3, 4, 5]
mixed = ['apple', 2, True, 3.14]  # Can mix types!
```

## Creating lists

### Empty lists

Start with an empty list and add items later:

```python
shopping_list = []
```

### Lists with items

Put items inside square brackets, separated by commas:

```python
colors = ['red', 'green', 'blue']
scores = [95, 87, 92, 78]
```

### Using the list() constructor

You can also create lists using the `list()` function:

```python
numbers = list([1, 2, 3])
empty = list()  # Creates an empty list
```

:::tip
The literal syntax `[]` is more common and Pythonic than `list()`.
:::

### Lists from other sequences

Convert strings, tuples, or other sequences into lists:

```python
word_list = list("hello")  # ['h', 'e', 'l', 'l', 'o']
```

## Accessing elements

### Indexing

Access individual items using their **index** (position). Indexes start at 0:

```python
fruits = ['apple', 'banana', 'orange']

fruits[0]   # 'apple' (first item)
fruits[1]   # 'banana' (second item)
fruits[2]   # 'orange' (third item)
```

### Negative indexing

Use negative numbers to count from the end:

```python
fruits = ['apple', 'banana', 'orange']

fruits[-1]  # 'orange' (last item)
fruits[-2]  # 'banana' (second to last)
fruits[-3]  # 'apple' (third from last)
```

### Index errors

Trying to access an index that doesn't exist raises an `IndexError`:

```python
fruits = ['apple', 'banana']
fruits[5]  # IndexError: list index out of range
```

## Modifying lists

Lists are **mutable**, meaning you can change them after creation.

### Changing items

Assign a new value to an index:

```python
fruits = ['apple', 'banana', 'orange']
fruits[1] = 'grape'
print(fruits)  # ['apple', 'grape', 'orange']
```

### Adding items

#### append()

Add a single item to the end:

```python
fruits = ['apple', 'banana']
fruits.append('orange')
print(fruits)  # ['apple', 'banana', 'orange']
```

#### insert()

Insert an item at a specific position:

```python
fruits = ['apple', 'banana']
fruits.insert(1, 'grape')  # Insert 'grape' at index 1
print(fruits)  # ['apple', 'grape', 'banana']
```

#### extend()

Add multiple items from another list:

```python
fruits = ['apple', 'banana']
more_fruits = ['orange', 'grape']
fruits.extend(more_fruits)
print(fruits)  # ['apple', 'banana', 'orange', 'grape']
```

You can also use `+=`:

```python
fruits = ['apple', 'banana']
fruits += ['orange', 'grape']
print(fruits)  # ['apple', 'banana', 'orange', 'grape']
```

### Removing items

#### remove()

Remove the first occurrence of a value:

```python
fruits = ['apple', 'banana', 'apple']
fruits.remove('apple')
print(fruits)  # ['banana', 'apple']
```

#### pop()

Remove and return an item by index (defaults to last item):

```python
fruits = ['apple', 'banana', 'orange']
last = fruits.pop()
print(last)    # 'orange'
print(fruits)   # ['apple', 'banana']

first = fruits.pop(0)
print(first)   # 'apple'
print(fruits)  # ['banana']
```

#### del statement

Delete an item by index:

```python
fruits = ['apple', 'banana', 'orange']
del fruits[1]
print(fruits)  # ['apple', 'orange']
```

#### clear()

Remove all items:

```python
fruits = ['apple', 'banana', 'orange']
fruits.clear()
print(fruits)  # []
```

## Slicing

**Slicing** lets you get a portion of a list using `[start:end]`:

```python
numbers = [0, 1, 2, 3, 4, 5]

numbers[1:4]   # [1, 2, 3] (from index 1 up to, but not including, 4)
numbers[:3]    # [0, 1, 2] (from start to index 3)
numbers[2:]    # [2, 3, 4, 5] (from index 2 to end)
numbers[:]     # [0, 1, 2, 3, 4, 5] (copy of entire list)
```

### Step slicing

Add a third number for the step:

```python
numbers = [0, 1, 2, 3, 4, 5]

numbers[::2]      # [0, 2, 4] (every 2nd item)
numbers[1::2]     # [1, 3, 5] (every 2nd item starting at 1)
numbers[::-1]     # [5, 4, 3, 2, 1, 0] (reversed)
```

### Modifying slices

You can also modify slices:

```python
numbers = [0, 1, 2, 3, 4, 5]
numbers[1:4] = [10, 20, 30]
print(numbers)  # [0, 10, 20, 30, 4, 5]
```

## Common operations

### Length

Get the number of items with `len()`:

```python
fruits = ['apple', 'banana', 'orange']
print(len(fruits))  # 3
```

### Membership testing

Check if an item exists with `in`:

```python
fruits = ['apple', 'banana', 'orange']

'apple' in fruits   # True
'grape' in fruits   # False
'apple' not in fruits  # False
```

### Concatenation

Combine lists with `+`:

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]
```

### Repetition

Repeat a list with `*`:

```python
numbers = [1, 2, 3]
repeated = numbers * 3
print(repeated)  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

### Iteration

Loop through items with `for`:

```python
fruits = ['apple', 'banana', 'orange']

for fruit in fruits:
    print(fruit)
```

Get both index and value with `enumerate()`:

```python
fruits = ['apple', 'banana', 'orange']

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
```

## Useful list methods

### count()

Count how many times an item appears:

```python
numbers = [1, 2, 2, 3, 2, 4]
print(numbers.count(2))  # 3
```

### index()

Find the index of the first occurrence:

```python
fruits = ['apple', 'banana', 'orange']
print(fruits.index('banana'))  # 1
```

### sort()

Sort the list in place (modifies the original):

```python
numbers = [3, 1, 4, 1, 5, 9, 2]
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# Sort in reverse
numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 2, 1, 1]
```

### reverse()

Reverse the list in place:

```python
numbers = [1, 2, 3, 4]
numbers.reverse()
print(numbers)  # [4, 3, 2, 1]
```

### copy()

Create a shallow copy:

```python
original = [1, 2, 3]
copied = original.copy()
copied.append(4)
print(original)  # [1, 2, 3] (unchanged)
print(copied)    # [1, 2, 3, 4]
```

:::warning
Assigning a list to another variable doesn't create a copy—both variables reference the same list:

```python
original = [1, 2, 3]
reference = original  # Not a copy!
reference.append(4)
print(original)  # [1, 2, 3, 4] (also changed!)
```

Use `.copy()` or `[:]` to create a copy.
:::

## List comprehensions

**List comprehensions** provide a concise way to create lists:

```python
# Create a list of squares
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]
```

This is equivalent to:

```python
squares = []
for x in range(5):
    squares.append(x**2)
```

## Nested lists

Lists can contain other lists:

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[0][1])  # 2 (first row, second column)
```

## Common patterns

### Building a list incrementally

```python
results = []
for i in range(5):
    results.append(i * 2)
print(results)  # [0, 2, 4, 6, 8]
```

### Filtering items

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = [n for n in numbers if n % 2 == 0]
print(evens)  # [2, 4, 6]
```

### Transforming items

```python
words = ['hello', 'world', 'python']
uppercase = [w.upper() for w in words]
print(uppercase)  # ['HELLO', 'WORLD', 'PYTHON']
```

### Finding items

```python
fruits = ['apple', 'banana', 'orange']
if 'banana' in fruits:
    index = fruits.index('banana')
    print(f"Found at index {index}")
```

## Best practices

- **Use descriptive variable names**: `shopping_list` is better than `list1`
- **Keep lists focused**: A list should contain related items
- **Prefer list comprehensions** for simple transformations
- **Be careful with mutability**: Remember that modifying a list affects all references to it
- **Use `in` for membership checks**: It's more readable than checking indices
- **Consider alternatives**: For fixed-size collections, tuples might be better; for unique items, sets might be better

## Summary

Lists are powerful tools for organizing data in Python. They're:
- Easy to create with `[]`
- Flexible and mutable
- Accessible by index
- Rich with useful methods

Practice creating, modifying, and iterating over lists to become comfortable with this fundamental data structure.

