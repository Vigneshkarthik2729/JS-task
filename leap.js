const year = prompt("Enter the value: ")

function myFunction(year) {
const leap = new Date(year, 1, 29).getDate()==29;
if (leap) {
    console.log(year+ ": it is a leap year");
} else {
    console.log(year+ ": it is not a leap year");
}    
}
myFunction(year);