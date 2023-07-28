var entrada5 = require("readline-sync");
var ns = [];
var nt = 0;
var nma = -99999999999999999999999999999999999999999999;
var nme = 99999999999999999999999999999999999999999999;
var i = 0;
while (i < 10) {
    var n = parseInt(entrada5.question("Digite um número: "));
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
