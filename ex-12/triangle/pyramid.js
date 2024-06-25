const char = "*";
space = "";
let jRows = 6;

for (let i = 0; i < jRows; i++) {
  space += " ".repeat(jRows - i);

  space += char.repeat(2 * i + 1);

  space += "\n";

  console.log(space);
}
//the pyramid grows in the console
for (let i = 1; i <= jRows; i++) {
  console.log(" ".repeat(jRows - i) + char.repeat(2 * i - 1));
}

// generate the steem
for (let i = 0; i < 4; i++) {
  console.log(" ".repeat(jRows - 3) + char.repeat(2 * 1 + 1));
}

//generate pyramid
function generatePyramid() {
  let totalNumberofRows = 5;
  let output = "";
  for (let i = 1; i <= totalNumberofRows; i++) {
    for (let j = 1; j <= i; j++) {
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

  for (let i = 0; i < rows; i++) {
    pyramid += " ".repeat(rows - i - 1);

    pyramid += "*".repeat(2 * i + 1);

    pyramid += "\n";
  }
  console.log(pyramid);
}

printPyramid(5);
