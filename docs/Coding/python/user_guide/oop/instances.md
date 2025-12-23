---
title: Instances
sidebar_position: 2
---

## What is an instance?

An **instance** is a concrete object created from a **class**.  
If a class is a blueprint, an instance is the actual thing built from that blueprint.

```python
class Dog:
    def __init__(self, name):
        self.name = name

fido = Dog("Fido")   # fido is an instance of Dog
rex = Dog("Rex")     # rex is another instance
```

Each instance has its own data (attributes), even though they share the same class definition.

## Creating instances

You create an instance by **calling the class** like a function:

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(2, 3)   # calls Point.__init__(p, 2, 3)
```

Behind the scenes:

1. Python allocates a new, empty object.
2. It calls the class’s `__init__` method with that object as `self` and any extra arguments you passed.

```python
p = Point(2, 3)
# roughly equivalent to:
p = Point.__new__(Point)      # create empty instance (advanced)
Point.__init__(p, 2, 3)       # initialize it
```

You don’t normally call `__new__` or `__init__` directly—just call the class.

## Instance attributes

Instance attributes are pieces of data stored on **each individual object**.

```python
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

u1 = User("alice", "alice@example.com")
u2 = User("bob", "bob@example.com")

print(u1.username)   # 'alice'
print(u2.username)   # 'bob'
```

Here:

- `u1.username` and `u2.username` are different values.
- Changing one does **not** affect the other:

```python
u1.email = "new_alice@example.com"
print(u1.email)  # 'new_alice@example.com'
print(u2.email)  # 'bob@example.com' (unchanged)
```

## `self`: referring to the current instance

Inside instance methods, `self` is a reference to **the instance that called the method**.

```python
class Counter:
    def __init__(self):
        self.value = 0

    def increment(self):
        self.value += 1

c1 = Counter()
c2 = Counter()

c1.increment()   # changes c1.value
c2.increment()   # changes c2.value
```

Each call to `increment` works on the instance that invoked it.

## Instance vs class attributes

An attribute defined on `self` is **per-instance**.  
An attribute defined directly on the class is **shared** by all instances (unless shadowed).

```python
class Dog:
    species = "Canis familiaris"   # class attribute (shared)

    def __init__(self, name):
        self.name = name           # instance attribute

fido = Dog("Fido")
rex = Dog("Rex")

print(fido.species)  # 'Canis familiaris'
print(rex.species)   # 'Canis familiaris'
```

Changing an instance attribute:

```python
fido.name = "Mr. Fido"
print(fido.name)  # 'Mr. Fido'
print(rex.name)   # 'Rex'
```

Changing a class attribute affects all instances that haven’t overridden it:

```python
Dog.species = "Canis lupus familiaris"
print(fido.species)  # 'Canis lupus familiaris'
print(rex.species)   # 'Canis lupus familiaris'
```

The `attributes` guide will go deeper into this distinction.

## Checking an object’s type

Use `isinstance` to check if an object is an instance of a class (or a subclass):

```python
class Animal:
    pass

class Dog(Animal):
    pass

fido = Dog()

isinstance(fido, Dog)     # True
isinstance(fido, Animal)  # True (Dog is a subclass of Animal)
isinstance(fido, object)  # True (everything inherits from object)
```

Use `type(obj)` when you need the exact class:

```python
type(fido) is Dog         # True
type(fido) is Animal      # False
```

## Instance lifecycle and garbage collection

Instances live as long as there are references to them:

```python
class Temp:
    pass

t = Temp()   # t references the instance
u = t        # u also references it

del t        # instance still alive (referenced by u)
del u        # no more references → eligible for garbage collection
```

Python’s garbage collector frees the memory when an object is no longer referenced.

You can customize teardown logic with `__del__`, but it’s rarely needed and can be tricky.  
Instead, prefer context managers (`with`) or explicit cleanup methods.

## Multiple instances in collections

Instances often live inside lists, dicts, or other collections:

```python
class Task:
    def __init__(self, title, done=False):
        self.title = title
        self.done = done

tasks = [
    Task("Write docs"),
    Task("Fix bugs", done=True),
]

for t in tasks:
    status = "✓" if t.done else " "
    print(f"[{status}] {t.title}")
```

This is where OOP shines: you work with many objects that share the same interface (methods/attributes) but hold different data.

## Summary

In this section you learned that:

- An **instance** is a concrete object created from a class.
- You create instances by **calling the class**.
- Instance attributes live on each object; class attributes live on the class and are shared.
- `self` inside methods refers to the instance that called the method.
- `isinstance` is the preferred way to check if something is an instance of a given class.

Next up, the **attributes** and **methods** guides will dive deeper into how data and behavior are attached to instances and classes.


