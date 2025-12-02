# **Lecture 2 – Browser Object Model (BOM)**

## **Theory**

BOM represents the browser's environment around your webpage — the larger universe your JavaScript can peek into. Unlike the DOM, which deals with elements inside the page, BOM gives JS access to the browser window, navigation history, dialogs, and more.

### **1. `window` Object**

* Global object in the browser.
* All global variables and functions become properties of `window`.
* Provides methods like `setTimeout`, `setInterval`, `alert`, etc.
* You can access it directly or implicitly.

### **2. `history` Object**

* Lets you interact with browser navigation history.
* Mostly used for `back()` and `forward()`.
* Helpful in SPAs for navigation control.

### **3. Navigation (`location`)**

* `window.location` allows you to:

  * Get current URL.
  * Redirect to another page.
  * Reload the current page.

### **4. Dialogs**

Basic browser pop-ups provided by BOM:

* `alert()` – show a message.
* `prompt()` – take user input.
* `confirm()` – return true/false based on user choice.

---

## **Practical Examples (Full Programs)**

### **Example 1: Working with `window`**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  console.log(window.innerWidth);
  console.log(window.innerHeight);

  window.myName = "Chetan";
  console.log(myName);
</script>
</body>
</html>
```

### **Example 2: Using `history`**

```html
<!DOCTYPE html>
<html>
<body>
<button onclick="history.back()">Go Back</button>
<button onclick="history.forward()">Go Forward</button>
</body>
</html>
```

### **Example 3: Navigating with `location`**

```html
<!DOCTYPE html>
<html>
<body>
<button onclick="window.location.href='https://google.com'">Go to Google</button>
<button onclick="location.reload()">Reload Page</button>
</body>
</html>
```

### **Example 4: Dialogs**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  alert("Welcome to Lecture 2");

  let name = prompt("What is your name?");
  console.log("User entered:", name);

  let decision = confirm("Do you want to continue?");
  console.log("User decision:", decision);
</script>
</body>
</html>
```

---

## **Practice Tasks**

### **Task 1**

Display the browser's width and height on the screen using the `window` object.

### **Task 2**

Create two buttons: one for going back and one for going forward using the `history` object.

### **Task 3**

Build a page that redirects the user to another URL after 5 seconds (use `setTimeout` + `location.href`).

### **Task 4**

Ask the user for two numbers using `prompt()`, add them, and show the result using `alert()`.

### **Task 5**

Create a confirm box:

* If user selects OK → show "You accepted".
* If user selects Cancel → show "You cancelled".

---


