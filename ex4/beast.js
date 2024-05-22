//tail beasts
const click = document.getElementById("click");
click.addEventListener("click", beast);

let beastList = [
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

console.log(beastList[0]);

function beast() {
  let input = document.getElementById("search").value;
  let result = document.getElementById("get");
  let x = "";

  if (input == 1) {
    x = beastList[0];
  } else if (input == 2) {
    x = beastList[1];
  } else if (input == 3) {
    x = beastList[2];
  } else if (input == 4) {
    x = beastList[3];
  } else if (input == 5) {
    x = beastList[4];
  } else if (input == 6) {
    x = beastList[5];
  } else if (input == 7) {
    x = beastList[6];
  } else if (input == 8) {
    x = beastList[7];
  } else if (input == 9) {
    x = beastList[8];
  }

  result.innerHTML = x;
}
