for (let i = 1; i <= 10; i++) {
  console.log(i + " * 2 is " + i * 2);
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

function summ(i) {
  let sum = 0;
  sum = (i * (i + 1)) / 2;
  console.log("the sum of all the numbers from 0 to " + i + " is " + sum);
}
summ(2);
