//which type of men are you ?
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

//test and give the exponent value

function abtest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abtest(2, 3));

//count the cards

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  let holdbet = "hold";

  if (count > 0) {
    holdbet = "bet";
  }

  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

//my dog characteristics
var ourDog = {
  name: "quincy",
  legs: 4,
  tails: 1,
  friends: ["everything !"],
};

ourDog.bark = "wow wow";
delete ourDog.friends;

var myDog = {
  name: "Kurama",
  legs: 4,
  tails: 9,
  friends: ["Hikaku !"],
};

myDog["bark"] = "wuw wuw !";

function morse(val) {
  let result = "";

  var lookup = {
    alpha: "adams",
    bravo: "boston",
    charlie: "chicago",
    delta: "denver",
    echo: "easy",
    foxtrot: "frank",
  };

  result = lookup[val];

  return result;
}

console.log(morse(alpha));
