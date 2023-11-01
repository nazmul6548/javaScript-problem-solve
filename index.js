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


// ৪. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

function triangle(a, b, c) {
    // we are know that//
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  var a = 13;
  var b = 14;
  var c = 15;
  var areaResult = triangle(a, b, c);
  console.log(areaResult);