### Float

```python
>>> dir(float)
['__abs__', '__add__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getformat__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__int__', '__le__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__pos__', '__pow__', '__radd__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rmod__', '__rmul__', '__round__', '__rpow__', '__rsub__', '__rtruediv__', '__setattr__', '__setformat__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', 'as_integer_ratio', 'conjugate', 'fromhex', 'hex', 'imag', 'is_integer', 'real']
```

## Dunder methods

| Dunder Method  | Operation        | Example (normal syntax) | Example (dunder call)     |
| -------------- | ---------------- | ----------------------- | ------------------------- |
| `__add__`      | Addition         | `1.5 + 2.5` → `4.0`     | `(1.5).__add__(2.5)`      |
| `__sub__`      | Subtraction      | `3.0 - 1.0` → `2.0`     | `(3.0).__sub__(1.0)`      |
| `__mul__`      | Multiplication   | `2.0 * 4.0` → `8.0`     | `(2.0).__mul__(4.0)`      |
| `__truediv__`  | Division         | `5.0 / 2.0` → `2.5`     | `(5.0).__truediv__(2.0)`  |
| `__floordiv__` | Floor division   | `5.0 // 2.0` → `2.0`    | `(5.0).__floordiv__(2.0)` |
| `__mod__`      | Modulus          | `5.5 % 2.0` → `1.5`     | `(5.5).__mod__(2.0)`      |
| `__pow__`      | Power            | `2.0 ** 3.0` → `8.0`    | `(2.0).__pow__(3.0)`      |
| `__eq__`       | Equality         | `3.0 == 3.0` → `True`   | `(3.0).__eq__(3.0)`       |
| `__lt__`       | Less than        | `2.0 < 5.0` → `True`    | `(2.0).__lt__(5.0)`       |
| `__abs__`      | Absolute value   | `abs(-3.5)` → `3.5`     | `(-3.5).__abs__()`        |
| `__round__`    | Rounding         | `round(3.5)` → `4`      | `(3.5).__round__()`       |
| `__int__`      | Convert to int   | `int(3.9)` → `3`        | `(3.9).__int__()`         |
| `__float__`    | Convert to float | `float(2)` → `2.0`      | `(2).__float__()`         |
