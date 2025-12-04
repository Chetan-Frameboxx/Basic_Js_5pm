# **Lecture 4 – Data Types **

## **Theory**

JavaScript is a **dynamically typed**, **loosely typed** language — meaning you don't need to declare the type of a variable, and a variable can hold different types at different times.

JavaScript categorizes data types into **Primitive** and **Non-Primitive (Reference)** types.

---

## **1. Primitive Data Types (Immutable)**

These values are stored directly in the memory location assigned to the variable. They are **copied by value**.

### **a. Number**

Represents both integers and floating-point numbers.

* Supports `NaN`, `Infinity`, `-Infinity`.
* Uses IEEE-754 double-precision format.

```js
let x = 100;
let y = 3.14;
```

### **b. String**

Sequence of characters.

* Immutable.
* Can be declared using '', "", or backticks (template literals).

```js
let name = "Chetan";
```

### **c. Boolean**

Represents logical values.

```js
let isLoggedIn = true;
```

### **d. Undefined**

A variable declared but not assigned.

```js
let a;
console.log(a); // undefined
```

### **e. Null**

Intentional absence of value.

```js
let data = null;
```

### **f. BigInt**

Used for large integers beyond `Number.MAX_SAFE_INTEGER`.

```js
let big = 12345678901234567890n;
```

### **g. Symbol**

Unique and immutable identifier.

```js
let id = Symbol("userId");
```

---

## **2. Non-Primitive Data Types (Reference Types)**

Stored as references (pointers) in memory. Copied by **reference**, not value.

### **a. Object**

Collection of key–value pairs.

```js
let user = {
  name: "Chetan",
  age: 25
};
```

### **b. Array**

Indexed list of values.

```js
let marks = [10, 20, 30];
```

### **c. Function**

A callable object.

```js
function greet() {
  console.log("Hello");
}
```

### **d. Date, RegExp, Map, Set**

Specialized objects for specific use cases.

---

## **3. Dynamic Typing (In-depth)**

A variable can change its data type on the fly.

```js
let variable = "Hello";
variable = 50; // Now it's a number
```

This flexibility is powerful but can also cause bugs if not handled cautiously.

---

## **4. Type Checking**

### **typeof Operator**

Used to check the type of a value.

```js
typeof 10;         // "number"
typeof "Hi";       // "string"
typeof null;       // "object" (bug in JS)
typeof undefined;  // "undefined"
```

### **Array Checking**

```js
Array.isArray([1,2,3]); // true
```

### **Check for null**

```js
value === null;
```

---

## **5. Type Conversion (Explicit & Implicit)**

### **a. Implicit Conversion (Type Coercion)**

JS automatically converts types.

```js
"5" + 1;  // "51"
"5" - 1;  // 4
true + 2; // 3
```

### **b. Explicit Conversion**

```js
Number("10"); // 10
String(50);   // "50"
Boolean(0);   // false
```

---

## **Practical Examples (Full Programs)**

### **Example 1: Checking Types**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  let a = 10;
  let b = "Hello";
  let c = null;
  let d;

  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  console.log(typeof d);
</script>
</body>
</html>
```

### **Example 2: Reference vs Value Behavior**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  let x = 10;
  let y = x;
  y = 20;
  console.log(x, y);

  let obj1 = {name: "Chetan"};
  let obj2 = obj1;
  obj2.name = "Sharma";
  console.log(obj1.name, obj2.name);
</script>
</body>
</html>
```

### **Example 3: Type Conversion**

```html
<!DOCTYPE html>
<html>
<body>
<script>
  console.log(Number("15"));
  console.log(String(30));
  console.log(Boolean(""));

  console.log("5" + 5);
  console.log("5" - 2);
</script>
</body>
</html>
```

---

## **Practice Tasks**

### **Task 1**

Create variables for each primitive type and log their types.

### **Task 2**

Create an object and an array. Modify both in another variable reference and observe the changes.

### **Task 3**

Demonstrate implicit type coercion using +, -, *, /.

### **Task 4**

Create a program that converts user input (from `prompt`) into a number and checks if it's valid.

### **Task 5**

Create three variables and change their types dynamically during execution.

---

