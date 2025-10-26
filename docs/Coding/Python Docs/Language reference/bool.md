---
title: bool
sidebar_position: 3
---

```python
>>> dir(bool)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'as_integer_ratio', 'bit_count', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```

## Operations


## Dunder methods
| Dunder Method | Operation | Example (normal syntax)   | Example (dunder call) |
| --- | --- | --- | --- | 
| `__bool__`    | Truth value | `bool(True)` → `True`     | `True.__bool__()`     |
| `__and__`     | Logical AND / Bitwise `&` | `True & False` → `False`  | `True.__and__(False)` |
| `__or__` | Logical OR / Bitwise `\|` | `True \| False` → `True` | `True.__or__(False)` |
| `__xor__`     | Logical XOR / Bitwise `^` | `True ^ False` → `True`   | `True.__xor__(False)` |
| `__invert__`  | Bitwise NOT | `~True` → `-2`     | `True.__invert__()`   |
| `__eq__`      | Equality comparison       | `True == False` → `False` | `True.__eq__(False)`  |
| `__ne__`      | Inequality comparison     | `True != False` → `True`  | `True.__ne__(False)`  |
| `__lt__`      | Less than   | `False < True` → `True`   | `False.__lt__(True)`  |
| `__le__`      | Less than or equal | `True <= True` → `True`   | `True.__le__(True)`   |
| `__gt__`      | Greater than       | `True > False` → `True`   | `True.__gt__(False)`  |
| `__ge__`      | Greater than or equal     | `True >= False` → `True`  | `True.__ge__(False)`  |
| `__add__`     | Addition    | `True + True` → `2`       | `True.__add__(True)`  |
| `__sub__`     | Subtraction | `True - False` → `1`      | `True.__sub__(False)` |
| `__mul__`     | Multiplication     | `True * 5` → `5`   | `True.__mul__(5)`     |
| `__int__`     | Convert to integer | `int(True)` → `1`  | `True.__int__()`      |
| `__float__`   | Convert to float   | `float(False)` → `0.0`    | `False.__float__()`   |
| `__index__`   | Integer index value       | `[10, 20][True]` → `20`   | `True.__index__()`    |
| `__str__`     | String conversion  | `str(True)` → `'True'`    | `True.__str__()`      |
| `__repr__`    | Representation     | `repr(True)` → `'True'`   | `True.__repr__()`     |
| `__hash__`    | Hash value  | `hash(True)` → `1` | `True.__hash__()`     |
