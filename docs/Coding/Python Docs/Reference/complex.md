### Complex

```python
>>> dir(complex)
['__abs__', '__add__', '__bool__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__mul__', '__ne__', '__neg__', '__new__', '__pos__', '__pow__', '__radd__', '__reduce__', '__reduce_ex__', '__repr__', '__rmul__', '__rpow__', '__rsub__', '__rtruediv__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', 'conjugate', 'imag', 'real']
```


## Dunder methods

| Dunder Method | Operation          | Example (normal syntax)        | Example (dunder call)      |
| ------------- | ------------------ | ------------------------------ | -------------------------- |
| `__add__`     | Addition           | `(2+3j) + (1+4j)` → `(3+7j)`   | `(2+3j).__add__(1+4j)`     |
| `__sub__`     | Subtraction        | `(5+2j) - (3+1j)` → `(2+1j)`   | `(5+2j).__sub__(3+1j)`     |
| `__mul__`     | Multiplication     | `(2+3j)*(1+2j)` → `(-4+7j)`    | `(2+3j).__mul__(1+2j)`     |
| `__truediv__` | Division           | `(1+2j)/(1+1j)` → `(1.5+0.5j)` | `(1+2j).__truediv__(1+1j)` |
| `__abs__`     | Magnitude          | `abs(3+4j)` → `5.0`            | `(3+4j).__abs__()`         |
| `__eq__`      | Equality           | `(1+2j) == (1+2j)` → `True`    | `(1+2j).__eq__(1+2j)`      |
| `__neg__`     | Negation           | `-(3+4j)` → `(-3-4j)`          | `(3+4j).__neg__()`         |
| `__complex__` | Convert to complex | `complex(3)` → `(3+0j)`        | `(3).__complex__()`        |
