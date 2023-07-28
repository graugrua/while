const entrada2 = require("readline-sync");
let n2: number = 0;
let i = 1;

while (i <= 5) {
  let n: number = parseFloat(entrada2.question("Digite a " + i + "ª nota: "));
  n2 = n2 + n;
  i++;
}

console.log(n2 / 5);
