// grade
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

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
  return grade;
}

function hasPassingGrade(input) {
  if (input == "F") {
    console.log(false);
  } else {
    console.log(true);
  }
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const score = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      score +
      ". You passed the course."
    );
  } else {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      score +
      ". You failed the course."
    );
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
