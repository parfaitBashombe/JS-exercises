// grade

//average
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
} //end average

//get grade
const click = document.getElementById("click");
click.addEventListener("click", getGrade, studentMsg);
let input = document.getElementById("get").value;

function getGrade(input) {
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

//student message
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const mark = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    document.getElementById("result").innerHTML =
      "Class average: " +
      average +
      ". Your grade: " +
      mark +
      ". You passed the course.";
  } else {
    document.getElementById("result").innerHTML =
      "Class average: " +
      average +
      ". Your grade: " +
      mark +
      ". You failed the course.";
  }
} //end student message
studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100);
