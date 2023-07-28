var entrada2 = require("readline-sync");
var n2 = 0;
var i = 1;
while (i <= 5) {
    var n = parseFloat(entrada2.question("Digite a " + i + "ª nota: "));
    n2 = n2 + n;
    i++;
}
console.log(n2 / 5);
