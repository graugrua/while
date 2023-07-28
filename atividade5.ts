const entrada5 = require("readline-sync");
let ns: number[] = [];
let nt: number = 0;
let nma: number = -99999999999999999999999999999999999999999999;
let nme: number = 99999999999999999999999999999999999999999999;
let i: number = 0;

while (i < 10) {
  let n: number = parseInt(entrada5.question("Digite um número: "));
  ns[i] = n;
  nt += n;
  i++;
}

i = 0;
while (i < ns.length) {
  if (ns[i] > nma) {
    nma = ns[i];
  }
  i++;
}

i = 0;
while (i < ns.length) {
  if (ns[i] < nme) {
    nme = ns[i];
  }
  i++;
}

console.log("O maior é: " + nma + ", o menor é: " + nme + " e a média é: " + nt / 10);
