let x = -100;
console.log((x >>>= 5));

function op() {
  this.z = 4 + 1;
  this.y = 6 + 9;
  return this;
}
console.log(op());
