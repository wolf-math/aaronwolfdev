---
title: object
---

```python
>>> dir(object)
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
```

## Dunder methods

| Dunder Method      | Operation                | Example (normal syntax) | Example (dunder call)          |
| ------------------ | ------------------------ | ----------------------- | ------------------------------ |
| `__init__`         | Initialize               | `object()`              | `object().__init__()`          |
| `__str__`          | String representation    | `str(object())`         | `object().__str__()`           |
| `__repr__`         | Developer representation | `repr(object())`        | `object().__repr__()`          |
| `__eq__`           | Equality                 | `object() == object()`  | `object().__eq__(object())`    |
| `__hash__`         | Hash value               | `hash(object())`        | `object().__hash__()`          |
| `__getattribute__` | Attribute lookup         | `obj.attr`              | `obj.__getattribute__('attr')` |
| `__setattr__`      | Attribute set            | `obj.attr = 1`          | `obj.__setattr__('attr',1)`    |
| `__delattr__`      | Attribute delete         | `del obj.attr`          | `obj.__delattr__('attr')`      |


| Dunder Method | Operation        | Example (normal syntax) | Example (dunder call)          |
| ------------- | ---------------- | ----------------------- | ------------------------------ |
| `__get__`     | Access attribute | `obj.x`                 | `prop.__get__(obj, type(obj))` |
| `__set__`     | Assign value     | `obj.x = 5`             | `prop.__set__(obj, 5)`         |
| `__delete__`  | Delete value     | `del obj.x`             | `prop.__delete__(obj)`         |
