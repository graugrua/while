var entrada3 = require("readline-sync");
var tabuada = parseInt(entrada3.question("Qual tabuada você quer?: "));
var i = 1;
while (i <= 10) {
    console.log(i * tabuada);
    i++;
}
