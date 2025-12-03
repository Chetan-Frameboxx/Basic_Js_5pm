# **Lecture 3 – Variables and Scope**

## **Theory**

JavaScript variables behave like small actors on a stage where the script changes depending on where they enter and exit. An in‑depth understanding of variables is the foundation of clean, predictable programs.

At its core, a variable is a named reference to a value stored in memory. But the rules around **how long that name stays alive**, **who can see it**, **whether it can change**, and **when it's created** depend on the declaration type (`var`, `let`, `const`) and the scope structure.

---

### **The JavaScript Execution Model **

Before a single line of JavaScript "runs", the engine prepares an environment. This preparation phase is called **Memory Creation Phase** (or “Creation Phase”).

During this:

* Function declarations are fully hoisted.
* Variables declared with `var` are hoisted and initialized with `undefined`.
* Variables declared with `let` and `const` are hoisted but **not** initialized — they enter the **Temporal Dead Zone (TDZ)** until the code reaches their declaration.

This explains why accessing `let`/`const` before declaration causes an error.

---

Variables act as storage boxes that hold values your program may whisper to again and again. JavaScript offers several ways to declare these boxes, each with its own rules about where it can live and how it behaves.

---

### **1. Types of Variable Declarations **

Each declaration form represents a different philosophy:

**`var` – The Old Traveler**

* Function-scoped.
* Allows redeclaration and reassignments.
* Attached to `window` in browsers.
* Can lead to accidental overwrites.
* Hoisting often causes silent bugs.

**`let` – The Disciplined One**

* Block-scoped.
* Prevents redeclaration.
* Encourages predictable, tidy code.
* Respects the TDZ.

**`const` – The Guardian**

* Block-scoped.
* Must be initialized on declaration.
* Prevents reassignment (but contents of objects/arrays can still mutate).
* Encourages immutability patterns.

---

### **`var`**

* Function-scoped.
* Can be redeclared.
* Gets hoisted (declared at the top but not initialized).

### **`let`**

* Block-scoped.
* Cannot be redeclared in the same block.
* Hoisted but not usable until declaration (Temporal Dead Zone).

### **`const`**

* Block-scoped.
* Must be initialized during declaration.
* Cannot be reassigned.

---

## **2. Scope **

Scope is the region of the code where a variable is accessible. JavaScript uses **lexical scoping**, meaning scope is determined by where the variable sits in the code, not where it's called.

### **Global Scope (The Open Sky)**

* Available everywhere.
* Can clutter the namespace if overused.
* In browsers, global variables declared with `var` attach to `window`.

### **Function Scope (The Closed Room)**

* Variables declared with `var` inside a function stay confined to that function.
* Great for creating private data.

### **Block Scope (The Small Cabin)**

* Created by `{}`.
* `let` and `const` respect this quietly.
* Encourages cleaner, safer logic.

### **Lexical Scope (The Ladder of Access)**

* Inner functions inherit variables from outer functions.
* A key mechanism behind closures.

---

### **Closures (Deep Concept)**

A closure forms when an inner function keeps access to variables of its outer function even after the outer function has finished executing.

This enables:

* Private state.
* Encapsulation.
* Function factories.
* Debouncing, throttling, currying, etc.

Example:

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
c1(); // 1
c1(); // 2
```

Scope defines the region where your variables can be seen or used.

### **Types of Scope**

#### **Global Scope**

A variable declared outside any block or function. Available everywhere.

#### **Function Scope**

Variables declared inside a function. Accessible only inside that function.

#### **Block Scope**

Variables declared inside `{ }` using `let` or `const`. They live only inside the block.

#### **Lexical Scope**

Inner functions can access variables of their outer functions.

---

## **Practical Examples (Full Programs)**

### **Example 1: var vs let vs const**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  var a = 10;
  let b = 20;
  const c = 30;

  a = 15; // allowed
  b = 25; // allowed
  // c = 35; // not allowed

  console.log(a, b, c);
</script>
</body>
</html>
```

### **Example 2: Function Scope**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  function demo() {
    var x = 50;
    console.log("Inside function:", x);
  }

  demo();
  console.log(x); // Error
</script>
</body>
</html>
```

### **Example 3: Block Scope**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  if (true) {
    let y = 100;
    const z = 200;
    console.log(y, z);
  }

  console.log(y); // Error
  console.log(z); // Error
</script>
</body>
</html>
```

### **Example 4: Lexical Scope**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  function outer() {
    let message = "Hello from outer";

    function inner() {
      console.log(message);
    }

    inner();
  }

  outer();
</script>
</body>
</html>
```

---

## **Practice Tasks**

### **Task 1**

Create a program using `var`, `let`, and `const`. Try redeclaring each and observe the errors.

### **Task 2**

Write a function containing a variable. Try accessing it outside the function.

### **Task 3**

Use an `if` block and create two variables using `let` and `const`. Print them inside and outside the block.

### **Task 4**

Create a nested function and demonstrate lexical scope.

### **Task 5**

Declare a global variable, a function variable, and a block variable. Print them to understand scope differences.

---


