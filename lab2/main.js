var getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
var makeCalendar = require("./lab-two").makeCalendar;
var readline = require("readline-sync");


var year = readline.question("Enter a Year: ");
var month = readline.question("Enter a Month: ");
var date = readline.question("Enter a Date: ");
getDayOfTheWeek(year, month, date);
makeCalendar();