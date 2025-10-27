---
title: coroutine
---

## Dunder methods

| Dunder      | Operation                       | Example (normal syntax) | Example (dunder call) |
| ----------- | ------------------------------- | ----------------------- | --------------------- |
| `__await__` | Make coroutine awaitable        | `await coro`            | `coro.__await__()`    |
| `__iter__`  | Used internally for async loops | Implicit                | `coro.__iter__()`     |
| `__next__`  | Internal iteration step         | Implicit                | `coro.__next__()`     |
