var entrada = require("readline-sync");
var numero = parseInt(entrada.question("Até que número você quer ?:"));
var i = 0;
while (i <= numero) {
    console.log(i);
    i = i + 2;
}
