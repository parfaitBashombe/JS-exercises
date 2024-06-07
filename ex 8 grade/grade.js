// grade

//average
function getAverage(scores) {
  scores = [56, 23, 89, 42, 75, 11, 68, 34, 91, 19];
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
} //end average

//get grade
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
  } else if (input <= 59) {
    grade = "F";
  } else {
    grade = "A+++";
  }
  console.log(grade);
} //end get grade

//has passing grade
function hasPassingGrade(input) {
  return getGrade(input) !== "F";
} //end passing grade
hasPassingGrade();

//student message
function studentMsg(totalScores, studentScore) {
  studentScore = document.getElementById("get").value;
  const average = getAverage(totalScores);
  const mark = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    console.log(
      "Class average: " +
        average +
        ". Your grade: " +
        mark +
        ". You passed the course."
    );
  } else {
    console.log(
      "Class average: " +
        average +
        ". Your grade: " +
        mark +
        ". You failed the course."
    );
  }
} //end student message
