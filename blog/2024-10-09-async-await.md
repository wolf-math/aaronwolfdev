---
slug: async-await
title: "async/await"
authors: wolf
tags: [javascript]
---

:::note
This blog post was originally published on [dev.to](https://dev.to/wolfmath/async-await-13bn)
:::

`async` / `await` is a newer way of writing asynchronous code compared to promises. The main advantages of `async`/`await` are improved readability and the avoidance of _promise chaining_. Promises can become long, hard to read, and may contain deeply nested callbacks that can be difficult to debug.

<!-- truncate -->

## Example

Recall our fetch from before.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('All done'));
```

Using `async`/`await`, the code can be refactored to look like this:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log('All done');
  }
}

fetchData();
```

While it may be a few more lines of code, this version is easier to read because it resembles a normal synchronous function. Additionally, if the functions inside the `.then()` statements were more complex, readability and debuggability would be even more impacted. The `async`/`await` example is far clearer.

## Example 2: Ordering food from a restaurant

## Structure of `async`/`await`

An `async`/`await` function has two essential parts: `async` and `await`. The `async` keyword is added before a function declaration, and `await` is used when an asynchronous task begins.

Let’s illustrate this with an example of ordering food from a restaurant:

```javascript
// Simulate the order process with async/await
async function foodOrder() {
  console.log("Ordering food...");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds for food to be prepared
  return "Your food is ready!";
}

// Simulate the eating process
function eatFood(order) {
  console.log(order); // This logs "Your food is ready!"
  console.log("Enjoying the meal!");
}

// Simulate continuing the conversation
function continueConversation() {
  console.log("While waiting, you continue chatting with friends...");
}

async function orderFood() {
  console.log("You've arrived at the restaurant.");
  const order = await foodOrder(); // Place the order and wait for it to be ready
  continueConversation(); // Chat while waiting
  eatFood(order); // Eat the food once it arrives
}

orderFood();
```

The output will be 

```
You've arrived at the restaurant.
Ordering food...
While waiting, you continue chatting with friends...
Your food is ready!
Enjoying the meal!
```
