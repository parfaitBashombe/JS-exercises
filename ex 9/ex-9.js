const numbers = [3, 2, 1];
const newFirstNumber = 4;
// => [ 4, 3, 2, 1 ]
[newFirstNumber].concat(numbers);
console.log(numbers);

// => [ 3, 2, 1, 4 ]
numbers.concat(newFirstNumber);
console.log(numbers);
