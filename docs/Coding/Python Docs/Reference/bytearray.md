---
title: bytearray
---

```python
>>> dir(bytearray)
['__add__', '__alloc__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'capitalize', 'center', 'clear', 'copy', 'count', 'decode', 'endswith', 'expandtabs', 'extend', 'find', 'fromhex', 'hex', 'index', 'insert', 'isalnum', 'isalpha', 'isascii', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'pop', 'remove', 'removeprefix', 'removesuffix', 'replace', 'reverse', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```

## Dunder methods

| Dunder Method  | Operation     | Example (normal syntax)   | Example (dunder call)     |
| -------------- | ------------- | ------------------------- | ------------------------- |
| `__getitem__`  | Indexing      | `b'abc'[1]` → `98`        | `b'abc'.__getitem__(1)`   |
| `__len__`      | Length        | `len(b'abc')` → `3`       | `b'abc'.__len__()`        |
| `__contains__` | Membership    | `97 in b'abc'` → `True`   | `b'abc'.__contains__(97)` |
| `__add__`      | Concatenation | `b'hi' + b'!'` → `b'hi!'` | `b'hi'.__add__(b'!')`     |
| `__mul__`      | Repeat        | `b'hi' * 2` → `b'hihi'`   | `b'hi'.__mul__(2)`        |
