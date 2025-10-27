---
title: slice
---

```python
>>> dir(slice)
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'indices', 'start', 'step', 'stop']
```

## Dunder methods

| Dunder Method  | Operation              | Example (normal syntax)                   | Example (dunder call)           |
| -------------- | ---------------------- | ----------------------------------------- | ------------------------------- |
| `__reduce__`   | Pickle support         | `import pickle; pickle.dumps(slice(1,5))` | `slice(1,5).__reduce__()`       |
| `__repr__`     | Representation         | `repr(slice(1,5,2))` → `'slice(1, 5, 2)'` | `slice(1,5,2).__repr__()`       |
| `__eq__`       | Equality               | `slice(1,5)==slice(1,5)` → `True`         | `slice(1,5).__eq__(slice(1,5))` |
| *(attributes)* | Access start/stop/step | `s.start`, `s.stop`, `s.step`             | —                               |
