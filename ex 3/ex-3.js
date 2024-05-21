for (let i = 1; i <= 10; i++) {
  console.log(i + " * 2 is " + i * 2);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("the sum from 1 to 10 is " + sum);

const calculate = document.getElementById("calculate");
calculate.addEventListener("click", calculateSum);

function calculateSum() {
  let input = document.getElementById("search").value;
  let sum = 0;

  for (let i = 0; i <= input; i++) {
    sum += i;
  }

  let x = sum;

  if (x % 2 == 0) {
    x = " and is even";
  } else {
    x = " and is odd";
  }

  document.getElementById("result").innerHTML =
    "the sum of all the numbers from 0 to " + input + " is " + sum + x;
}

let arr = [12, 3, 20, 5, 8, 1, 0, 21];
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("Max: " + max + " Min: " + min);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
