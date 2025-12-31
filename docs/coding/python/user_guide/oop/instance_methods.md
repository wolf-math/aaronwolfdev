---
title: Instance methods
sidebar_position: 3
---

## What is an instance method?

An **instance method** is a function defined inside a class that operates on a **specific instance** of that class.  
It takes `self` as its first parameter and is usually called using **dot syntax**:

```python
class Dog:
    def bark(self):        # instance method
        return "Woof!"

dog = Dog()
dog.bark()                 # calls Dog.bark(dog)
```

Under the hood, `dog.bark()` is equivalent to `Dog.bark(dog)`.  
Python automatically passes the instance as the first argument (`self`).

## Why this matters

Instance methods are how you:

- Attach **behavior** to objects
- Work with and update **instance attributes**
- Define the **public interface** of your class (what other code can do with your objects)

Understanding instance methods makes it easier to:

- Read class-based code in real projects (web apps, games, libraries)
- Design clear, intuitive APIs for your own classes

## Defining and calling instance methods

### Basic method definition

```python
class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
```

Usage:

```python
acct = Account("Alice", balance=100)
acct.deposit(50)      # Account.deposit(acct, 50)
acct.withdraw(30)     # Account.withdraw(acct, 30)
print(acct.balance)   # 120
```

- `deposit` and `withdraw` are **instance methods**.
- They read and modify `self.balance`—state that belongs to a specific account.

## The `self` parameter

By convention, the first parameter of an instance method is named `self`. It:

- Refers to the **instance that called the method**
- Lets you access and modify attributes on that instance

```python
class Counter:
    def __init__(self):
        self.value = 0

    def increment(self, step=1):
        self.value += step

c1 = Counter()
c2 = Counter()

c1.increment()
c1.increment(2)
c2.increment()

print(c1.value)  # 3
print(c2.value)  # 1
```

You can call methods directly on the class, but you must pass the instance yourself:

```python
Counter.increment(c1, 10)  # equivalent to c1.increment(10)
```

## Methods and instance attributes

Instance methods almost always interact with instance attributes on `self`:

```python
class TodoItem:
    def __init__(self, title):
        self.title = title
        self.done = False

    def mark_done(self):
        self.done = True

    def rename(self, new_title):
        self.title = new_title
```

Usage:

```python
task = TodoItem("Write docs")
task.mark_done()
task.rename("Write more docs")
```

- `mark_done` changes `self.done`.
- `rename` updates `self.title`.

Methods define **how an instance’s state can change** over time.

## Methods with parameters and return values

Instance methods can:

- Accept additional parameters (besides `self`)
- Return values, just like regular functions

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def scale(self, factor):
        self.width *= factor
        self.height *= factor
```

Usage:

```python
r = Rectangle(2, 3)
print(r.area())  # 6
r.scale(2)
print(r.area())  # 12
```

## Bound methods vs functions

When you access a method on an instance, you get a **bound method**:

```python
class Greeter:
    def hi(self, name):
        return f"Hi {name}"

g = Greeter()
bound = g.hi

print(bound("Alice"))        # 'Hi Alice'
print(bound.__self__ is g)   # True  (the instance it is bound to)
print(bound.__func__ is Greeter.hi)  # True (original function)
```

- `bound` remembers both the instance (`__self__`) and the underlying function (`__func__`).
- Calling `bound("Alice")` automatically supplies `g` as `self`.

This is important for:

- Passing methods as callbacks
- Storing behavior in data structures (lists/dicts of methods)

## Special instance methods (`__init__`, `__str__`, etc.)

Many **special methods** (dunder methods) are also instance methods. They customize built-in behaviors:

- `__init__` — initialization after creating an instance
- `__str__` — human-readable string (`str(obj)`)
- `__repr__` — developer-friendly representation (`repr(obj)`)
- `__len__` — length (`len(obj)`)
- `__iter__` — iteration (`for x in obj`)

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

p = Point(2, 3)
print(p)          # Point(x=2, y=3)
print(repr(p))    # Point(x=2, y=3)
```

These are covered in more detail in the **Dunder methods** guide.

## Instance methods vs static and class methods

Python also supports:

- **Static methods** (`@staticmethod`) — no automatic `self` or `cls`
- **Class methods** (`@classmethod`) — receive the class (`cls`) instead of the instance

Instance methods:

- Are the default
- Receive `self`
- Are used when behavior depends on the **state of a particular object**

```python
class Example:
    def instance_method(self):   # most common
        ...

    @classmethod
    def class_method(cls):
        ...

    @staticmethod
    def static_method():
        ...
```

The **class/static methods** guide will explain when to use each of these.

## Best practices for instance methods

- **Use clear names** that describe what the method does: `add_item`, `mark_done`, `to_json`.
- **Keep methods focused** on a single responsibility.
- **Avoid long parameter lists**—if the method needs many values, they might belong as attributes on `self`.
- **Don’t hide side effects**: methods that change state should make that obvious from their name (`update_`, `set_`, `reset_`, etc.).

## Summary

In this section you learned that:

- Instance methods are functions defined on a class that operate on **individual instances**.
- Python automatically passes the instance as the first argument (`self`).
- Methods are the main way to define what your objects **can do**.
- Bound methods remember both the instance and the original function.
- Many special behaviors in Python (like `str(obj)` and `len(obj)`) are implemented via special instance methods.

Next, the **attributes** and **encapsulation** guides will show how to manage instance data cleanly and design a good public interface for your classes.


