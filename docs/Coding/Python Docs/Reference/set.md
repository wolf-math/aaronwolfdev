---
title: set
---

## Properties

```python
>>> dir(set)
['__and__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__iand__', '__init__', '__init_subclass__', '__ior__', '__isub__', '__iter__', '__ixor__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__rand__', '__reduce__', '__reduce_ex__', '__repr__', '__ror__', '__rsub__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__xor__', 'add', 'clear', 'copy', 'difference', 'difference_update', 'discard', 'intersection', 'intersection_update', 'isdisjoint', 'issubset', 'issuperset', 'pop', 'remove', 'symmetric_difference', 'symmetric_difference_update', 'union', 'update']
```

## Definition

A set is an unordered collection of unique, hashable elements. Sets are used when you need to eliminate duplicates, test membership efficiently, or perform mathematical set operations such as union, intersection, and difference.

## Using sets

Sets are instantiated using curly braces `{}`. However, unlike [dictionaries](./dict.md), they do not use key value pairs, and thus do not have a colon `:`. 

```python
>>> my_set = {1, 2, 3}
```

### Adding and removing from a set

```python
>>> s = {1, 2}
>>> s.add(3)
>>> s
{1, 2, 3}

>>> s.remove(2)
>>> s
{1, 3}
```

### Unique elements

A set can only contain unique elements. This means that no value will ever be doubled. 

```python
>>> s = {1, 2, 2, 3}
>>> s
{1, 2, 3}

>>> s.add(3)
>>> s
{1, 2, 3}
```

### Operations with sets

```python
>>> s = {1, 2, 3}
>>> t = {3, 4, 5}

>>> s | t     # union
{1, 2, 3, 4, 5}

>>> s & t     # intersection
{3}

>>> s - t     # difference
{1, 2}

>>> s ^ t     # symmetric difference
{1, 2, 4, 5}
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

---

## set methods

### `add`

Adds an element to the set. No change is made if the element already exists in the set.

```python
>>> s = {1, 2, 2, 3}

>>> s.add(3)

>>> s
{1, 2, 3}
```

---

### `clear`

Removes all elements from the set.

```python
>>> my_set = {1,2,3,4}

>>> print(my_set)
{1, 2, 3, 4}

>>> my_set.clear()

>>> print(my_set)
set()
```

---

### `copy`


---

### `difference`


---

### `difference_update`


---

### `discard`


---

### `intersection`


---

### `intersection_update`


---

### `isdisjoint`


---

### `issubset`


---

### `issuperset`


---

### `pop`


---

### `remove`


---

### `symmetric_difference`


---

### `symmetric_difference_update`


---

### `union`


---

### `update'`