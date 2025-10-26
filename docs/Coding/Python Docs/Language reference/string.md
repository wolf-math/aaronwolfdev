---
title: string
sidebar_position: 1
---

## Definition

A string is any series of characters between a set of quotation marks- double `"` or single `'`. Strings must be terminated with the same type of quotation mark that they were started with.

```python
>>> dir(str)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'removeprefix', 'removesuffix', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```

### Basic strings

If a string does not have quotation marks it will be interpreted as a variable.

```python
"this is a string"
'this is also a string'
this is not a string
```

A multiline string can be created with 3 quotation marks (single or double).

```python
"""multi
line
string
"""
```

### Escape characters

the backslash `\` can "escape" a quotation mark. When escaped, Python will interpret the quotation mark as a character instead of the termination of the string.

```python
>>> "The cow says \"moo\""

'The cow says "moo"'
```

A new line can be created within a string with `\n`. 

```python
>>> print("This string will print\non 2 lines")
This string will print
on 2 lines
```

### Basic operations on strings

Two or more strings can be added with a `+` operator or a string can be multipled by an `integer` with a `*` operator. 

```python
>>> "hello" * 3
'hellohellohello'

>>> "hello" + "world"
"helloworld'
```

### f-strings

f-strings allow values to be interpolated into a string. They can be used with any quotation mark type. A set of curly braces contains the values to be interpolated.

```python
>>> year = 2008
>>> print(f"Python 3 was first released in {year}")

'Python 3 was first released in 2008'
```

Expressions can be executed inside of an f-string:

```python
>>> print(f"For computers, time began in the year {2000 - 30}")
"For computers, time began in the year 1970'
```

## Dunder methods

Dunder (double underscore) methods for strings are a list of operations that can be made on strings. 

| Dunder Method | Operation | Example (normal syntax) | Example (dunder call) |
| --- | --- | --- | --- |
| `__add__`| Concatenation | `"cat" + "fish"` → `'catfish'` | `"cat".__add__("fish")` |
| `__mul__`| Repetition | `"ha" * 3` → `'hahaha'` | `"ha".__mul__(3)` |
| `__contains__` | Membership test | `'a' in "cat"` → `True` | `"cat".__contains__('a')` |
| `__getitem__` | Index access | `"cat"[1]` → `'a'` | `"cat".__getitem__(1)` |
| `__len__`| Length | `len("hello")` → `5`| `"hello".__len__()` |
| `__eq__` | Equality comparison | `"dog" == "dog"` → `True` | `"dog".__eq__("dog")` |
| `__ne__` | Inequality comparison | `"dog" != "cat"` → `True` | `"dog".__ne__("cat")` |
| `__lt__` | Less than (lexicographic) | `"ant" < "bat"` → `True` | `"ant".__lt__("bat")` |
| `__le__` | Less than or equal | `"ant" <= "ant"` → `True` | `"ant".__le__("ant")` |
| `__gt__` | Greater than | `"bat" > "ant"` → `True` | `"bat".__gt__("ant")` |
| `__ge__` | Greater than or equal | `"bat" >= "bat"` → `True` | `"bat".__ge__("bat")` |
| `__str__`| String conversion | `str("hi")` → `'hi'`| `"hi".__str__()` |
| `__repr__` | Object representation | `repr("hi")` → `"'hi'"` | `"hi".__repr__()` |
| `__format__` | f-string / format syntax| `f"Word: {'hi'}"` → `'Word: hi'` | `"hi".__format__('')` |
| `__mod__`| String formatting (old-style) | `"%s world" % "hello"` → `'hello world'` | `"%s world".__mod__("hello")` |
| `__hash__` | Hash value (for dicts/sets) | `hash("key")` | `"key".__hash__()`|
| `__iter__` | Iteration | `for ch in "abc": print(ch)`| `it = "abc".__iter__(); next(it)` |
| `__bool__` | Truthiness | `bool("hi")` → `True`, `bool("")` → `False` | `"hi".__bool__()` |
| `__getnewargs__` | Internal use (pickling support) | *(rarely used directly)* | `"hi".__getnewargs__()` |


## String methods

### capitalize

Capitalizes the first letter in a string.

```
>>> capitalize("hello")
Hello
```

### `casefold`

Used for text normalization. Most commonly used to compare string values without uppercase or lowercase distictions.

```python
>>> "hElLo WoRlD".casefold()
'hello world'
```

```python
>>> "hElLo WoRlD".casefold() == 'hello world'
True
```

### `center`



### `count`

### `encode`

### `endswith`

### `expandtabs`

### `find`

### `format`

### `format_map`

### `index`

### `isalnum`

### `isalpha`

### `isascii`

### `isdecimal`

### `isdigit`

### `isidentifier`

### `islower`

### `isnumeric`

### `isprintable`

### `isspace`

### `istitle`

### `isupper`

### `join`

### `ljust`

### `lower`

### `lstrip`

### `maketrans`

### `partition`

### `removeprefix`

### `removesuffix`

### `replace`

### `rfind`

### `rindex`

### `rjust`

### `rpartition`

### `rsplit`

### `rstrip`

### `split`

### `splitlines`

### `startswith`

### `strip`

### `swapcase`

### `title`

### `translate`

### `upper`

### `zfill`