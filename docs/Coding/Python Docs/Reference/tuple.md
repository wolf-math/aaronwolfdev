---
title: tuple
---

```python
>>> dir(tuple)
['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'count', 'index']
```

## Dunder methods

| Dunder Method  | Operation     | Example (normal syntax)     | Example (dunder call)     |
| -------------- | ------------- | --------------------------- | ------------------------- |
| `__getitem__`  | Indexing      | `(1,2,3)[0]` → `1`          | `(1,2,3).__getitem__(0)`  |
| `__len__`      | Length        | `len((1,2,3))`              | `(1,2,3).__len__()`       |
| `__contains__` | Membership    | `2 in (1,2,3)`              | `(1,2,3).__contains__(2)` |
| `__add__`      | Concatenation | `(1,2)+(3,4)` → `(1,2,3,4)` | `(1,2).__add__((3,4))`    |
| `__mul__`      | Repeat        | `(1,2)*2` → `(1,2,1,2)`     | `(1,2).__mul__(2)`        |
| `__eq__`       | Equality      | `(1,2)==(1,2)`              | `(1,2).__eq__((1,2))`     |
| `__iter__`     | Iteration     | `for x in (1,2,3)`          | `(1,2,3).__iter__()`      |
