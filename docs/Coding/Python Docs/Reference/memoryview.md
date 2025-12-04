---
title: memoryview
---

## Properties

```python
>>> dir(memoryview)
['__class__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__enter__', '__eq__', '__exit__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'c_contiguous', 'cast', 'contiguous', 'f_contiguous', 'format', 'hex', 'itemsize', 'nbytes', 'ndim', 'obj', 'readonly', 'release', 'shape', 'strides', 'suboffsets', 'tobytes', 'tolist', 'toreadonly']
```

## Dunder methods

| Dunder Method           | Operation               | Example (normal syntax)         | Example (dunder call)            |
| ----------------------- | ----------------------- | ------------------------------- | -------------------------------- |
| `__getitem__`           | Index                   | `view[0]` → `104`               | `view.__getitem__(0)`            |
| `__setitem__`           | Modify data             | `view[0] = 72`                  | `view.__setitem__(0, 72)`        |
| `__len__`               | Length                  | `len(view)` → `5`               | `view.__len__()`                 |
| `__iter__`              | Iterate                 | `for b in view`                 | `view.__iter__()`                |
| `__eq__`                | Compare                 | `view == memoryview(b'hello')`  | `view.__eq__(other)`             |
| `__enter__`, `__exit__` | Context manager support | `with memoryview(b'abc') as m:` | `m.__enter__()` / `m.__exit__()` |
