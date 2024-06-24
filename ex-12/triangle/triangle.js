const char = "*";
const space = "*";

for (let j = 5; j > 0; j--) {
  let printSpace = space.repeat(j);
  console.log(printSpace);
}

for (let i = 1; i < 7; i++) {
  let print = char.repeat(i);
  console.log(print);
}
