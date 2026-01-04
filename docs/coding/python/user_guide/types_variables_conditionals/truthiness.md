---
title: Truthiness
sidebar_position: 2.5
---

## What is truthiness?

**Truthiness** is Python's way of evaluating any value as either "truthy" (treated as `True`) or "falsy" (treated as `False`) in boolean contexts. Unlike some languages that only allow `True` and `False` in boolean contexts, Python lets you use any value, and it automatically converts that value to a boolean based on its truthiness.

```python
>>> name = "Alice"
>>> bool(name)  # Non-empty string is truthy
True

>>> items = []
>>> bool(items)  # Empty list is falsy
False
```

## Why this matters

Truthiness is fundamental to Python programming because:

- **Flexible evaluation**: Works with any type, not just booleans
- **Idiomatic Python**: Using truthiness is more Pythonic than checking `== True` or `== False`
- **Logical operators**: `and`, `or`, and `not` work with truthiness to create powerful expressions
- **Default values**: You can use `or` to provide defaults when values are falsy
- **Common patterns**: Many Python idioms rely on truthiness

Understanding truthiness helps you write more readable, Pythonic code and avoid common mistakes.

## Falsy values

These values are considered **falsy** in Python—they evaluate to `False` in boolean contexts:

### The falsy values

1. **`False`** - The boolean `False` itself
2. **`None`** - Python's null value
3. **`0`** - Integer zero
4. **`0.0`** - Float zero
5. **`0j`** - Complex zero
6. **`""`** - Empty string
7. **`[]`** - Empty list
8. **`{}`** - Empty dictionary
9. **`set()`** - Empty set
10. **`()`** - Empty tuple

```python
# All of these are falsy
>>> bool(False)
False

>>> bool(None)
False

>>> bool(0)
False

>>> bool("")
False

>>> bool([])
False

>>> bool({})
False
```

### Testing falsy values

You can test if a value is falsy:

```python
>>> bool(False)
False

>>> bool(None)
False

>>> bool(0)
False

>>> bool("")
False

>>> bool([])
False

>>> bool({})
False
```

## Truthy values

Everything that's not falsy is **truthy**—it evaluates to `True` in boolean contexts:

```python
# All of these are truthy
>>> bool(True)
True

>>> bool(1)
True

>>> bool(-1)  # Negative numbers are truthy!
True

>>> bool("hello")
True

>>> bool([1, 2, 3])
True

>>> bool({"key": "value"})
True
```

### Common truthy values

- **Non-zero numbers**: `1`, `-1`, `3.14`, `-0.5`, `1+2j`
- **Non-empty strings**: `"hello"`, `" "` (even a space is truthy!)
- **Non-empty collections**: `[1]`, `{"key": "value"}`, `(1,)`, `{1}`
- **Most objects**: Custom classes, functions, modules, etc.

```python
>>> bool(1)
True

>>> bool(-1)
True

>>> bool("hello")
True

>>> bool(" ")  # Even a single space is truthy!
True

>>> bool([1, 2, 3])
True

>>> bool({"key": "value"})
True
```

## Using truthiness with logical operators

Truthiness works seamlessly with `and`, `or`, and `not` to create powerful expressions:

### Providing defaults with `or`

```python
>>> name = ""
>>> result = name or "Anonymous"
>>> result
"Anonymous"

>>> name = "Alice"
>>> result = name or "Anonymous"
>>> result
"Alice"
```

### Combining values with `and`

```python
>>> "hello" and "world"
"world"

>>> "" and "world"
""
```

### Using `not` to check for emptiness

```python
>>> not ""
True

>>> not "hello"
False

>>> not []
True
```

## Common patterns

### Default values with `or`

```python
>>> user_name = None
>>> display_name = user_name or "Anonymous"
>>> display_name
"Anonymous"

>>> user_name = ""
>>> display_name = user_name or "Anonymous"
>>> display_name
"Anonymous"

>>> user_name = "Alice"
>>> display_name = user_name or "Anonymous"
>>> display_name
"Alice"
```

### Filtering falsy values

```python
>>> names = ["Alice", "", "Bob", None, "Charlie", ""]
>>> valid_names = [name for name in names if name]
>>> valid_names
["Alice", "Bob", "Charlie"]
```

### Chaining defaults

```python
>>> value1 = None
>>> value2 = None
>>> value3 = "found"
>>> result = value1 or value2 or value3 or "default"
>>> result
"found"
```

## The `bool()` function

The `bool()` function explicitly converts any value to a boolean:

```python
>>> bool(0)
False

>>> bool(1)
True

>>> bool("")
False

>>> bool("hello")
True

>>> bool([])
False

>>> bool([1, 2, 3])
True
```

This is useful when you need an explicit boolean value rather than relying on truthiness in a conditional.

## Custom truthiness

You can control the truthiness of your own classes by defining `__bool__()` or `__len__()`:

### Using `__bool__()`

```python
class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    
    def __bool__(self):
        return self.balance > 0

>>> account = BankAccount(100)
>>> bool(account)  # Calls account.__bool__()
True

>>> empty_account = BankAccount(0)
>>> bool(empty_account)
False
```

### Using `__len__()`

If `__bool__()` is not defined, Python falls back to `__len__()`:

```python
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def __len__(self):
        return len(self.items)

>>> cart = ShoppingCart()
>>> bool(cart)  # Calls cart.__len__(), falsy because length is 0
False

>>> cart.items.append("item")
>>> bool(cart)  # Now truthy because length > 0
True
```

If neither `__bool__()` nor `__len__()` is defined, the object is always truthy.

## Truthiness vs. explicit comparisons

Understanding the difference helps you choose the right approach:

### Explicit comparisons

```python
>>> value = None
>>> value is not None  # Explicit check for None
False

>>> name = ""
>>> name != ""  # Explicit check for empty string
False

>>> count = 0
>>> count == 0  # Explicit check for zero
True
```

### Truthiness evaluation

```python
>>> name = "Alice"
>>> bool(name)  # Truthiness check
True

>>> items = [1, 2, 3]
>>> bool(items)  # Truthiness check
True

>>> user_input = ""
>>> bool(user_input)  # Truthiness check
False
```

Note: When you learn about conditionals, you'll see that `if value:` uses truthiness, while `if value is not None:` uses explicit comparison. Both have their place.

## Common pitfalls

### Empty string vs. None

```python
>>> name = ""
>>> bool(name)  # False - empty string is falsy
False

>>> name is None  # False - name is "", not None
False

>>> name = None
>>> bool(name)  # False - None is falsy
False

>>> name is None  # True - name is actually None
True
```

### Zero is falsy

```python
>>> count = 0
>>> bool(count)  # False - 0 is falsy!
False

>>> count is not None  # True - 0 is a valid value, just falsy
True
```

Remember: `0` is a valid number, but it's falsy. If you need to distinguish between "no value" and "zero", use explicit checks.

### Space in strings

```python
>>> name = " "  # String with just a space
>>> bool(name)  # True - non-empty string is truthy!
True

>>> bool(name.strip())  # False - stripped string is ""
False
```

A string containing only whitespace is truthy because it's not empty. To check for "meaningful" content, strip whitespace first.

## Truthiness with logical operators

Truthiness works with `and`, `or`, and `not`:

### `and` returns the last truthy value or first falsy

```python
>>> "hello" and "world"
"world"

>>> "" and "world"
""

>>> 0 and "world"
0
```

### `or` returns the first truthy value or last falsy

```python
>>> "" or "default"
"default"

>>> "hello" or "default"
"hello"

>>> None or 0 or "default"
"default"
```

### `not` inverts truthiness

```python
>>> not ""
True

>>> not "hello"
False

>>> not []
True

>>> not [1, 2, 3]
False
```

## Best practices

1. **Use `bool()` for explicit conversion**: When you need an explicit boolean value, use `bool()`
2. **Be explicit when needed**: Use `is None` or `== ""` when the distinction matters
3. **Document custom truthiness**: If your class defines `__bool__()`, document what makes it truthy
4. **Consider edge cases**: Remember that `0`, `""`, and `[]` are falsy—make sure that's what you want
5. **Use `or` for defaults**: `value or "default"` is a common pattern for providing fallback values

```python
# Good: Using bool() for explicit conversion
>>> items = [1, 2, 3]
>>> bool(items)
True

# Good: Explicit when distinction matters
>>> count = 0
>>> count is not None  # Distinguishes between 0 and None
True

# Good: Using truthiness for defaults
>>> user_input = ""
>>> result = user_input or "default"
>>> result
"default"
```

## Summary

Truthiness is a powerful Python feature that makes code more readable:

- **Falsy values**: `False`, `None`, `0`, `""`, `[]`, `{}`, `set()`, `()`
- **Truthy values**: Everything else
- **The `bool()` function**: Converts any value to an explicit boolean
- **Custom classes**: Define `__bool__()` or `__len__()` to control truthiness
- **Logical operators**: `and`, `or`, and `not` work with truthiness to create powerful expressions
- **Default values**: Use `or` to provide fallback values when something is falsy
- **Best practices**: Use `bool()` for explicit conversion, be explicit when distinctions matter

Understanding truthiness helps you write more Pythonic, readable code and is essential for working with logical operators and, later, conditionals effectively.
