// Chapter 10 Question 1
// var city=prompt("Enter your city")
// if(city === "karachi"){
//     console.log("Welcome to city of lights");
// }

// Question 2
// var gender=prompt("Enter your gender")
// if(gender==="male"){
//     console.log("Good Morning Sir");
// }
// else if(gender==="female"){
//     console.log("Good Morning Maam");
// }

// Question 3
// var trafficSignal = prompt("Enter traffic color")

// if(trafficSignal === "red"){
//     console.log("Must Stop");
// }else if(trafficSignal === "yellow"){
//     console.log("Get ready to move");
// }else if(trafficSignal === "green"){
//     console.log("Move Now");
// }else{
//     console.log("Invalid Color");
// }

// Question 4
// var remainingFuel=prompt("Remaining Fuel in car in litres")
// if(remainingFuel<0.25){
//     console.log("Refill your fuel")
// }

// Question 5
// var a=4;
// if(++a===5){
//     alert("given condition for variable a is true");
// }
// var b=82;
// if(b++===83){
//     alert("given condition for variable b is true")
// }
// var c=12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Question 6
// var sub1 = prompt("Enter marks of Subject 1:");
// var sub2 = prompt("Enter marks of Subject 2:");
// var sub3 = prompt("Enter marks of Subject 3:");
// var totalMarks = prompt("Enter total marks:");

// var obtained = sub1 + sub2 + sub3;
// var percentage = (obtained / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80){
//     grade = "A+";
//     remarks = "Excellent";
// }
// else if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else{
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

// Question 7
// var secretNum=9
// var num=prompt("Guess number(1 to 10)")
// if(num===secretNum){
//     console.log("Bingo! Correct answer")
// }
// else if (num + 1 === secretNum){
//     console.log("Close enough to the correct answer");
// }
// else{
//     console.log("Try again!");
// }

// Question 8
// var divisible=prompt("Enter a number:");
// if(divisible % 3 === 0){
//     console.log("Number is divisible by 3")
// }

// Question 9
// var num=prompt("Number is even or odd:")
// if(num % 2 === 0){
//     console.log("Number is even");
// }
// else{
//     console.log("Number is odd");
// }

// Question 10
// var T = prompt("Enter temperature:");

// if (T > 40){
//     alert("It is too hot outside.");
// }
// else if (T > 30){
//     alert("The Weather today is Normal.");
// }
// else if (T > 20){
//     alert("Today’s Weather is cool.");
// }
// else if (T > 10){
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("It's very cold outside.");
// }

// Question 11
// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var op = prompt("Enter operation (+, -, *, /, %):");

// var result;

// if (op === "+"){
//     result = num1 + num2;
// }
// else if (op === "-"){
//     result = num1 - num2;
// }
// else if (op === "*"){
//     result = num1 * num2;
// }
// else if (op === "/"){
//     result = num1 / num2;
// }
// else if (op === "%"){
//     result = num1 % num2;
// }
// else{
//     result = "Invalid operator";
// }

// alert("Result: " + result);

// Chapter 12-14
// Question 1
// var ch = prompt("Enter a character:");

// var code = ch.charCodeAt(0);

// if (code >= 48 && code <= 57){
//     alert("It is a number.");
// }
// else if (code >= 65 && code <= 90){
//     alert("It is an UPPERCASE letter.");
// }
// else if (code >= 97 && code <= 122){
//     alert("It is a lowercase letter.");
// }
// else{
//     alert("It is a special character.");
// }

// Question 2
// var integer1=prompt("Enter 1st integer: ")
// var integer2=prompt("Enter 2nd integer:")
// if(integer1 > integer2){
//     console.log("Integer 1 is greater than 2");
// }
// else if(integer1 < integer2){
//     console.log("Integer 2 is greater than 1");
// }
// else {
//     console.log("Both are equal");
// }

// Question 3
// var num=prompt("Enter  number: ")
// if(num > 0){
//     console.log("Number is positive");
// }
// else if(num < 0){
//     console.log("Number is negative");
// }
// else{
//     console.log("Number is zero");
// }

// Question 4
// var ch = prompt("Enter a character");

// if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
//     ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
//     alert(true);
// }
// else{
//     alert(false);
// }

// Question 5
// var correctPassword = "abc123";   // stored password

// var userPassword = prompt("Enter your password:");

// if (!userPassword){
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }

// Question 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}