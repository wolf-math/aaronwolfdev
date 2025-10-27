---
title: method
---

## Dunder methods

| Dunder Method | Operation           | Example (normal syntax) | Example (dunder call)   |
| ------------- | ------------------- | ----------------------- | ----------------------- |
| `__call__`    | Call the method     | `"hi".upper()` → `'HI'` | `"hi".upper.__call__()` |
| `__func__`    | Underlying function | `obj.method.__func__`   | *(attribute access)*    |
| `__self__`    | Bound instance      | `obj.method.__self__`   | *(attribute access)*    |
