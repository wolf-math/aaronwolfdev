---
title: frozenset
---

```python
>>> dir(frozenset)
['__and__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__rand__', '__reduce__', '__reduce_ex__', '__repr__', '__ror__', '__rsub__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__xor__', 'copy', 'difference', 'intersection', 'isdisjoint', 'issubset', 'issuperset', 'symmetric_difference', 'union']
```


| Dunder Method  | Operation            | Example (normal syntax) | Example (dunder call) |               |
| -------------- | -------------------- | ----------------------- | --------------------- | ------------- |
| `__contains__` | Membership           | `2 in a`                | `a.__contains__(2)`   |               |
| `__len__`      | Length               | `len(a)`                | `a.__len__()`         |               |
| `__iter__`     | Iterate              | `for x in a`            | `a.__iter__()`        |               |
| `__and__`      | Intersection         | `a & b`                 | `a.__and__(b)`        |               |
| `__or__`       | Union                | `a                      | b`                    | `a.__or__(b)` |
| `__sub__`      | Difference           | `a - b`                 | `a.__sub__(b)`        |               |
| `__xor__`      | Symmetric difference | `a ^ b`                 | `a.__xor__(b)`        |               |
| `__eq__`       | Equality             | `a == b`                | `a.__eq__(b)`         |               |
| `__hash__`     | Hash                 | `hash(a)`               | `a.__hash__()`        |               |
