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

### `aiter`

`aiter` is used with `asyncio` for asynchronous iteration.

### `all`
### `anext`
### `any`
### `ascii`
### `bin`
### `bool`
### `breakpoint`
### `bytearray`
### `bytes`
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