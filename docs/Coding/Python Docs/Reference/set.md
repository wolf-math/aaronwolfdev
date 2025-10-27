---
title: set
---

```python
>>> dir(set)
['__and__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__iand__', '__init__', '__init_subclass__', '__ior__', '__isub__', '__iter__', '__ixor__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__rand__', '__reduce__', '__reduce_ex__', '__repr__', '__ror__', '__rsub__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__xor__', 'add', 'clear', 'copy', 'difference', 'difference_update', 'discard', 'intersection', 'intersection_update', 'isdisjoint', 'issubset', 'issuperset', 'pop', 'remove', 'symmetric_difference', 'symmetric_difference_update', 'union', 'update']
```

## Dunder methods

| Dunder Method  | Operation            | Example (normal syntax)       | Example (dunder call)      |
| --- | --- | --- | --- | 
| `__contains__` | Membership           | `2 in {1,2,3}`                | `{1,2,3}.__contains__(2)` |
| `__len__`      | Length               | `len({1,2,3})`                | `{1,2,3}.__len__()`        |
| `__iter__`     | Iteration            | `for x in {1,2,3}`            | `{1,2,3}.__iter__()`       |
| `__and__`      | Intersection         | `{1,2,3} & {2,3,4}` → `{2,3}` | `{1,2,3}.__and__({2,3,4})` |
| `__or__`       | Union                | `{1,2} \| {2,3}`→`{1,2,3}`    | `{1,2}.__or__({2,3})` |
| `__sub__`      | Difference           | `{1,2,3} - {2}` → `{1,3}`     | `{1,2,3}.__sub__({2})`     |
| `__xor__`      | Symmetric difference | `{1,2,3} ^ {2,4}` → `{1,3,4}` | `{1,2,3}.__xor__({2,4})`   |
| `__eq__`       | Equality             | `{1,2} == {2,1}`              | `{1,2}.__eq__({2,1})`      |
