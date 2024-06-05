// grade
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  console.log(sum / scores.length);
}

getAverage([45, 45, 6, 7, 67, 89]);

const click = document.getElementById("click");
click.addEventListener("click", getGrade);

function getGrade() {
  const input = document.getElementById("get").value;
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
  } else if (input <= 59) {
    grade = "F";
  } else {
    grade = "A+++";
  }

  hasPassingGrade(grade);

  document.getElementById("result").innerHTML =
    input + " is a " + grade + " grade";
}

function hasPassingGrade(input) {
  if (input == "F") {
    console.log(false);
  } else {
    console.log(true);
  }
}
