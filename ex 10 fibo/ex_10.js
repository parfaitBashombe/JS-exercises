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
];
console.log({ fibonacci: fib10 });

//fib
let i;
const fibb=[0,1];

for(i=2;i<=19;i++){
  fibb[i]=fibb[i-1]+fibb[i-2]  
console.log(fib[i])
}

//find name

const list = ["John", "Jules", "Elvis", "Martin", "Tony", "Jospin"];

for (let i = 0; i < list.length; i++) {
  let result = list[i];
  let name = "John";
  if (result === name) {
    console.log(`the location of ${result} is list.[${i}]`);
    break;
  } else {
    console.log("Does not exit");
  }
}

let numbers = 32243;

function reverseFunction() {
  return numbers.toString().split("").reverse().join("");
}

console.log(reverseFunction());

function binaryIn2(n) {
  return (n >>> 0).toString(2);
}

console.log(binaryIn2(20));
