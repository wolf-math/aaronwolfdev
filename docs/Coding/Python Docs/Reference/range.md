---
title: range
---

```python
>>> dir(range)
['__bool__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'count', 'index', 'start', 'step', 'stop']
```

## Dunder methods

| Dunder Method  | Operation    | Example (normal syntax)  | Example (dunder call)         |
| -------------- | ------------ | ------------------------ | ----------------------------- |
| `__len__`      | Length       | `len(range(5))` → `5`    | `range(5).__len__()`          |
| `__getitem__`  | Index access | `range(5)[2]` → `2`      | `range(5).__getitem__(2)`     |
| `__contains__` | Membership   | `3 in range(5)` → `True` | `range(5).__contains__(3)`    |
| `__iter__`     | Iteration    | `for n in range(3)`      | `range(3).__iter__()`         |
| `__eq__`       | Equality     | `range(3) == range(0,3)` | `range(3).__eq__(range(0,3))` |

