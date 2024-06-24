const char = "*";
const space = " ";

for (let i = 1; i < 7; i++) {
  let j = 6;
  let printSpace = space.repeat(j - i);
  let print = char.repeat(i);
  console.log(printSpace + print);
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

//generate pyramid
function generatePyramid() {
  var totalNumberofRows = 5;
  var output = "";
  for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += j + "  ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid();

//Pyramid
function printPyramid(rows) {
  let pyramid = "";
  // Defined a for loop to iteracte through each row
  for (let i = 0; i < rows; i++) {
    // Add spaces before the first '*' to center the pyramid
    pyramid += " ".repeat(rows - i - 1);
    // Add '*' for the current row
    pyramid += "*".repeat(2 * i + 1);
    // Move to the next line
    pyramid += "\n";
  }
  console.log(pyramid);
}

// Example usage: Print a pyramid with 5 rows
printPyramid(5);
