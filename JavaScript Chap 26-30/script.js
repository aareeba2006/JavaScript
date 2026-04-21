// CHAPTER 26-30
// Question 1
// var integer = prompt("write a positive integer")
// console.log("Number: " + integer);
// console.log("Floor Value: " + Math.floor(integer));
// console.log("Ceil Value: " + Math.ceil(integer));

// Question 2
// var integer = prompt("write a negative floating number")
// console.log("Number: " + integer);
// console.log("Round OFF Value: " + Math.round(integer));
// console.log("Floor Value: " + Math.floor(integer));
// console.log("Ceil Value: " + Math.ceil(integer));

//Question 3
// var integer = prompt("Enter a number")
// console.log(Math.abs(integer))

//Question 4
// var randomNum = Math.floor(Math.random() * 10);
// console.log(randomNum);

//Question 5
// var coin = Math.floor((Math.random() * 2) + 1);
// if (coin === 2){
//     console.log("Heads");
// }
// else {
//     console.log("Tails");

// }

// Question 6
// var number = Math.floor((Math.random() * 100) + 1)
// console.log(number);

// Question 7
// var userInput = prompt("Enter your weight:");
// var weight = parseFloat(userInput);
// console.log(weight)

// Question 8
var num = Math.floor(Math.random() * 20) + 1;
console.log(num);
var attempt = 0;

for (var i=1; i<=3; i++){
    usernum = prompt("Enter a number: ")
    attempt++; 

    if(usernum === num){
        console.log("Congratulations you guess right!!");
        }
    else if(usernum > num){
        console.log("You are bit higher")
    }
    else if(usernum < num){
        console.log("You are bit lower")
    }
    else {
        console.log("Sorry! you attempts are done")
        
    }
}