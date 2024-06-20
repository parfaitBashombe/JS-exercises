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

const person = {
  firstName: "Parfait",
  lastName: "MB",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "John Smith";
console.log(person);
