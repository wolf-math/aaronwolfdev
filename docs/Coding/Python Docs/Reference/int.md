---
title: int
sidebar_position: 2
---

## Definition

An `int` (integer) is a positive or negative whole number. If a number has a trailing decimal `.` it is a [`float`](./float.md), even if there are no digits trailing said number.

```python
>>> type(42)
<class 'int'>

>>> type(42.)
<class 'float'>

>>> type(42.0)
<class 'float'>
```

```python
>>> dir(int)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'as_integer_ratio', 'bit_count', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```


## Basic operations on integers




## Dunder methods

| Dunder Method  | Operation         | Example (normal syntax)   | Example (dunder call) |
| -------------- | ----------------- | ------------------------- | --------------------- |
| `__add__`      | Addition          | `3 + 4` → `7`             | `(3).__add__(4)`      |
| `__sub__`      | Subtraction       | `7 - 2` → `5`             | `(7).__sub__(2)`      |
| `__mul__`      | Multiplication    | `3 * 2` → `6`             | `(3).__mul__(2)`      |
| `__truediv__`  | Division          | `7 / 2` → `3.5`           | `(7).__truediv__(2)`  |
| `__floordiv__` | Floor division    | `7 // 2` → `3`            | `(7).__floordiv__(2)` |
| `__mod__`      | Modulo            | `7 % 2` → `1`             | `(7).__mod__(2)`      |
| `__pow__`      | Exponentiation    | `2 ** 3` → `8`            | `(2).__pow__(3)`      |
| `__neg__`      | Negation          | `-5` → `-5`               | `(5).__neg__()`       |
| `__pos__`      | Unary plus        | `+5` → `5`                | `(5).__pos__()`       |
| `__abs__`      | Absolute value    | `abs(-3)` → `3`           | `(-3).__abs__()`      |
| `__eq__`       | Equality          | `3 == 3` → `True`         | `(3).__eq__(3)`       |
| `__lt__`       | Less than         | `2 < 5` → `True`          | `(2).__lt__(5)`       |
| `__int__`      | Convert to int    | `int(3.0)` → `3`          | `(3.0).__int__()`     |
| `__float__`    | Convert to float  | `float(3)` → `3.0`        | `(3).__float__()`     |
| `__hash__`     | Hash value        | `hash(3)`                 | `(3).__hash__()`      |
| `__index__`    | Used for indexing | `[10,20,30][True]` → `20` | `(1).__index__()`     |




