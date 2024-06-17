// fibonacci

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
fib10 = [
  fibonacci(0),
  fibonacci(1),
  fibonacci(2),
  fibonacci(3),
  fibonacci(4),
  fibonacci(5),
  fibonacci(6),
  fibonacci(7),
  fibonacci(8),
  fibonacci(9),
  fibonacci(10),
];
console.log({ fibonacci: fib10 });

//find name

const list = ["John", "Jules", "Elvis", "Martin", "Tony", "Jospin"];

for (let i = 0; i < list.length; i++) {
  let result = list[i];
  let n = "Jospin";
  if (result == n) {
    console.log(`the location of ${result} is list.[${i}]`);
  } else {
    continue;
  }
}
