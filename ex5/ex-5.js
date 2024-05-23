dor = {
  legs: 4,
  tails: [9, 4, 5, 7, 6, 2, 1, 3, 8],
  eyes: 3,
};

console.log(dor.tails[0]);

document.getElementById("get").innerHTML = JSON.parse(
  JSON.stringify(dor.tails)
);

const click = document.getElementById("click");
click.addEventListener("click", delet);

function delet() {
  let x = document.getElementById("js").innerHTML;
  result = x.slice(0, -1);
  document.getElementById("js").innerHTML = result;

  console.log(x[0]);
}

//block buster movie

const isBigHit = true;
const isNew = true;
const hasAwards = false;
const canHaveSequel = true;
const isRatedX = false;

const isBlockBuster =
  isBigHit && isNew && (hasAwards || canHaveSequel) && !isRatedX; // ?

//

console.log(`The movie is a blockbuster: ${isBlockBuster}`);
