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

console.log(stringToInteger("3455") === 3455);
console.log(stringToInteger("5449"));
console.log(stringToInteger("4988") === 4988);
console.log(stringToInteger("5362"));