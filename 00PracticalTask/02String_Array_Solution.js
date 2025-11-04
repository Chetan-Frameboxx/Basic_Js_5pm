//----------------------------------
// String Method Tasks
//----------------------------------

// 1. Find the length of a given string.
let str = "JavaScript is awesome!";
console.log("Length:", str.length);

// 2. Convert a string to uppercase and lowercase.
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// 3. Extract a part of a string using slice().
console.log("Slice (0-10):", str.slice(0, 10));

// 4. Replace a specific word in a string using replace().
let replacedStr = str.replace("awesome", "powerful");
console.log("Replaced:", replacedStr);

// 5. Check whether a substring exists in a string using includes().
console.log("Includes 'Script':", str.includes("Script"));

// 6. Find the position of a substring using indexOf() and lastIndexOf().
let text = "Learn JavaScript and love JavaScript!";
console.log("indexOf 'JavaScript':", text.indexOf("JavaScript"));
console.log("lastIndexOf 'JavaScript':", text.lastIndexOf("JavaScript"));

// 7. Remove extra spaces from both ends of a string using trim().
let messy = "   Hello World!   ";
console.log("Trimmed:", messy.trim());

// 8. Split a sentence into words using split().
let sentence = "JavaScript makes web development fun";
let words = sentence.split(" ");
console.log("Split into words:", words);

// 9. Concatenate two strings using concat().
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2, "!");
console.log("Concatenated:", result);

// 10. Retrieve a specific character from a string using charAt() and its Unicode using charCodeAt().
let word = "JavaScript";
console.log("Character at index 4:", word.charAt(4));
console.log("Unicode of index 4:", word.charCodeAt(4));


//----------------------------------
// Array Method Tasks
//----------------------------------

// 11. Create an array and find its length.
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Length:", fruits.length);

// 12. Add elements to the end and beginning of an array using push() and unshift().
fruits.push("Grapes");
fruits.unshift("Pineapple");
console.log("After push & unshift:", fruits);

// 13. Remove elements from the end and beginning of an array using pop() and shift().
fruits.pop();
fruits.shift();
console.log("After pop & shift:", fruits);

// 14. Sort an array of strings alphabetically using sort().
let names = ["Shyam", "Arun", "Ram", "Kiran"];
names.sort();
console.log("Sorted:", names);

// 15. Reverse the order of elements in an array using reverse().
names.reverse();
console.log("Reversed:", names);

// 16. Join all array elements into a single string using join().
console.log("Joined:", names.join(", "));

// 17. Find the index of a specific element in an array using indexOf().
console.log("Index of 'Ram':", names.indexOf("Ram"));

// 18. Check if an element exists in an array using includes().
console.log("Includes 'Arun':", names.includes("Arun"));

// 19. Extract a portion of an array using slice().
let sliced = names.slice(1, 3);
console.log("Sliced (1-3):", sliced);

// 20. Replace or remove elements in an array using splice().
let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 2, "Black", "White");  // Remove 2 elements from index 1 and add 2 new ones
console.log("After splice:", colors);
