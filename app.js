// problem#1

// var enterCity = prompt("Enter your city");
// var city = "Karachi";
// function cityKarachi() {
//     if (enterCity === city ) {
//         alert ("welcom to the city of lights")
//     }else{
//         alert("enter the correct city")
//     }
// }
// cityKarachi()

//problem#2

// var male = "Male";
// var female = "Female";
// var gender = prompt();
//  function genderWelcom() {
//     if (gender === male ) {
//         alert("Good Morning Sir")
//      }else{
//         alert("Good Morning Ma'am")
//      }
//  }
//  genderWelcom();

// problem#3

//  var red = "Must Stop";
//  var yellow = "Ready to move";
//  var green = "Move now";

//  var signalMessage = prompt("Enter the color to know the instructions");
//  function singalColorMessage() {
//     if (signalMessage === red) {
//         alert(red);
//     }if (signalMessage === yellow) {
//         alert(yellow)
//     }else{
//        alert(green)
//     }
//  }
//  singalColorMessage();

// problem#4
//  var remainingFuel = prompt("Enter the Fuel remained");
//  var currentFuel;
//  function fuelRange() {
//     if (currentFuel <= 0.25) {
//         alert("Please Refill the fuel in your car")
//     }else{
//         alert("long distance to go")
//     }
//  }
//  fuelRange()

//problem#5
//a
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
//b
var b = 82;
if (b++ === 83) {
  alert("true");
}

//c
var c = 12;
if (c++ === 13) {
  alert("true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("3 condition is true");
}
if (c === 14) {
  alert("true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
//e
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
//f
if ("car" < "cat") {
  alert("car is smaller than cat");
}
//problem#6
function calculatePercentage() {
    var subject1 = parseFloat(document.getElementById('subject1').value);
    var subject2 = parseFloat(document.getElementById('subject2').value);
    var subject3 = parseFloat(document.getElementById('subject3').value);
    var totalMarks = parseFloat(document.getElementById('totalMarks').value);

    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    document.getElementById('result').innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
}
