// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে
// _____ans____
var randomNum =[2,3,4,7,59,98,53,87,-3];
const result=Math.min(...randomNum)
console.log(result);


// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
// _____ans____
var num1 = -101;
var num2 = 12;
var num3 = 33;
var results = num1;
if (results < num2) {
  console.log(num1);
} else if (results < num3) {
  console.log(num1);
} else {
  console.log("unknown");
}