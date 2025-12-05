# **Lecture 5 – Operators in JavaScript (In-depth)**

## **Theory**

Operators are symbols or keywords that tell JavaScript to perform specific operations on **operands** (values or variables). JavaScript supports a variety of operators, categorized based on their functionality.

---

## **1. Arithmetic Operators**

Used for mathematical operations.

| Operator | Description         | Example            |
| -------- | ------------------- | ------------------ |
| +        | Addition            | 5 + 3 → 8          |
| -        | Subtraction         | 5 - 3 → 2          |
| *        | Multiplication      | 5 * 3 → 15         |
| /        | Division            | 6 / 3 → 2          |
| %        | Modulus (Remainder) | 5 % 2 → 1          |
| **       | Exponentiation      | 2 ** 3 → 8         |
| ++       | Increment           | let x = 5; x++ → 6 |
| --       | Decrement           | let x = 5; x-- → 4 |

---

## **2. Assignment Operators**

Assign values to variables.

| Operator | Description         | Example            |
| -------- | ------------------- | ------------------ |
| =        | Assign              | x = 5              |
| +=       | Add and assign      | x += 5 → x = x + 5 |
| -=       | Subtract and assign | x -= 2 → x = x - 2 |
| *=       | Multiply and assign | x *= 3             |
| /=       | Divide and assign   | x /= 2             |
| %=       | Modulus and assign  | x %= 3             |
| **=      | Exponent and assign | x **= 2            |

---

## **3. Comparison Operators**

Used to compare values; return **boolean** (true/false).

| Operator | Description                 | Example           |
| -------- | --------------------------- | ----------------- |
| ==       | Equal (value only)          | 5 == '5' → true   |
| ===      | Strict Equal (value & type) | 5 === '5' → false |
| !=       | Not equal (value only)      | 5 != '5' → false  |
| !==      | Strict not equal            | 5 !== '5' → true  |
| >        | Greater than                | 5 > 3 → true      |
| <        | Less than                   | 5 < 3 → false     |
| >=       | Greater or equal            | 5 >= 5 → true     |
| <=       | Less or equal               | 5 <= 3 → false    |

---

## **4. Logical Operators**

Combine boolean values.

| Operator | Description | Example               |    |      |   |              |
| -------- | ----------- | --------------------- | -- | ---- | - | ------------ |
| &&       | AND         | true && false → false |    |      |   |              |
|          |             |                       | OR | true |   | false → true |
| !        | NOT         | !true → false         |    |      |   |              |

---

## **5. String Operators**

| Operator | Description   | Example                            |
| -------- | ------------- | ---------------------------------- |
| +        | Concatenation | "Hello" + " World" → "Hello World" |
| +=       | Append        | let str = "Hi"; str += "!" → "Hi!" |

---

## **6. Conditional (Ternary) Operator**

Shorthand for `if-else`.

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
```

---

## **7. Type Operators**

* `typeof` → returns type of operand.
* `instanceof` → checks object type.

```js
console.log(typeof 10); // "number"
console.log([] instanceof Array); // true
```

---

## **8. Bitwise Operators**

Work on binary representations of numbers.

| Operator | Description           | Example     |   |       |
| -------- | --------------------- | ----------- | - | ----- |
| &        | AND                   | 5 & 1 → 1   |   |       |
|          |                       | OR          | 5 | 1 → 5 |
| ^        | XOR                   | 5 ^ 1 → 4   |   |       |
| ~        | NOT                   | ~5 → -6     |   |       |
| <<       | Left shift            | 5 << 1 → 10 |   |       |
| >>       | Right shift           | 5 >> 1 → 2  |   |       |
| >>>      | Zero-fill right shift | 5 >>> 1 → 2 |   |       |

---

## **Practical Examples (Full Programs)**

### **Example 1: Arithmetic & Assignment**

```html
<script>
let a = 10;
a += 5; // 15
a++; // 16
a **= 2; // 256
console.log(a);
</script>
```

### **Example 2: Comparison & Logical**

```html
<script>
let x = 10;
let y = '10';
console.log(x == y); // true
console.log(x === y); // false
console.log(x > 5 && y == 10); // true
</script>
```

### **Example 3: String & Ternary**

```html
<script>
let name = "Chetan";
let greeting = (name === "Chetan") ? "Hello Chetan" : "Hello Guest";
console.log(greeting);
</script>
```

### **Example 4: Type & instanceof**

```html
<script>
console.log(typeof 100); // number
console.log([] instanceof Array); // true
</script>
```

### **Example 5: Bitwise Operators**

```html
<script>
let a = 5; // 0101
let b = 3; // 0011
console.log(a & b); // 1
console.log(a | b); // 7
console.log(a ^ b); // 6
</script>
```

---

## **Practice Tasks**

### **Task 1**

Create a program demonstrating each arithmetic operator.

### **Task 2**

Create two variables and use all assignment operators.

### **Task 3**

Use comparison and logical operators to check age eligibility.

### **Task 4**

Use string concatenation with `+` and `+=`.

### **Task 5**

Demonstrate ternary operator to print whether a number is even or odd.

### **Task 6**

Use `typeof` and `instanceof` for different variables.



---

