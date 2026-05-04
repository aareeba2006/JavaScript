// Chapter 21-25
// Question 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// console.log("Hello " + fullName + "!");

// Question 2
// var mobileModel = prompt("Enter your favorite mobile phone model");
// var lengthOfString = mobileModel.length;
// console.log("My favorite phone is: " + mobileModel);
// console.log("Length of string: " + lengthOfString);

// Question 3
// var word = "Pakistani";
// var indexOfN = word.indexOf("n");
// console.log("String: " + word);
// console.log("Index of 'n': " + indexOfN);

// Question 4
// var word = "Hello World";
// var lastIndexOfL = word.lastIndexOf("l");
// console.log("String: " + word);
// console.log("Last index of 'l': " + lastIndexOfL);

// Question 5
// var word = "Pakistani";
// var charAtIndex3 = word.charAt(3);
// console.log("String: " + word);
// console.log("Character at index 3: " + charAtIndex3);

// Question 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fulName = firstName.concat(" ", lastName);
// console.log("Hello " + fulName + "!");

// Question 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// console.log("City: " + city);
// console.log("After replacement: " + newCity);

// Question 8
// var  message = "Ali & Sami are best friends. They play cricket & football together.";
// var newMessage = message.replaceAll("&", "and");
// console.log("Message: " + message);
// console.log("After replacement: " + newMessage);

// Question 9
// var string = 472;
// var number = num.toString();
//  console.log("Value: " + string);
//  console.log("Value: " + number);
//  var string = "472";
// var number = Number(string);
//  console.log("Value: " + string);
//  console.log("Value: " + number);

// Question 10
// var userInput = prompt("Enter a word in lowercase");
// var uppercase = userInput.toUpperCase();
// console.log("User input: " + userInput);
// console.log("Uppercase: " + uppercase);

// Question 11
// var userInput = prompt("Enter a word");
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// console.log("User input: " + userInput);
// console.log("Title case: " + titleCase);

// Question 12
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// console.log("Number: " + num);
// console.log("Result: " + numString);

// Question 13
// var username = prompt("Enter a username");
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     console.log("Please enter a valid username");
// } else {
//     console.log("Username is valid");
// }

// Question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// if (A.includes(userInput)) {
//     console.log(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
// } else {   
//      console.log("We are sorry. " + userInput + " is not available in our bakery");
// }

// Question 15
// var password = prompt("Enter a password");
// if (password.length < 6) {
//     console.log("Password must be at least 6 characters long");
// } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
//     console.log("Password must contain both letters and numbers");
// } else if (/^[0-9]/.test(password)) {
//     console.log("Password cannot start with a number");
// } else {
//     console.log("Password is valid");
// }

// Question 16
// var university = ["University of Karachi"];
// var split = university[0].split("");
// console.log("University: " + university[0]);
// console.log("Split: " + split);

// Question 17
// var userInput = prompt("Enter a word");
// var lastChar = userInput.charAt(userInput.length - 1);
// console.log("User input: " + userInput);
// console.log("Last character: " + lastChar);

// Question 18
var text = "The quick brown fox jumps over the lazy dog";
var count = (text.match(/the/gi) || []).length;
console.log("Text: " + text);
console.log("There are " + count + " occurrences of the word 'the'");