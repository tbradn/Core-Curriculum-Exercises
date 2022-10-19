function shortLongShort(string1, string2) {
    if (string1.length > string2.length) {
        return string2 + string1 + string2;
    }   else {
        return string1 + string2 + string1;
    }
}

console.log(shortLongShort('This string is bigger.', 'This one is smaller'));    
console.log(shortLongShort('abcde', 'fgh'));    
console.log(shortLongShort('', 'xyz'));
