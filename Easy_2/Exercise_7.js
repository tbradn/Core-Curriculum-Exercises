function xor(a, b) {
    if ((a && !b) || (!a && b)) {
        return true;
    }
        return false;
}

console.log(xor(5, 0) === true);
console.log(xor(5, 0) === false);
console.log(xor(false, true));
console.log(xor(false, false));
console.log(xor(true, true));