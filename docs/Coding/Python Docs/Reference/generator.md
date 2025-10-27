---
title: generator
---

## Dunder methods

| Dunder Method | Operation          | Example (normal syntax) | Example (dunder call)      |
| ------------- | ------------------ | ----------------------- | -------------------------- |
| `__next__`    | Get next value     | `next(gen)`             | `gen.__next__()`           |
| `__iter__`    | Iterator protocol  | `for x in gen`          | `gen.__iter__()`           |
| `__send__`    | Send a value in    | `gen.send(10)`          | `gen.__send__(10)`         |
| `__throw__`   | Raise in generator | `gen.throw(Exception)`  | `gen.__throw__(Exception)` |
| `__close__`   | Stop generator     | `gen.close()`           | `gen.__close__()`          |
