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
  result = x.length;

  document.getElementById("js").innerHTML = result;
}
