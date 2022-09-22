function isLeapYear(year) {
    return (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)
} 

function calculateoffsets(firstTwoNumbersYear, dayOfTheWeekNumericValue){
    if (firstTwoNumbersYear == 16) {
        dayOfTheWeekNumericValue = dayOfTheWeekNumericValue + 6;
    } else if (firstTwoNumbersYear == 17) {
        dayOfTheWeekNumericValue = dayOfTheWeekNumericValue + 4; 
    } else if (firstTwoNumbersYear == 18) {
        dayOfTheWeekNumericValue = dayOfTheWeekNumericValue + 2; 
    } else if (firstTwoNumbersYear == 20) {
        dayOfTheWeekNumericValue = dayOfTheWeekNumericValue + 6; 
    } else if (firstTwoNumbersYear == 21) {
        dayOfTheWeekNumericValue = dayOfTheWeekNumericValue +4; 
    } 
    return dayOfTheWeekNumericValue;
}

function getDayOfTheWeek(year, month, day) {
    let lastTwoDigitsYear = String(year).slice(-2); // Step1-1: changed last two digits of year to string.
    let lastTwoNumbersYear = Number(lastTwoDigitsYear); // Step1-2: changes last two strings to number.
    let yearBy7 = Math.floor(lastTwoNumbersYear / 12); // Step1-3: how many 12 fits.
    let yearBy7Remainder = lastTwoNumbersYear % 12; //Step2: Remainder of (Step1-3). 
    let remainderBy4 = Math.floor(yearBy7Remainder / 4); //Step3: How many 4s fit into that remainder. 
    const monthCode = {
        January: 1,
        February: 4,
        March: 4,
        April: 0,
        May: 2,
        June: 5,
        July: 0,
        August: 3,
        September: 6,
        October: 1,
        November: 4,
        December: 6
    } // Step 5: Month code.
    
    let dayOfTheWeekNumericValue = yearBy7 + yearBy7Remainder + remainderBy4 + day + monthCode[month]; // Step 7: Add all numbers.

    if (isLeapYear(year) == true) {
        if (month == "January" || month == "Febuary")
            dayOfTheWeekNumericValue = dayOfTheWeekNumericValue - 1;
    } // January and Febraury dates in leap years.
    
    let firstTwoDigitsYear = String(year).substring(0,2); 
    let firstTwoNumbersYear = Number(firstTwoDigitsYear); 

    const finalResult = calculateoffsets(firstTwoNumbersYear, dayOfTheWeekNumericValue);

    let numberForDayoftheWeek = finalResult % 7; //step6

    let monthCodes = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
   
    return monthCodes[numberForDayoftheWeek];

} 
// T E S T:
// console.log(getDayOfTheWeek(2022,"September", 21));// Wednesday
// console.log(getDayOfTheWeek(1996,"January",14));// Sunday
// console.log(getDayOfTheWeek(2002,"July",30)); // Tuesday
// console.log(getDayOfTheWeek(1967, "December", 15)); // Friday

function makeCalendar(){
    const monthNames= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < 12; i++) {
        for (let j = i; j <= months[i]; j++) {
            console.log(`2022 - ${monthNames[i]} - ${j} is a ${getDayOfTheWeek(2022, monthNames[i], j)}`);
        }
    }
}
// T E S T:
// console.log(makeCalendar());