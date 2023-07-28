const entrada4 = require("readline-sync");
let a: number = 0;
let b: number = 1;

console.log(a);

let i = 1;
while (i <= 10) {
  console.log(b);

  let d = a + b;
  a = b;
  b = d;

  i++;
}