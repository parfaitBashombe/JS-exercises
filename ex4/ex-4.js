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
  friends: [
    "Shukaku !",
    "Matatabi !",
    "Isobu !",
    "Son goku !",
    "Kokuo !",
    "Saiken !",
    "Chomei !",
    "Giyuki !",
    "Kurama !",
  ],
};

myDog["bark"] = "wuw wuw !";

//morse alphabet
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

console.log(morse("bravo"));

//check if obj has property
function checkObj(checkProp) {
  if (myDog.hasOwnProperty(checkProp)) {
    return myDog[checkProp];
  } else {
    return "not found";
  }
}

console.log(checkObj("tails"));

//check if obj has property
function checkArr(checkEl) {
  if (myDog.friends.includes("Shukaku !")) {
    return myDog.friends[checkEl];
  } else {
    return "not found";
  }
}

console.log(checkArr("8"));

//tail beasts
const click = document.getElementById("click");
click.addEventListener("click", beast);

function beast() {
  let search = document.getElementById("search").value;
  let beast = [
    "Shukaku !",
    "Matatabi !",
    "Isobu !",
    "Son goku !",
    "Kokuo !",
    "Saiken !",
    "Chomei !",
    "Giyuki !",
    "Kurama !",
  ];

  let result = "";
  switch (search) {
    case 1:
      result = beast[0];
      break;
    case 2:
      result = beast[1];
      break;
    case 3:
      result = beast[2];
      break;
    case 4:
      result = beast[3];
      break;
    case 5:
      result = beast[4];
      break;
    case 6:
      result = beast[5];
      break;
    case 7:
      result = beast[6];
      break;
    case 8:
      result = beast[7];
      break;
    case 9:
      result = beast[8];
      break;
    default:
      result = "please enter a correct number";
      break;
  }

  return result;

  document.getElementById("get").innerHTML = beast[result] + " has" + search;
}
