# Lecture 6 — String Methods, Number Methods, Math Methods

## Theory

### 1. String Methods

String methods help you manipulate and work with text. Common methods include:

* **length** — returns string length.
* **toUpperCase() / toLowerCase()** — convert text case.
* **trim()** — removes extra spaces.
* **slice(start, end)** — extracts part of a string.
* **substring(start, end)** — similar to slice but doesn't accept negative values.
* **replace(old, new)** — replaces first occurrence.
* **replaceAll(old, new)** — replaces all occurrences.
* **includes(value)** — checks if substring exists.
* **indexOf(value)** — returns index of substring.
* **split(separator)** — converts string to array.

---

### 2. Number Methods

Number methods help you format, convert, or validate numbers.

* **toString()** — converts number to string.
* **toFixed(n)** — rounds number to `n` decimals.
* **toPrecision(n)** — formats number to `n` significant digits.
* **parseInt()** — converts a string to integer.
* **parseFloat()** — converts a string to decimal.
* **Number()** — converts any value to number.
* **isNaN()** — checks if value is Not-a-Number.

---

### 3. Math Methods

The `Math` object provides mathematical functions.

* **Math.round(x)** — rounds to nearest integer.
* **Math.floor(x)** — rounds down.
* **Math.ceil(x)** — rounds up.
* **Math.abs(x)** — returns absolute value.
* **Math.sqrt(x)** — square root.
* **Math.pow(a, b)** — power.
* **Math.random()** — generates random number (0 to 1).
* **Math.max(...values)** — highest value.
* **Math.min(...values)** — lowest value.

---

## Practical Examples (Full Programs)

### Example 1 — String Methods

```javascript
const text = "   Hello JavaScript World   ";
console.log("Length:", text.length);
console.log("Trim:", text.trim());
console.log("Uppercase:", text.toUpperCase());
console.log("Slice (0, 5):", text.slice(0, 5));
console.log("Includes 'World':", text.includes("World"));
console.log("Replace:", text.replace("World", "Developers"));
```

### Example 2 — Number Methods

```javascript
let num = 25.6789;
console.log(num.toFixed(2));
console.log(num.toPrecision(3));
console.log(Number("200"));
console.log(parseInt("45px"));
console.log(parseFloat("123.45 kg"));
console.log(isNaN("hello"));
```

### Example 3 — Math Methods

```javascript
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.abs(-50));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 5));
console.log(Math.random());
console.log(Math.max(10, 50, 3));
console.log(Math.min(10, 50, 3));
```

---

## Practice Tasks

### Task 1 — String

Take a string: `"JavaScript is amazing"`

* Convert to uppercase
* Check if it includes `"Script"`
* Replace `"amazing"` with `"powerful"`
* Print its length

### Task 2 — Number

Given: `num = 56.78945`

* Convert to 3 decimal places
* Convert to a string
* Extract integer part using any method

### Task 3 — Math

* Generate a random number between 1 and 100
* Find square root of 144
* Find max and min from: 34, 99, 12, 5, 88

---

Let me know if you want more examples or exercises added.
