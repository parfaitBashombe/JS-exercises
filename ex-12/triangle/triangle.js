const char = "*";
space = "";
let jRows = 6;

for (let i = 0; i < jRows; i++) {
  space += " ".repeat(jRows - i - 1);
  // Add '*' for the current row
  space += char.repeat(2 * i + 1);
  space += "\n";
  console.log(space);
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
