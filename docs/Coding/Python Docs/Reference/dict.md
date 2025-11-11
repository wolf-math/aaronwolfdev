---
title: dict
sidebar_position: 7
---

```python
>>> dir(dict)
['__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__ior__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__ror__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']
```

## Definition

A dictionary is a collection of _key : value_ pairs grouped by curly braces `{}`. Unlike a [list](./list.md), dictionaries are **unordered** and values are accessed by their **key**. Pairs within a dictionary can be modified, added, or removed, and can contain multiple types, including other dictionaries and lists. 

## Using dictionaries

### Instantiation

Dictionaries can be instantiated using the  _literal_ syntax, with the `dictionary` constructor, or with keyword arguments:

```python
# literal syntax
my_dict = { 'fruit': 'apple', 'count': 2, 'is_good': True, 'snack': 'string cheese' }

# constructor
my_dict = dict([('fruit', 'apple'), ('count', 2), ('is_good', True), ('snack', 'string cheese')])

# keyword arguments
my_dict = dict(fruit='apple', count=2, is_good=True, snack='string cheese')
```

The most common and straighforward way to do this is with the _literal syntax_.

### Accessing elements

Elemets are accessed by a value's key using _bracket notation_.  


```python
>>> my_dict = { 'fruit': 'apple', 'count': 2, 'is_good': True, 'snack': 'string cheese' }

>>> my_dict['count']
2
```

Variables can also be passed into the bracket notation to obtain a value.

```python
>>> my_dict = { 'fruit': 'apple', 'count': 2, 'is_good': True, 'snack': 'string cheese' }

>>> my_var = 'snack'

>>> my_dict[my_var]
'string cheese'
```

:::note
Dot notation is not supported in Python
:::

### Modifying elements



### Adding elements

### Removing elements

### Membership testing

The membership of a _key_ within a dictionary can be tested with the `in` keyword. Returns `True` if the element is in the dictionary and `False` if the element is _not_ in the dictionary.

```python
>>> my_dict = { 'fruit': 'apple', 'count': 2, 'is_good': True, 'snack': 'string cheese' }

>>> 'is_good' in my_dict
True

>>> 'string cheese' in my_dict
False
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


---

## Dictionary methods

### clear



### copy


### fromkeys


### get


### items


### keys


### pop


### popitem


### setdefault


### update


### values
