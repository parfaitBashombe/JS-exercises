// grade
const click = document.getElementById("click");
click.addEventListener("click", getGrade);

function getGrade(input) {
  input = document.getElementById("get").value;
  let grade = "";
  if (input == 100) {
    grade = "A++";
  } else if (input >= 90 && input <= 99) {
    grade = "A";
  } else if (input >= 80 && input <= 89) {
    grade = "B";
  } else if (input >= 70 && input <= 79) {
    grade = "C";
  } else if (input >= 60 && input <= 69) {
    grade = "D";
  } else if (input >= 1 && input <= 59) {
    grade = "F";
  }
  return (document.getElementById("result").innerHTML =
    input + " is a " + grade + " grade");
}

getGrade();
let N = 5;

for (i = 1; i <= N; i++) {
  for (j = 1; j <= N; j = j * 2) {
    console.log("hello");
  }
}
