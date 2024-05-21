for (let i = 1; i <= 10; i++) {
  document.getElementById("result").innerHTML = i + " * 2 is " + i * 2;
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("the sum from 1 to 10 is " + sum);

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log("");
  } else {
    console.log("the sum from 1 to 10 is " + (i * (i + 1)) / 2);
  }
}

const calculate = document.getElementById("calculate");
calculate.addEventListener("click", calculateSum);
const search = document.querySelector(".search").value;

function calculateSum() {
  let input = document.getElementById("search").value;
  let sum = 0;
  sum = (input * (input + 1)) / 2;
  document.getElementById("result").innerHTML =
    "the sum of all the numbers from 0 to " + input + " is " + sum;
}
