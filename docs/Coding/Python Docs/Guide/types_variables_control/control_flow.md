---
title: Control flow
sidebar_position: 3
---

Control flow statements let you make decisions, repeat work, and handle exceptional cases. This section covers the essentials: `if`, `for`, `while`, `break`/`continue`, and `try`/`except`.

## if / elif / else

Use `if` to run code when a condition is truthy. Add `elif` for more branches and `else` for the fallback.

```python
x = 5

if x > 10:
    print("big")
elif x > 0:
    print("positive")
else:
    print("zero or negative")
```

Truthiness follows Python rules: non-empty values are truthy; `0`, `""`, `[]`, `{}`, `None` are falsy.

## for loops (iteration)

`for` iterates over items in an iterable (list, tuple, string, dict, range, generator, etc.).

```python
for color in ["red", "green", "blue"]:
    print(color)

for i in range(3):
    print(i)   # 0, 1, 2
```

### Enumerate and unpacking

```python
for idx, item in enumerate(["a", "b", "c"], start=1):
    print(idx, item)

pairs = [("Ada", 1815), ("Grace", 1906)]
for name, year in pairs:
    print(name, year)
```

## while loops

`while` repeats while a condition stays truthy. Use carefully to avoid infinite loops.

```python
count = 3
while count > 0:
    print(count)
    count -= 1
```

## break and continue

- `break` exits the nearest loop.
- `continue` skips to the next iteration.

```python
for n in range(5):
    if n == 3:
        break   # stops the loop
    if n % 2 == 0:
        continue  # skip even
    print(n)   # prints 1
```

## try / except (basic)

Handle exceptions to keep your program from crashing and to respond to errors.

```python
try:
    value = int("not a number")
except ValueError:
    value = 0
```

Add `else` for code that runs only if no exception occurred, and `finally` for code that runs regardless (e.g., cleanup).

```python
try:
    f = open("data.txt")
    data = f.read()
except FileNotFoundError:
    data = ""
else:
    print("file read ok")
finally:
    f.close()
```

## Putting it together

Control flow combines with functions and data structures to build real programs. Start simple:

```python
def sum_positive(nums):
    total = 0
    for n in nums:
        if n < 0:
            continue
        total += n
    return total

print(sum_positive([-1, 2, 3, -5, 4]))  # 9
```

