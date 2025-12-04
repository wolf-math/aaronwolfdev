---
title: type
---

## Properties

```python
>>> dir(type)
['__abstractmethods__', '__annotations__', '__base__', '__bases__', '__basicsize__', '__call__', '__class__', '__delattr__', '__dict__', '__dictoffset__', '__dir__', '__doc__', '__eq__', '__flags__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__instancecheck__', '__itemsize__', '__le__', '__lt__', '__module__', '__mro__', '__name__', '__ne__', '__new__', '__or__', '__prepare__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__ror__', '__setattr__', '__sizeof__', '__str__', '__subclasscheck__', '__subclasses__', '__subclasshook__', '__text_signature__', '__weakrefoffset__', 'mro']
```

## Dunder methods

| Dunder Method       | Operation              | Example (normal syntax)    | Example (dunder call)         |
| ------------------- | ---------------------- | -------------------------- | ----------------------------- |
| `__call__`          | Create instance        | `int('5')` → `5`           | `int.__call__('5')`           |
| `__instancecheck__` | Used by `isinstance()` | `isinstance(3, int)`       | `int.__instancecheck__(3)`    |
| `__subclasscheck__` | Used by `issubclass()` | `issubclass(bool, int)`    | `int.__subclasscheck__(bool)` |
| `__prepare__`       | Class namespace setup  | `type.__prepare__('X',())` | *(rarely used manually)*      |
