// grade
const msg = document.getElementById("msg");
msg.addEventListener("click", studentMsg);

//Delete
const supprButton = document.getElementById("suppr");
supprButton.addEventListener("click", supp);

function supp() {
  document.getElementById("get").value = "";
}

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

function getGrade() {
  input = document.getElementById("get").value;
  if (input == 100) {
    return "A++";
  } else if (input >= 90 && input <= 99) {
    return "A";
  } else if (input >= 80 && input <= 89) {
    return "B";
  } else if (input >= 70 && input <= 79) {
    return "C";
  } else if (input >= 60 && input <= 69) {
    return "D";
  } else if (input <= 59) {
    return "F";
  } else {
    return "A+++";
  }
} //end get grade

//has passing grade
function hasPassingGrade(input) {
  return getGrade(input) !== "F";
} //end passing grade
console.log(hasPassingGrade());

//student message
function studentMsg(totalScores, studentScore) {
  studentScore = document.getElementById("get").value;
  const mark = getGrade(studentScore);
  const average = getAverage(totalScores);

  if (getAverage(totalScores)) {
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
        mark +
        ". You failed the course."
    );
  }
} //end student message
