let count = 1;
total = 1;

while (count <= 5) {
  total *= count;
  count++;
}
count--;

console.log(`the factorial of ${count} is ${total}`);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

const click = document.getElementById("click");
click.addEventListener("click", fact);

function fact() {
  const num = document.getElementById("search").value;

  if (num >= 0) {
    const result = factorial(num);
    document.getElementById(
      "get"
    ).innerHTML = `the factorial of ${num} is ${result}`;
  } else {
    document.getElementById("get").innerHTML = "enter a positive number.";
  }
}

const delet = document.getElementById("delete");
delet.addEventListener("click", suppr);

function suppr() {
  document.getElementById("search").value = "";
  document.getElementById("get").innerHTML = "";
}
