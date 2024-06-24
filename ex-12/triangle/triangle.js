const char = "*";
const space = "$".repeat(7);

for (let i = 1; i < 7; i++) {
  let printSpace = space;
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
