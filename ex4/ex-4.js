function getAnswer(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "sigma";
      break;
    case 4:
      answer = "gama";
      break;
  }

  return answer;
}
console.log(getAnswer(3));
