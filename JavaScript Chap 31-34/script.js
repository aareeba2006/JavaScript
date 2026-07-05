// Chapter 31-34
// Question 1
// var date = new Date();
// console.log(date);

// Question 2
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var currentmonth = new Date().getMonth();
// console.log("Current Month : " + month[currentmonth]);

// Question 3
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var currentday = new Date().getDay();
// console.log("Today is " + day[currentday]);

// Question 4
// var currentday = new Date().getDay();
// if (currentday === 0 || currentday === 6 ){
//     console.log("It's Fun Day");
// }

// Question 5
// var date = new Date();
// var currentdate = date.getDate();
// if (currentdate < 16){
//     console.log("First fifteen days of the month");
// }
// else {
//     console.log("Last days of the month");
// }

// Question 6
// var now = new Date();
// console.log("Current Date : " + now);
// miliseconds = now.getTime();
// console.log("Elapsed miliseconds since 1 January, 1970: " + miliseconds);
// console.log("Elapsed minutes since 1 January, 1970: " + miliseconds / (1000 * 60));

// Question 7
// var time = new Date();
// console.log(time.getHours());
// if( time.getHours() < 12){
//     console.log("It's AM");
// }
// else {
//     console.log("It's PM");
// }

// Question 8
// var laterDate = new Date(2020 , 12, 0)
// console.log("Later Date : " + laterDate);

// Question 9
// var ramadan = new Date(2015, 5, 18);
// var today = new Date();
// var diff = today - ramadan;
// var days = diff / (1000 * 60 * 60 * 24);
// console.log(Math.floor(days) + " days have passed since 1st Ramadan, 2015");

// Question 10
// var referenceDate = new Date(2015, 11, 5);
// var beginningDate = new Date(2015, 0, 1);
// var diff = referenceDate - beginningDate;
// var seconds = diff / 1000;
// console.log("On reference date " + referenceDate + ", " + seconds + " seconds had passed since beginning of 2015");

// Question 11
// var currentDate = new Date();
// console.log("Current Date : " + currentDate);
// var currentHours = currentDate.getHours();
// console.log("Current Hours : " + currentHours);
// currentDate.setHours(currentHours + 1);
// console.log("after 1 hour , it will be " + currentDate);

// Question 12
// var date = new Date();
// date.setDate(date.getDate() - 100);
// console.log("100 days back, it was " + date);

// Question 13
// var age = prompt("Enter your age");
// var year = new Date().getFullYear() - age;
// console.log("Your age is " + age);
// console.log("Your birth year is " + year);

// Question 14
document.write("<h1>K-Electric Bill</h1>");
var customerName = "ABC Customer";
document.write("Customer Name : " + customerName + "<br>");
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
document.write("Month : " + month[currentMonth -1] + "<br>");
var numberOfUnits = 320;
var chargesPerUnit = 65;
var netAmountPayable = numberOfUnits * chargesPerUnit;
document.write("Net Amount Payable (within Due Date) : " + netAmountPayable + "<br>");
var latePaymentSurcharge = 500;
document.write("Late Payment Surcharge : " + latePaymentSurcharge + "<br>");
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("Gross Amount Payable (after Due Date) : " + grossAmountPayable);