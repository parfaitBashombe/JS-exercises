function outer(x) {
  function inner(y) {
    function innner(z) {
      return x + y + z;
    }
    return innner;
  }
  return inner;
}

const outerReturn = outer(10);
const innerReturn = outerReturn(2);
console.log(innerReturn(8));
