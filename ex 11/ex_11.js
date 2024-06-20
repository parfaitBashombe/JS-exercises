let x = -100;
console.log((x >>>= 5));

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(2);

console.log(circle);
