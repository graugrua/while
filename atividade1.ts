const entrada = require("readline-sync");
let numero: number = parseInt(entrada.question("Até que número você quer ?:"));

let i = 0;
while (i <= numero) {
  console.log(i);
  i = i + 2;
}
