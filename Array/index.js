// Here are some commonly used JavaScript array methods with simple examples:

// 1. push()
// Adds one or more elements to the end of an array and returns the new length of the array.

// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // Output: [1, 2, 3, 4]
// 2. pop()
// Removes the last element from an array and returns that element.

// javascript
// Copy code
// let arr = [1, 2, 3];
// let lastElement = arr.pop();
// console.log(lastElement); // Output: 3
// console.log(arr); // Output: [1, 2]
// 3. shift()
// Removes the first element from an array and returns that element.

// javascript
// Copy code
// let arr = [1, 2, 3];
// let firstElement = arr.shift();
// console.log(firstElement); // Output: 1
// console.log(arr); // Output: [2, 3]
// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.

// javascript
// Copy code
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // Output: [1, 2, 3]
// 5. concat()
// Combines two or more arrays and returns a new array.

// javascript
// Copy code
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);
// console.log(newArr); // Output: [1, 2, 3, 4]
// 6. join()
// Joins all elements of an array into a string with a specified separator.

// javascript
// Copy code
// let arr = ["apple", "banana", "cherry"];
// console.log(arr.join(", ")); // Output: "apple, banana, cherry"
// 7. slice()
// Returns a shallow copy of a portion of an array into a new array, selected from start index to end index (not inclusive).

// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 3);
// console.log(slicedArr); // Output: [2, 3]
// 8. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, "a", "b");
// console.log(arr); // Output: [1, "a", "b", 4]
// 9. forEach()
// Executes a provided function once for each array element.

// javascript
// Copy code
// let arr = [1, 2, 3];
// arr.forEach(function(element) {
//   console.log(element); // Output: 1, 2, 3
// });
// 10. map()
// Creates a new array with the results of calling a provided function on every element in the array.

// javascript
// Copy code
// let arr = [1, 2, 3];
// let squared = arr.map(x => x * x);
// console.log(squared); // Output: [1, 4, 9]
// 11. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.

// javascript
// Copy code
// let arr = [1, 2, 3, 4, 5];
// let evenNumbers = arr.filter(x => x % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]
// 12. reduce()
// Executes a reducer function on each element of the array (from left to right) to accumulate a single result.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 10
// 13. find()
// Returns the first element in the array that satisfies the provided testing function.

// javascript
// Copy code
// let arr = [5, 12, 8, 130, 44];
// let found = arr.find(element => element > 10);
// console.log(found); // Output: 12
// 14. some()
// Tests whether at least one element in the array passes the provided testing function.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// let hasEven = arr.some(x => x % 2 === 0);
// console.log(hasEven); // Output: true
// 15. every()
// Tests whether all elements in the array pass the provided testing function.

// javascript
// Copy code
// let arr = [2, 4, 6, 8];
// let allEven = arr.every(x => x % 2 === 0);
// console.log(allEven); // Output: true
// 16. sort()
// Sorts the elements of an array in place and returns the sorted array.

// javascript
// Copy code
// let arr = [5, 3, 8, 1];
// arr.sort((a, b) => a - b);
// console.log(arr); // Output: [1, 3, 5, 8]
// 17. reverse()
// Reverses the order of the elements in an array.

// javascript
// Copy code
// let arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr); // Output: [4, 3, 2, 1]