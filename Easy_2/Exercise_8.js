function oddities(array) {
    let oddElements = [];
    for (let idx = 0; idx < array.length; idx +=2) {
        oddElements.push(array[idx]);
    }
    return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities([1, 2, 3, 4, 5, 6]));
console.log(oddities(["abc", "def"]));
console.log(oddities([123]));
console.log(oddities([]));

function eventies(array) {
    let evenElements = [];
    for (let idx = 1; idx < array.length; idx +=2) {
        evenElements.push(array[idx]);
    }
    return evenElements;
}

console.log(eventies([2, 3, 4, 5, 6]));
console.log(eventies([1, 2, 3, 4, 5, 6]));
console.log(eventies(["abc", "def"]));
console.log(eventies([123]));
console.log(eventies([]));