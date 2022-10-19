function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }   else if (year % 100 === 0){
        return false;
    }   else {
        return year %4 === 0;
    }
}

console.log(isLeapYear(1992));
console.log(isLeapYear(1998));
console.log(isLeapYear(2006));
console.log(isLeapYear(2023));
console.log(isLeapYear(2662));

