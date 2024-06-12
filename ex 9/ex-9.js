const numbers = [3, 2, 1];
const newFirstNumber = [6, 5, 4];
// => [ 4, 3, 2, 1 ]
const veryNew = newFirstNumber.concat(numbers);
console.log(veryNew);
// => [ 3, 2, 1, 4 ]
const modified = numbers.concat(newFirstNumber);
console.log(modified);
