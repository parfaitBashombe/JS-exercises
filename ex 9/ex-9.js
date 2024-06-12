const numbers = [3, 2, 1];
const newFirstNumber = [6, 5, 4];
// => [ 4, 3, 2, 1 ]
const veryNew = newFirstNumber.concat(numbers);
console.log(veryNew);
// => [ 3, 2, 1, 4 ]
const modified = numbers.concat(newFirstNumber);
console.log(modified);

// loop javascript While
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Reverse loop
const fruits = ["apple", "orange", "banana"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruits[i]}`);
}
// => 2. banana
// => 1. orange
// => 0. apple

x = 0;
i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5);
// => 0 1 3 6 10
