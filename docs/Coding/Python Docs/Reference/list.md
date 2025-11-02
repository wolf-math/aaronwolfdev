---
title: list
sidebar_position: 6
---

```python
>>> dir(list)
['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Definition

A `list` is a collection of items defined with square brackets `[]`. These items are stored location within the list starting at index `0`. Items within a list can be modified, added, or removed, and can contain multiple types, including other lists. Unlike many other programming languages, a list can contain many different types: `['apple', 2, True, 'string cheese']`.

## Using lists

### Instantiation

A list can be instantiated using the _literal_ syntax or with the `list` constructor:

```python
>>> my_list = ['apple', 2, True, 'string cheese']

>>> my_list = list(['apple', 2, True, 'string cheese'])
```

The most common way is to create it using the literal syntax.

### Accessing elements

List elements are accessed by their index. Indeces start at `0`. A negative index accesses the list from the end of the list.

```python
>>> my_list = ['apple', 2, True, 'string cheese']

>>> my_list[0]
'apple'

>>> my_list[1]
2

>>> my_list[3]
'string cheese'

>>> my_list[-1]
'string cheese'

>>> my_list[-2]
True
```

### Slicing

Lists can be sliced using `[start:end]`, returning items from `start` up to but not including `end`.
Omitting `start` begins the slice at the first element, and omitting `end` extends it to the last element.

```python
>>> my_list[0:3]
['apple', 2, True]

>>> my_list[0:4]
['apple', 2, True, 'string cheese']

>>> my_list[1:-1] # same as [1:3]
[2, True]

>>> my_list[1:3]
[2, True]

>>> my_list[1:]
[2, True, 'string cheese']

>>> my_list[:2]
['apple', 2]
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


---

## `list` methods

### `append`

Modifies the original list by adding the specified element to the end. 

```python
>>> my_list = [1, 2, 3]

>>> my_list.append(4)

>>> print(my_list)
[1, 2, 3, 4]
```

---

### `clear`

Modifies the original list by empyting it of all elements.

---

### `copy`

Returns a copy (or clone) of a list.


```python
>>> my_list
['string cheese', 'cheddar', 2, 'apple']

>>> my_other = my_list.copy()

>>> my_other
['string cheese', 'cheddar', 2, 'apple']

>>> my_other[1]= 'brie'

>>> my_other
['string cheese', 'brie', 2, 'apple']

>>> my_list
['string cheese', 'cheddar', 2, 'apple']
```

:::note
altering making a copy of a list like this:

```python
my_other = my_list
```

will only create another variable that referrs to the same list. In such a scenario altering `my_list` would also alter `my_other`.
:::

---

### `count`

Returns the number of occurances of an element within a list.

```python
>>> things = [1, 2, 3, 2, 5, 3, 4]

>>> things.count(4)
1

>>> things.count(2)
2

>>> things.count(3)
2

>>> things.count(10)
0
```

---

### `extend`


---

### `index`


---

### `insert`


---

### `pop`


---

### `remove`


---

### `reverse`

Returns the gien list in reverse order.


---

### `sort`


---