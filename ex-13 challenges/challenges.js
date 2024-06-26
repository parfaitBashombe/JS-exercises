// print even numbers from 0-n
function printEvenNumbers(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      console.log({ even: i });
    }
  }
}
printEvenNumbers(15);

//print table a multiplication
function multiplicationTable(number) {
  for (let i = 0; i <= 10; i++) {
    console.log({ multi: `${number} * ${i} = ` + i * number });
  }
}
multiplicationTable(3);

// length converter function km in miles
function convertKmInMiles(length) {
  let result = length * 0.621371;
  console.log(`${length}km is ${result}  miles`);
}
convertKmInMiles(3);

//calculate the sum of numbers in a array
let array = [1, 12, 4, 6, 15, 8];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log({ sum: sum });

//reverse an array
function reverseArray(arrayToreverse) {
  return arrayToreverse.reverse();
}
console.log(reverseArray(array));
