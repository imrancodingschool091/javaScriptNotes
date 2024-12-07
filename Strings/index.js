// // Here are some commonly used JavaScript string methods with simple examples:

// // 1. length
// // Returns the length of a string (number of characters).

// // javascript
// // Copy code
// let str = "Hello, World!";
// console.log(str.length); // Output: 13
// 2. toUpperCase()
// Converts the string to uppercase.

// javascript
// Copy code
// let str = "hello";
// console.log(str.toUpperCase()); // Output: "HELLO"
// 3. toLowerCase()
// Converts the string to lowercase.

// javascript
// Copy code
// let str = "HELLO";
// console.log(str.toLowerCase()); // Output: "hello"
// 4. charAt()
// Returns the character at the specified index.

// javascript
// Copy code
// let str = "JavaScript";
// console.log(str.charAt(4)); // Output: "S"
// 5. indexOf()
// Returns the index of the first occurrence of a specified value. Returns -1 if not found.

// javascript
// Copy code
// let str = "I love JavaScript";
// console.log(str.indexOf("JavaScript")); // Output: 7
// console.log(str.indexOf("Python")); // Output: -1
// 6. slice()
// Extracts a section of a string and returns a new string.

// javascript
// Copy code
// let str = "JavaScript";
// console.log(str.slice(0, 4)); // Output: "Java"
// console.log(str.slice(4));    // Output: "Script"
// 7. substring()
// Similar to slice(), but does not accept negative indexes.

// javascript
// Copy code
// let str = "JavaScript";
// console.log(str.substring(0, 4)); // Output: "Java"
// console.log(str.substring(4));    // Output: "Script"
// 8. replace()
// Replaces a specified value with another value. Only replaces the first occurrence by default.

// javascript
// Copy code
// let str = "I love JavaScript";
// console.log(str.replace("love", "enjoy")); // Output: "I enjoy JavaScript"
// 9. split()
// Splits a string into an array of substrings based on a specified delimiter.

// javascript
// Copy code
// let str = "apple,banana,cherry";
// let fruits = str.split(",");
// console.log(fruits); // Output: ["apple", "banana", "cherry"]
// 10. trim()
// Removes whitespace from both ends of a string.

// javascript
// Copy code
// let str = "   Hello World!   ";
// console.log(str.trim()); // Output: "Hello World!"
// 11. concat()
// Combines two or more strings into one string.

// javascript
// Copy code
// let str1 = "Hello";
// let str2 = "World!";
// console.log(str1.concat(" ", str2)); // Output: "Hello World!"
// 12. includes()
// Checks if a string contains a specified substring, returns true or false.

// javascript
// Copy code
// let str = "I love JavaScript";
// console.log(str.includes("love"));  // Output: true
// console.log(str.includes("Python")); // Output: false
// 13. repeat()
// Repeats the string a specified number of times.

// javascript
// Copy code
// let str = "abc";
// console.log(str.repeat(3)); // Output: "abcabcabc"
// 14. startsWith()
// Checks if a string starts with a specified substring.

// javascript
// Copy code
// let str = "JavaScript is great!";
// console.log(str.startsWith("Java"));  // Output: true
// console.log(str.startsWith("Python")); // Output: false
// 15. endsWith()
// Checks if a string ends with a specified substring.

// javascript
// Copy code
// let str = "JavaScript is great!";
// console.log(str.endsWith("great!"));  // Output: true
// console.log(str.endsWith("Java"));    // Output: false