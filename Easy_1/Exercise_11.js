function utf16Value(string) {
    let sum = 0;
    
    for (let idx = 0; idx < string.length; idx += 1) {
        sum += string.charCodeAt(idx);
    }
    
    return sum;
}

console.log(utf16Value('Hello World'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('Three'));
console.log(utf16Value('Goodbye World'));