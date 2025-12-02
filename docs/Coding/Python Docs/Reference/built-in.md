---
title: built-in functions
sidebar_position: 0
---

## Definition

Built-in functions are Python functions that exist in the global namespace. They are available everywhere in your code without needing to import. Some of these functions are not tied to a specific type, such as the `len()` function that can get the length of a list or a string.

```python
>>> import builtins
>>> dir(builtins)
['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning', 'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError', 'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EncodingWarning', 'EnvironmentError', 'Exception', 'False', 'FileExistsError', 'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'ModuleNotFoundError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError', 'RecursionError', 'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning', 'StopAsyncIteration', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'ZeroDivisionError', '_', '__build_class__', '__debug__', '__doc__', '__import__', '__loader__', '__name__', '__package__', '__spec__', 'abs', 'aiter', 'all', 'anext', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']
```

You will notice 3 main groups with the output of `dir(builtins)`. The first section is all different error and warning classes. The second is the dunder methods. The last section that this page will discuss is the actual built-in functions of Python.

### `abs`

Returns the absolute value of an [`int`](./int.md), [`float`](./float.md), or [`complex`](./complex.md) number

```python
>>> abs(42)
42

>>> abs(-42)
42

>>> abs(912.234)
912.234

>>> abs(-912.234)
912.234

>>> abs((3+7j))
7.615773105863909

>>> abs((-3+7j))
7.615773105863909
```

The number that's returned for complex numbers is the result of calculating $\sqrt{a^2 + b^2}$. In the above example it is the result of $\sqrt{3^2 + 7^2}$.

---

### `aiter`

Returns an **asynchronous iterator** for an async iterable.
Used inside `async` functions, often with `async for`.

```python
async def main():
    async for x in aiter([1, 2, 3]):
        print(x)
```

Most built-in collections are not async-iterable, so this is primarily used with objects that implement `__aiter__`.

---

### `all`

Returns `True` if **every element** in an iterable is truthy.
Returns `True` for an empty iterable.

```python
>>> all([True, 1, 'x'])
True
>>> all([True, 0, 'x'])
False
>>> all([])
True
```

---

### `anext`

Retrieves the **next item** from an async iterator.
Async version of `next()`.

```python
async def main():
    it = aiter([1, 2, 3])
    first = await anext(it)
    print(first)
```

You can also provide a default:

```python
await anext(it, default_value)
```

---

### `any`

Returns `True` if **at least one** element in an iterable is truthy.

```python
>>> any([0, 0, 5])
True
>>> any([0, False, None])
False
```

Useful for condition checks over lists or generator expressions.

---

### `ascii`

Returns a string containing only ASCII characters.
Non-ASCII characters are escaped using `\x`, `\u`, or `\U`.

```python
>>> ascii("café")
"'caf\\xe9'"
>>> ascii(["α", "β", "γ"])
"['\\u03b1', '\\u03b2', '\\u03b3']"
```

Helpful for debugging or logging where only ASCII output is expected.

---

### `bin`

Converts an integer into its **binary string representation**.

```python
>>> bin(10)
'0b1010'
>>> bin(-3)
'-0b11'
```

The returned value is always a string beginning with `'0b'`.

---

### `bool`

Converts a value to its boolean form (`True` or `False`).
Follows Python’s truthiness rules:

Falsy values include:

* `0`
* `0.0`
* `''` (empty string)
* `[]`, `{}`, `set()`, `tuple()`
* `None`
* objects that define `__bool__` or `__len__` returning `False`/`0`

Examples:

```python
>>> bool(1)
True
>>> bool(0)
False
>>> bool("hello")
True
>>> bool("")
False
```

---

### `breakpoint`

Enters the Python debugger at the current line.

```python
def add(a, b):
    breakpoint()   # pauses here
    return a + b
```

By default this launches `pdb`, but it can be customized via the `PYTHONBREAKPOINT` environment variable (e.g. to use `ipdb`).

---

### `bytearray`

Mutable sequence of bytes (0–255).
Often used for binary data manipulation, network buffers, or file processing.

```python
>>> data = bytearray([65, 66, 67])
>>> data[0] = 97
>>> data
bytearray(b'abc')
```

You can create one from:

* a sequence of integers
* a string + encoding
* an existing bytes object

```python
>>> bytearray("hello", "utf-8")
bytearray(b'hello')
```

---

### `bytes`

Immutable version of `bytearray`.
Represents raw binary data.

```python
>>> b = bytes([65, 66, 67])
>>> b
b'ABC'
```

Common uses:

* reading files in binary mode
* working with network packets
* hashing and cryptographic functions

You must reassign to modify:

```python
>>> b = b'hello'
>>> b = b.replace(b'h', b'H')
>>> b
b'Hello'
```

### `callable`
### `chr`
### `classmethod`
### `compile`
### `complex`
### `copyright`
### `credits`
### `delattr`
### `dict`
### `dir`
### `divmod`
### `enumerate`
### `eval`
### `exec`
### `exit`
### `filter`
### `float`
### `format`
### `frozenset`
### `getattr`
### `globals`
### `hasattr`
### `hash`
### `help`
### `hex`
### `id`
### `input`
### `int`
### `isinstance`
### `issubclass`
### `iter`
### `len`
### `license`
### `list`
### `locals`
### `map`
### `max`
### `memoryview`
### `min`
### `next`
### `object`
### `oct`
### `open`
### `ord`
### `pow`
### `print`
### `property`
### `quit`
### `range`
### `repr`
### `reversed`
### `round`
### `set`
### `setattr`
### `slice`
### `sorted`
### `staticmethod`
### `str`
### `sum`
### `super`
### `tuple`
### `type`
### `vars`
### `zip`