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
let arrays = [1, 12, 4, 6, 15, 8];
let sum = 0;

for (let i = 0; i < arrays.length; i++) {
  sum += arrays[i];
}
console.log({ sum: sum });

//reverse an array
function reverseArray(arrayToreverse) {
  return arrayToreverse.toReversed();
}
console.log({ reversed: reverseArray(arrays) });

// sort an array from the lowest to higest
console.log({
  sort: arrays.toSorted(function (a, b) {
    return a - b;
  }),
});

//function that filters out negative numbers
let array2 = [1, 12, 4, -6, -15, 8];
function filterNegativeNumbers(filter) {
  const positiveArray = [];
  for (array of filter) {
    // let index = filter.indexOf(array);?
    if (array > 0) {
      //   filter.splice(index, 1);
      positiveArray.push(array);
    }
  }
  console.log({ filter: positiveArray });
  return positiveArray;
}
filterNegativeNumbers(array2);
