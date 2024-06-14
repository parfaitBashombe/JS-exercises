const numbers = [3, 2, 1];
const newFirstNumber = [6, 5, 4];

const veryNew = newFirstNumber.concat(numbers);
console.log({ newArray: veryNew });

const obj = {
  x: 4,
  y: numbers,
};

console.log(obj.y[2]);

const students = [
  { name: "Alliance", score: 80, grade: "A", address: ["Q. A", "Q. B"] },
  { name: "Alliance", score: 80, grade: "A" },
  { name: "Alliance", score: 80, grade: "A" },
];

// => [ 3, 2, 1, 4 ]
const modified = numbers.concat(newFirstNumber);
console.log(modified);

// loop javascript While
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("For loop");

for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

// Reverse loop
const fruits = ["apple", "orange", "banana", "avocado"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruits[i]}`);
}
// => 2. banana
// => 1. orange
// => 0. apple

// Do...While statement
x = 0;
i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5);
// => 0 1 3 6 10

// for loop
for (let i = 0; i < 4; i++) {
  console.log(i);
}
// => 0, 1, 2, 3

// looping through arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// => Every item in the array

// break
for (let i = 0; i < 99; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}
// => 0 1 2 3 4 5

// continue
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  let text = "";
  text += "The number is " + i;
  console.log(text);
}

// nested
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log({ nested: `${i}-${j}` });
  }
}

// for...in loop

for (let index in fruits) {
  console.log({ name: fruits[index] });
}
// => 0
// => 1
// => 2

// for..of loop
for (let fruit of fruits) {
  console.log({ fruit });
}

// functions assigned to variables
let plusFive = (number) => {
  return number + 5;
};
let f = plusFive;

console.log(plusFive(3));
console.log(f(9));

// callback functions
const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`);
};

printMsg(isEven, 4);

// array method .reduce()
const numberss = [1, 2, 3, 4];

const sum = numberss.reduce((accumulator, curVal) => {
  return accumulator + curVal;
});

console.log(sum);

const scores = [1, 2, 3, 4, 5];

let sumScore = 0;

for (let i = 0; i < scores.length; i++) {
  sumScore += scores[i];
}
console.log({ sumScore });

const sumReduce = scores.reduce((sum, current) => {
  return sum + current;
});

console.log({ sumReduce });
