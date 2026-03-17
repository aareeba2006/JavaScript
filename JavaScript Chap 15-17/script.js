// Chapter 15 - 17
// Question 2
// var students=[]

// Question 3
// var students=["Areeba","Ali","Sara"]
// console.log(students);

// Question 4
// var student=[1,2,3,4,5]
// console.log(student);

// Question 5
// var booleanArray=[true,false,true,false]
// console.log(booleanArray);

// Question 6
// var mixedArray=["Areeba",18,"years old",true]
// console.log(mixedArray);

// Question 7
// var  qualifications=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// for(var i=0; i< qualifications.length; i++){
//     document.write(qualifications [i] + "<br>");
// }

// Question 8
// var students=["Michael","John","Tony"]
// var scores=[320,230,480]
// for(var i=0; i< students.length; i++){
//     var percentage=(scores[i]/500)*100;
//     document.write(students[i] + " scored : " + percentage + "%<br>");
// }

// Question 9
// a)  var colors=["red","green","blue"]
// var newcolors=prompt("What colour he want to add")
// colors.unshift(newcolors)
// console.log(colors);
// b)  var colors=["red","green","blue"]
// var newcolors=prompt("What colour he want to add")
// colors.push(newcolors)
// console.log(colors);
// c)  var colors=["red","green","blue"]
// colors.unshift("yellow","orange")
// console.log(colors);
// d)   var colors=["red","green","blue"]
// colors.shift()
// console.log(colors);
// e)   var colors=["red","green","blue"]
// colors.pop()
// console.log(colors);
// f)   var colors=["red","green","blue"]
// var index=prompt("At which index he want to add a colour")
// var newcolor=prompt("What colour he want to add")
// colors.splice(index,0,newcolor)
// console.log(colors);
// g)   var colors=["red","green","blue"]
// var index=prompt("At which index he want to delete a colour")
// var newcolor=prompt("how many colors he want to delete")
// colors.splice(index,newcolor)
// console.log(colors);

// Question 10
// var scores=[320,230,480,120]
// scores.sort(function(a,b){return a-b});
// console.log(scores);

// question 11
// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var copycities=cities.slice(2,4);
// console.log(copycities);

// Question 12
// var arr=["This","is","my","cat"]
// console.log(arr)
// var singlestring=arr.join(" ")
// console.log(singlestring)

// Question 13
// var devices=[]
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")
// console.log("Devices: " + devices);
// for(var i=0; i<devices.length; i++){
//     console.log("Out: " + devices[i]);
// }

// Question 14
// var devices=[]
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")
// console.log("Devices: " + devices);
// for(var i=0; i<4; i++){
//      console.log("Out: " + devices.pop());
//  }

// Question 15
// var manufacturers=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }
// document.write("</select>"); 

