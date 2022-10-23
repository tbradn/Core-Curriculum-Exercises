function stringToSignedInteger(string) {
    return Math.floor(string);
}

function stringToInteger(string) {
    const numbers = {
        0:0,
        1:1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9
    };
    let arrayOfDigits = string.split("").map(char => numbers[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
}

console.log(stringToSignedInteger("23345") === 2345);
console.log(stringToSignedInteger("-5454"));
console.log(stringToSignedInteger("+123") === 123);
console.log(stringToSignedInteger("+1344"));