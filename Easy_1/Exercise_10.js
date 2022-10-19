function isMultiple(number, divisor) {
    return number % divisor === 0;
}

function multisum(maxValue) {
    let sum = 0;
    
    for (let number = 1; number <= maxValue; number += 1) {
        if (isMultiple(number, 3) || isMultiple(number, 5)) {
            sum += number;
        }
    }
    
    return sum;
}

console.log(multisum(3));
console.log(multisum(6));
console.log(multisum(8));
console.log(multisum(9));
console.log(multisum(10));
