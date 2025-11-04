// 1. Display a welcome message using a variable.
let message = "Welcome to JavaScript!";
console.log(message);

// 2. Create variables with different data types and check their types.
let name = "Chetan";
let age = 25;
let isStudent = true;
let marks = null;
let address;
console.log(typeof name, typeof age, typeof isStudent, typeof marks, typeof address);

// 3. Convert a string value to a number.
let str = "123";
let num = Number(str);
console.log(num, typeof num);

// 4. Round a decimal value using number methods.
let value = 5.6789;
console.log(Math.round(value));
console.log(Math.floor(value));
console.log(Math.ceil(value));

// 5. Generate a random number between 1 and 100.
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// 6. Find the square and cube of a number.
let n = 4;
console.log("Square:", n ** 2);
console.log("Cube:", n ** 3);

// 7. Find the maximum and minimum from a given list of numbers.
let nums = [12, 45, 7, 89, 23];
console.log("Max:", Math.max(...nums));
console.log("Min:", Math.min(...nums));

// 8. Check whether a number is even or odd.
let number = 9;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 9. Convert temperature from Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// 10. Calculate simple interest using given values.
let p = 1000, r = 5, t = 2;
let si = (p * r * t) / 100;
console.log("Simple Interest:", si);

// 11. Compare two numbers using comparison operators.
let a = 10, b = 20;
console.log(a > b);
console.log(a < b);
console.log(a == b);

// 12. Store the result of a comparison and check its data type.
let result = (a > b);
console.log(result, typeof result);

// 13. Convert a number to a string.
let numVal = 123;
let strVal = numVal.toString();
console.log(strVal, typeof strVal);

// 14. Round a number to two decimal places.
let val = 7.6789;
console.log(val.toFixed(2));

// 15. Find the absolute difference between two numbers.
let x = 10, y = 25;
console.log("Absolute Difference:", Math.abs(x - y));

// 16. Calculate the area of a circle using radius.
let radius = 7;
let area = Math.PI * radius ** 2;
console.log("Area of Circle:", area.toFixed(2));

// 17. Use increment and decrement operators on a variable.
let count = 10;
count++;
console.log("After increment:", count);
count--;
console.log("After decrement:", count);

// 18. Check the data type before and after converting a string to a number.
let strNum = "456";
console.log(typeof strNum);
let convertedNum = Number(strNum);
console.log(typeof convertedNum);

// 19. Use compound assignment operators to update a variable.
let score = 50;
score += 10;
score -= 5;
score *= 2;
score /= 3;
console.log("Final Score:", score);

// 20. Find the square root and cube root of a number.
let z = 64;
console.log("Square Root:", Math.sqrt(z));
console.log("Cube Root:", Math.cbrt(z));
