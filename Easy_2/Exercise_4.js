const multiply = (num1, num2) => num1 * num2;

function square(number) { 
    return multiply(number, number);
}

console.log(multiply(4, 5));
console.log(multiply(4, 5) === 16);
console.log(square(6));
console.log(square(6) === 36);

