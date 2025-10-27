---
title: dict
# sidebar_position: 5
---

```python
>>> dir(dict)
['__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__ior__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__ror__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']
```

## Dunder methods

| Dunder Method  | Operation     | Example (normal syntax) | Example (dunder call)         |
| -------------- | ------------- | ----------------------- | ----------------------------- |
| `__getitem__`  | Access value  | `d["a"]` → `1`          | `d.__getitem__("a")`          |
| `__setitem__`  | Set key/value | `d["b"] = 2`            | `d.__setitem__("b", 2)`       |
| `__delitem__`  | Delete key    | `del d["a"]`            | `d.__delitem__("a")`          |
| `__contains__` | Membership    | `"a" in d`              | `d.__contains__("a")`         |
| `__len__`      | Length        | `len(d)`                | `d.__len__()`                 |
| `__iter__`     | Iterate keys  | `for k in d`            | `it = d.__iter__(); next(it)` |
| `__eq__`       | Equality      | `{"a":1} == {"a":1}`    | `{"a":1}.__eq__({"a":1})`     |
