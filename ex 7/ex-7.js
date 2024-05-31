function outer(x) {
  function inner(y) {
    function innner(z) {
      return x + y + z;
    }
    return innner;
  }
  return inner;
}

const outerReturn = outer(10)(2)(8);

console.log(outerReturn);

function bar() {
  console.log("hello....");
}

function add() {
  console.log(11 + 4);
}

function foo(bar) {
  bar();
}

foo(add);

foo(bar);

//pyramid
const character = "#";
const count = 15;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(rowNumber) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 0; i < count; i++) {
  rows.push(padRow(i, count));
}

let result = "";
for (const row of rows) {
  result += "\n" + row;
}

console.log(result);
