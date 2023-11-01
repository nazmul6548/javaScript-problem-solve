// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে
// _____ans____
var randomNum = [2, 3, 4, 7, 59, 98, 53, 87, -3];
const result = Math.min(...randomNum);
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

//   ৬. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
// _____ans____
let x = 7;
while (x <= 17) {
  if (x % 2 !== 0 && x >= 7) {
    console.log(x);
  }
  x++;
}


// ৮. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো ।
// _____ans____//
const numbers = [11, 12, 13, 80, 88, 100, 111, 112, 121, 132, 434];
for (let i = 0;i<numbers.length; i++) {
  if(numbers[i]>=80) {
    console.log(numbers[i]);
  }
}



// ৯. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// _____ans____//
function feetToInch(feet) {
  var calculate = feet*12;
  return calculate;
}
var num = 5;
var inch =feetToInch(num);
console.log(inch);

// ১০. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
// _____ans____//
function centimeterToMeter(cm) {
var calculate=cm *0.01;
return calculate;
}
var num =  200;
var meter =centimeterToMeter(num);
console.log(meter);