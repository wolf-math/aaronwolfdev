---
title: Conditionals
sidebar_position: 3
---

Conditional statements let your program make decisions based on values and conditions. Python uses `if`, `elif`, and `else` to control which code runs.

## Basic syntax

The basic form of a conditional statement looks like this:

```python
if <condition>:
    <code to run>
```

The *condition* is any expression that evaluates to `True` or `False` (or a truthy or falsy value). If the condition is truthy, Python executes the indented block. If it’s falsy, Python skips the block and moves on to the next statement.


## if statements

The simplest conditional runs code only when a condition is truthy:

```python
age = 18

if age >= 18:
    print("You are an adult")
```

If the condition is falsy, nothing happens:

```python
age = 15

if age >= 18:
    print("You are an adult")  # This won't print
```

## if / else

Add `else` to provide an alternative when the condition is falsy:

```python
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
```

## if / elif / else

Use `elif` (short for "else if") to check multiple conditions in order:

```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

Python checks conditions from top to bottom and runs the first block where the condition is truthy. Once a block runs, the rest are skipped.

## Truthiness

Python evaluates conditions based on truthiness. These values are **falsy**:
- `False`
- `None`
- `0` (or `0.0`)
- Empty collections: `""`, `[]`, `{}`, `set()`, `()`
- Custom objects that define `__bool__()` returning `False` or `__len__()` returning `0`

Everything else is **truthy**.

```python
name = "Alice"

if name:  # Non-empty string is truthy
    print(f"Hello, {name}")

items = []

if items:  # Empty list is falsy
    print("List has items")
else:
    print("List is empty")
```

## Comparison operators

Use comparison operators to build conditions:

```python
x = 5

x == 5   # True (equal to)
x != 3   # True (not equal to)
x > 3    # True (greater than)
x < 10   # True (less than)
x >= 5   # True (greater than or equal to)
x <= 5   # True (less than or equal to)
```

## Logical operators

Combine conditions with `and`, `or`, and `not`:

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive")

if age < 18 or not has_license:
    print("You cannot drive")
```

### and

Both conditions must be truthy:

```python
x = 5

if x > 0 and x < 10:
    print("x is between 0 and 10")
```

### or

At least one condition must be truthy:

```python
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend")
```

### not

Inverts the truthiness:

```python
is_raining = False

if not is_raining:
    print("Let's go outside")
```

## Nested conditionals

You can nest `if` statements inside other `if` blocks:

```python
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You're too young to drive")
```

## Conditional expressions (ternary operator)

Python supports a compact one-line conditional expression:

```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # "adult"
```

This is equivalent to:

```python
if age >= 18:
    status = "adult"
else:
    status = "minor"
```

## Common patterns

### Checking membership

```python
color = "red"

if color in ["red", "green", "blue"]:
    print("Primary color")
```

### Checking type (with isinstance)

```python
value = 42

if isinstance(value, int):
    print("It's an integer")
elif isinstance(value, str):
    print("It's a string")
```

### Multiple conditions

```python
temperature = 75
is_sunny = True

if temperature > 70 and is_sunny:
    print("Perfect weather for a picnic")
elif temperature > 70:
    print("Warm but cloudy")
elif is_sunny:
    print("Sunny but cool")
else:
    print("Not ideal weather")
```

## Best practices

- Keep conditions simple and readable. If a condition is complex, consider extracting it to a variable with a clear name.
- Use `elif` instead of multiple `if` statements when checking mutually exclusive conditions.
- Be mindful of truthiness—sometimes explicit comparisons (`== True`, `== False`) make intent clearer.
- Avoid deeply nested conditionals—consider using early returns or restructuring logic.

```python
# Good: Clear and readable
is_valid = age >= 18 and has_license

if is_valid:
    print("You can drive")

# Avoid: Too nested
if age >= 18:
    if has_license:
        if not is_suspended:
            print("You can drive")
```
