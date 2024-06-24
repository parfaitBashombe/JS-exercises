const char = "*";
const space = "*";

for (let j = 6; j > 0; j--) {
  let printSpace = space.repeat(j);
  console.log(printSpace);
}

for (let i = 1; i < 7; i++) {
  let print = char.repeat(i);
  console.log(print);
}

var i;
var j;
for (i = 0; i <= 5; i++) {
  document.write("</br>");
  for (j = 0; j < 6 - i; j++) {
    document.write("&nbsp&nbsp");
  }
  for (j = 6 - i; j <= 5; j++) {
    document.write("*");
  }
}
