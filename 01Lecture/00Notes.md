# JavaScript Lecture 1 — Introduction

## 1. Theory

### What is JavaScript?

JavaScript is a high‑level, dynamic programming language used to make web pages interactive. It runs directly in the browser and is one of the core technologies of the web alongside HTML and CSS.

### Why JavaScript?

* It powers most modern websites.
* It is beginner‑friendly yet extremely powerful.
* It works on both frontend and backend (with Node.js).
* It has a huge ecosystem of libraries and frameworks.

### Where Does JavaScript Run?

JavaScript runs:

* In the browser (Chrome, Firefox, Edge, etc.)
* On servers using Node.js

### How JavaScript Works in a Web Page

A JavaScript file can be added to an HTML page using:

```html
<script src="app.js"></script>
```

or written directly inside:

```html
<script>
  console.log("Hello");
</script>
```

### JavaScript Syntax Basics

* Statements end with semicolons (optional but recommended).
* JavaScript is case‑sensitive.
* Code runs from top to bottom.

### `console.log()`

This is used to print output to the browser console and is one of the most important tools for beginners.

---

## 2. Practical Examples 

### Example 1: Printing a Message

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Intro</title>
</head>
<body>
  <script>
    console.log("Welcome to JavaScript");
  </script>
</body>
</html>
```

### Example 2: Simple Variables

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    let name = "John";
    let age = 20;

    console.log(name);
    console.log(age);
  </script>
</body>
</html>
```

### Example 3: Alert Box

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    alert("This is your first JS alert!");
  </script>
</body>
</html>
```

---

## 3. Practical Tasks

### Task 1

Write a JS program (inside an HTML file) that prints your name in the console.

### Task 2

Create two variables: `city` and `pincode`. Print them using `console.log()`.

### Task 3

Show an alert message saying "JavaScript Started".

### Task 4

Experiment by writing 3 different `console.log()` lines that print:

* A number
* A string
* A message that combines both

### Task 5

Try adding your script in two different ways:

* Inside the HTML file
* As an external `app.js` file

---

## 4. Additional Terminology 

* **Browser**
* **Console**
* **Script Tag**
* **Syntax**
* **Statement**
* **Variable**
* **Runtime**
* **Compiler/Interpreter**
* **Error Message**
* **Developer Tools**

---

## 5. R&D Tasks 


1. Search “What is JavaScript used for today?” and note 3 real uses.
2. Explore any website using **Inspect → Elements** and see the HTML structure.
3. Search “Who created JavaScript?” and write the answer.
4. Check the official JavaScript documentation (MDN) homepage.
5. Explore browser console and find any error on any webpage.
6. Research difference between **HTML, CSS, JS**.
7. Find what frameworks are built on JavaScript (React, Angular, etc.).
8. Read what *Dynamic Website* means.
9. Search how JavaScript changed the web.
10. Explore what Node.js is and where it runs.

---

## 6. Student Tasks 


1. Create a simple webpage with a heading and paragraph.
2. Add an external CSS file and style the heading.
3. Add a `<script>` tag (empty for now) to your HTML.
4. Open DevTools and print anything in the console.
5. Try to understand an error by breaking your HTML intentionally.
6. Create a project folder with proper structure (css / js / images).
7. Find out what version of Chrome/Firefox you are using.
8. Create a simple HTML form (name, email).
9. Visit MDN and read the “JavaScript First Steps” page.
10. Take notes on what you learned about the web and browsers.
