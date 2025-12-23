---
title: Types
sidebar_position: 2

---

## What is a type?

A **type** describes what a value is and which operations make sense for it. Python is **dynamically typed**, so you don't declare types up front when you create a variable, Python tracks them at runtime.

```python
x = 3          # int
y = "hello"    # str
z = [1, 2, 3]  # list
```

Use `type(value)` to see a value's type:

```python
>>> type(3)
<class 'int'>
>>> type("hi")
<class 'str'>
```

## Why this matters

Understanding types is fundamental to Python programming. Every value has a type, and the type determines what you can do with that value. You can add numbers, concatenate strings, and append items to lists—but trying to add a string to a number or call list methods on a number will cause errors. Types help you write correct code by defining what operations are valid for each kind of data. As you learn Python, you'll constantly work with different types, so getting comfortable with the core types early will make everything else easier.

## Core built-in types you'll meet first

- Numbers: `int`, `float`, `complex`
- Text: `str`
- Booleans: `bool`
- Empty/“no value”: `None` (the single instance of type `NoneType`)
- Collections:
  - `list` (mutable sequence)
  - `tuple` (immutable sequence)
  - `dict` (key/value mapping)
  - `set` / `frozenset` (unique unordered elements)

### Numbers

```python
>>> 42           # int (whole numbers)
>>> 3.14         # float (decimal numbers)
>>> 1 + 2j       # complex (real + imaginary)
```

### Strings (`str`)

Text is stored in strings, enclosed in quotes. Strings are **immutable**.

```python
>>> "hello"
'hello'
>>> "hi " + "there"
'hi there'
>>> "ha" * 3
'hahaha'
```

### Booleans (`bool`) and truthiness

`True` and `False` are booleans. Many values evaluate to truthy or falsy in conditions:

- Falsy: `0`, `0.0`, `''`, `[]`, `{}`, `set()`, `None`
- Everything else is truthy.

```python
>>> bool(0)
False
>>> bool("text")
True
```

### None

`None` represents “no value” or “nothing here.” It’s a singleton, which means only one instance exists in all of Python. Multiple representations of `None` all refer to the same object.

```python
result = None
if result is None:
    print("no result yet")
```

### Collections (containers)

```python
>>> [1, 2, 3]                 # list (mutable)
>>> (1, 2, 3)                 # tuple (immutable)
>>> {"a": 1, "b": 2}          # dict (mapping)
>>> {1, 2, 3}                 # set (unique items)
```

- **Mutable** (can change in place): `list`, `dict`, `set`, `bytearray`
- **Immutable** (can’t change in place): `tuple`, `str`, `bytes`, `frozenset`

### Bytes (binary data)

You’ll meet these when reading files or working with networks:

```python
>>> b"hi"             # bytes (immutable)
>>> bytearray(b"hi")  # bytearray (mutable)
```

## Checking and converting types

```python
>>> type(3) is int
True
>>> isinstance(3, (int, float))
True
```

Conversions:

```python
>>> int("5")
5
>>> float("3.14")
3.14
>>> str(42)
'42'
>>> list("abc")
['a', 'b', 'c']
```

Be careful: converting invalid input raises errors.

```python
>>> int("not a number")
Traceback (most recent call last):
  ...
ValueError: invalid literal for int() with base 10: 'not a number'
```

## Identity vs equality

- **Equality**: `==` checks if values are equivalent.
- **Identity**: `is` checks if two references point to the same object.

```python
>>> a = [1, 2, 3]
>>> b = [1, 2, 3]
>>> a == b    # same contents
True
>>> a is b    # different objects
False
```

## When to choose which type

- Use `int`/`float` for numbers, `str` for text, `bool` for flags.
- Use `list` when you need an ordered, changeable sequence.
- Use `tuple` for fixed groups of items that shouldn’t change.
- Use `dict` for key/value lookups.
- Use `set` when you need uniqueness or fast membership checks.
- Use `bytes`/`bytearray` for binary data.



