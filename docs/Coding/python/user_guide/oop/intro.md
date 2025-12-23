---
title: OOP introduction
sidebar_position: 1
---

## What is Object-Oriented Programming?

**Object-Oriented Programming (OOP)** is a way of organizing code around **objects** instead of just functions and data.  
An object bundles together:

- **Data** (attributes) — what the object *has*
- **Behavior** (methods) — what the object *does*

In Python, almost everything is an object: strings, lists, functions, even modules and classes themselves.

```python
name = "Alice"
print(name.upper())   # 'ALICE'  (method on a string object)
```

When you define your own classes, you create your own types of objects to model things in your program: users, orders, game characters, shapes, and more.

## Why this matters

OOP becomes important when your programs grow beyond a few functions. It helps you:

- **Group related data and behavior** together (easier to understand and change).
- **Avoid repetition** by sharing behavior between related classes.
- **Model real-world concepts** directly in code (User, Car, BankAccount, etc.).
- **Encapsulate complexity** so other parts of your program don’t need to know internal details.

Most large Python codebases use OOP heavily—understanding classes, instances, and methods is key to reading and writing professional Python.

## Classes and instances

A **class** is a blueprint; an **instance** is a specific object created from that blueprint.

```python
class Dog:
    def __init__(self, name):
        self.name = name    # attribute on the instance

    def bark(self):
        return f"{self.name} says woof!"

# create instances
fido = Dog("Fido")
rex = Dog("Rex")

print(fido.bark())  # "Fido says woof!"
print(rex.bark())   # "Rex says woof!"
```

- `Dog` is the **class**.
- `fido` and `rex` are **instances** of `Dog`.
- `self` inside methods refers to “this particular instance”.

You’ll explore instances in more detail in the dedicated `instances` guide.

## Attributes and methods

Objects store data in **attributes** and behavior in **methods**.

```python
class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner      # attribute
        self.balance = balance  # attribute

    def deposit(self, amount):  # method
        self.balance += amount

    def withdraw(self, amount): # method
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
```

Usage:

```python
acct = Account("Alice", balance=100)
acct.deposit(50)
acct.withdraw(30)
print(acct.balance)  # 120
```

- Attributes: `owner`, `balance`
- Methods: `deposit`, `withdraw`

The `attributes`, `instances`, and `methods` guides dive deeper into how these pieces work.

## The role of `__init__` and `self`

When you create an instance, Python calls the class’s `__init__` method:

```python
acct = Account("Alice", balance=100)
```

is roughly:

```python
acct = Account.__new__(Account)   # create empty instance (advanced)
Account.__init__(acct, "Alice", balance=100)  # initialize it
```

Inside `__init__`, you:

- Receive the new instance as `self`
- Set up its initial state by assigning attributes

```python
def __init__(self, owner, balance=0):
    self.owner = owner
    self.balance = balance
```

`self` is not a keyword; it’s just a strong convention that makes code easier to read.

## Encapsulation: hiding details, exposing behavior

**Encapsulation** means:

- Keep an object’s internal state **private-ish** (by convention).
- Expose a clear **public interface** through methods and attributes.

Python doesn’t enforce strict privacy like some languages, but it uses naming conventions:

- Names without underscores: part of the public interface (`balance`, `deposit`)
- Single leading underscore: “internal use” (`_helper_method`)
- Double leading underscore: name-mangled to avoid accidental overrides (`__secret`)

Example:

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius   # internal storage

    def to_fahrenheit(self):
        return self._celsius * 9 / 5 + 32
```

The `encapsulation` guide covers these conventions and tools like `@property` in more depth.

## Inheritance and polymorphism (preview)

Two more key ideas in OOP:

- **Inheritance** — create new classes that reuse and extend existing ones.
- **Polymorphism** — different classes can be used interchangeably if they share a common interface.

Example of simple inheritance:

```python
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

animals = [Dog(), Cat()]
for a in animals:
    print(a.speak())  # "Woof!", then "Meow!"
```

Here:

- `Dog` and `Cat` inherit from `Animal`.
- Both override `speak`, but you can treat them all as “animals that can speak.”

You’ll explore these ideas in detail in the `inheritance` and `polymorphism` guides.

## How this OOP section is organized

This OOP section builds up concepts step by step:

- **Intro (this page)** — big picture and key vocabulary.
- **Instances** — creating and working with concrete objects.
- **Attributes** — storing and accessing data on objects.
- **Methods** — functions that live on classes and use `self`.
- **Encapsulation** — hiding implementation details and designing clean interfaces.
- **Inheritance** — reusing and extending behavior across classes.
- **Polymorphism** — writing code that works with different types using a shared interface.
- **Dunder methods** — special methods like `__str__`, `__len__`, and operators that make your classes feel built-in.
- **Modules and packages** — organizing OOP code across multiple files.

You don’t need to master everything at once. Start by getting comfortable with **classes**, **instances**, and simple **methods**. Then, as your projects grow, you can come back to the later guides when you’re ready to use more advanced OOP features.


