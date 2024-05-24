let count = 1;
total = 1;

while (count <= 5) {
  total *= count;
  count++;
}
count--;

console.log(`the factorial of ${count} is ${total}`);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const num = prompt("enter a positive number :");

if (num >= 0) {
  const result = factorial(num);
  console.log(`the factorial of ${num} is ${result}`);
} else {
  console.log("enter a positive number.");
}
