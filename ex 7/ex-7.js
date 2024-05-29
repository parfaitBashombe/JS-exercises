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
