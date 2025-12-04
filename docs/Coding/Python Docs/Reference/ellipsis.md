---
title: ellipsis
---

## Properties

```python
>>> dir(...)
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
```

## Definition

The ellipsis literal, written as `...`, is a built-in **singleton** object of type `ellipsis`.  
It is commonly used as a placeholder to indicate omitted code, incomplete logic, or “this will be implemented later.”

```python
def future_function():
    ...

class MyClass:
    def method(self):
        ...
```

## Usage

### Placeholder for incomplete code

`...` is often used instead of `pass` when you want to clearly signal that something is intentionally left unfinished.

### In libraries (e.g., NumPy)

Some libraries interpret `...` in slicing operations to mean “all remaining dimensions”:

```python
arr[..., 0]
```

### Type stubs and typing

In `.pyi` stub files or abstract methods, `...` can stand in for unimplemented bodies or unspecified return types.

```python
def connect(self) -> ...:
    ...
```

### Type

```python
>>> ... is Ellipsis
True
>>> type(...)
<class 'ellipsis'>
```
