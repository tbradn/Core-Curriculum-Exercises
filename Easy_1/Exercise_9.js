function isLeapYear(year) {
    if (year < 1752 && year % 4 === 0) {
        return true;
    }   else if (year % 400 === 0){
        return true;
    }   else if (year % 100 === 0){
        return false;
    }   else {
        return year % 4 === 0;
    }
}

console.log(isLeapYear(1700));
console.log(isLeapYear(1720));
console.log(isLeapYear(1753));
console.log(isLeapYear(1860));
console.log(isLeapYear(1980));