// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে
// _____ans____//
var randomNum = [2, 3, 4, 7, 59, 98, 53, 87, -3];
const result = Math.min(...randomNum);
console.log(result);

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
// _____ans____//
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
// _____ans____//
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
// _____ans____//
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
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 80) {
    console.log(numbers[i]);
  }
}

// ৯. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// _____ans____//
function feetToInch(feet) {
  var calculate = feet * 12;
  return calculate;
}
var num = 5;
var inch = feetToInch(num);
console.log(inch);

// ১০. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
// _____ans____//
function centimeterToMeter(cm) {
  var calculate = cm * 0.01;
  return calculate;
}
var num = 200;
var meter = centimeterToMeter(num);
console.log(meter);

// ১১. একটা ফাংশন লিখবে যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।  উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
// _____ans____//
function paperRequirements(book1, book2, book3) {
  var calculate1 = book1 * 100;
  var calculate2 = book2 * 200;
  var calculate3 = book3 * 300;
  var need = calculate1 + calculate2 + calculate3;
  return need;
}
var book1 = 2;
var book2 = 4;
var book3 = 6;
var results = paperRequirements(book1, book2, book3);
console.log(results);

// ১২. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
// _____ans____//
function bestFriend(bestu) {
  let largeName = bestu[0];
  for (let i = 1; i < bestu.length; i++) {
    if (bestu[i].length > largeName.length) {
      largeName = bestu[i];
    }
  }
  return largeName;
}
const friendList = [
  "mushfiq",
  "riyad",
  "tamim",
  "shakib",
  "tanzim",
  "mustafizur",
  "taskin",
];
var largestName = bestFriend(friendList);
console.log(largestName);
console.log(typeof largestName);

// ১৩. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
// _____ans____//
function pNnumber(numbers) {
  const positiveNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNum.push(numbers[i]);
    }
  }
  return positiveNum;
}
const input = [1, 2, 4, 5, 66, -3, -6, -8, 65];
var returnNum = pNnumber(input);
console.log(returnNum);

// ১৪. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে।

// ১ টি সিঙ্গারা এর দাম – ৭ টাকা (1st parameter)
// ১ টি সমুচা এর দাম – ১০ টাকা (2nd parameter)
// ১ টি জিলাপি এর দাম – ১৫ টাকা (3rd parameter)

// এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।
// _____ans____//
function pandaCost(singgara, chomuca, jilapi) {
  var calculate = singgara * 7 + chomuca * 10 + jilapi * 15;
  return calculate;
}
var singgara = 2;
var chomuca = 2;
var jilapi = 5;
var totalCost = pandaCost(singgara, chomuca, jilapi);
console.log(totalCost);

// ১৫. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা।

// যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে।
// যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে।

// আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।

// এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।
// _____ans____//
function picnicBudget(figure) {
  if (figure <= 100) {
    return figure * 5000;
  } else if (figure > 100 && figure <= 200) {
    return 100 * 5000 + (figure - 100) * 4000;
  } else if (figure > 200) {
    return 100 * 5000 + 100 * 4000 + (figure - 200) * 3000;
  }
}
var num = 203;
var totalBudget = picnicBudget(num);
console.log(totalBudget);
