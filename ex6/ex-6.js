let count = 1;
total = 0;

while (count <= 10) {
  total += count;
  count++;
}

console.log(total);

function factorial(n) {
  let result = 1;
  if (n == 0) {
    return result;
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
