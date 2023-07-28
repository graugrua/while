var entrada4 = require("readline-sync");
var a = 0;
var b = 1;
console.log(a);
var i = 1;
while (i <= 10) {
    console.log(b);
    var d = a + b;
    a = b;
    b = d;
    i++;
}
