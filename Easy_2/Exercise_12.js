const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

function integerToString(number) {
    let result = '';
    do {
        let remainder = number % 10;
        number = Math.floor(number / 10);
        result = DIGITS[remainder] + result;
    }   while (number > 0);
    return result;
}

function signedIntegerToString(number) {
    switch (Math.sign(number)) {
        case -1:
            return `-${integerToString(-number)}`;
        case +1:
            return `+${integerToString(number)}`;
        default:
            return integerToString(number);
    }
}

console.log(signedIntegerToString(2345) === '+2345');
console.log(signedIntegerToString(-4443));
console.log(signedIntegerToString(3455) === -3455);
console.log(signedIntegerToString(+1020));