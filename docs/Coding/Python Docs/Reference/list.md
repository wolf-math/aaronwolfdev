---
title: list
# sidebar_position: 4
---

```python
>>> dir(list)
['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```


## Dunder methods

| Dunder Method  | Operation         | Example (normal syntax)       | Example (dunder call)               |
| -------------- | ----------------- | ----------------------------- | ----------------------------------- |
| `__getitem__`  | Indexing          | `[1,2,3][0]` → `1`            | `[1,2,3].__getitem__(0)`            |
| `__setitem__`  | Item assignment   | `nums[1] = 9`                 | `nums.__setitem__(1, 9)`            |
| `__delitem__`  | Delete item       | `del nums[1]`                 | `nums.__delitem__(1)`               |
| `__len__`      | Length            | `len(nums)`                   | `nums.__len__()`                    |
| `__contains__` | Membership        | `2 in [1,2,3]` → `True`       | `[1,2,3].__contains__(2)`           |
| `__add__`      | Concatenate       | `[1,2] + [3,4]` → `[1,2,3,4]` | `[1,2].__add__([3,4])`              |
| `__mul__`      | Repeat            | `[1,2]*2` → `[1,2,1,2]`       | `[1,2].__mul__(2)`                  |
| `__iter__`     | Iteration         | `for x in [1,2,3]`            | `it = [1,2,3].__iter__(); next(it)` |
| `__reversed__` | Reverse iteration | `reversed([1,2,3])`           | `[1,2,3].__reversed__()`            |
| `__eq__`       | Equality          | `[1,2]==[1,2]` → `True`       | `[1,2].__eq__([1,2])`               |
