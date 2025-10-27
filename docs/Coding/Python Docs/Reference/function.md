---
title: function
sidebar_position: 6
---

## Dunder methods

| Dunder Method     | Operation         | Example (normal syntax)  | Example (dunder call) |
| ----------------- | ----------------- | ------------------------ | --------------------- |
| `__call__`        | Call the function | `f(3)`                   | `f.__call__(3)`       |
| `__name__`        | Function name     | `f.__name__` → `'f'`     | *(attribute access)*  |
| `__defaults__`    | Default args      | `f.__defaults__`         | *(attribute access)*  |
| `__code__`        | Bytecode info     | `f.__code__.co_varnames` | *(attribute access)*  |
| `__annotations__` | Type hints        | `f.__annotations__`      | *(attribute access)*  |
| `__doc__`         | Docstring         | `f.__doc__`              | *(attribute access)*  |
