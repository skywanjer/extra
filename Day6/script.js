let arr = [1, 23, 3, 3, 3, 33, 7];

// Calculate the sum of all elements in the array
let totalSum = arr.reduce((x, y) => x + y, 0);
console.log(totalSum); // Output: 70

// Calculate the sum of even numbers in the array
let evenSum = arr.filter((x) => x % 2 === 0).reduce((x, y) => x + y, 0);
console.log(evenSum); // Output: 0
