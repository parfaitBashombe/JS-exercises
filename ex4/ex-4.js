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
    case 5:
    case 6:
    case 7:
      answer = "delta";
      break;
    default:
      answer = "Don't Know";
      break;
  }

  return answer;
}
console.log(getAnswer(3));

function abtest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abtest(2, 2));
