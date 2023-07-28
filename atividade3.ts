const entrada3 = require("readline-sync");
let tabuada: number = parseInt(entrada3.question("Qual tabuada você quer?: "));

let i = 1;
while (i <= 10) {
  console.log(i * tabuada);
  i++;
}
