var getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
var makeCalendar = require("./lab-two").makeCalendar;
var readline = require("readline-sync");


var year = readline.questionInt("Enter a Year: ");
var month = readline.question("Enter a Month:  ");
var date = readline.questionInt("Enter a Date: ");
console.log(getDayOfTheWeek(year, month, date));
makeCalendar();