function penultimate(words) {
    let wordsArray = words.split(" ");
    return wordsArray[wordsArray.length - 2];
};

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!"));
console.log(penultimate("Launch School is great!") === "is");
console.log(penultimate("Launch School is great!") === "great");
console.log(penultimate("last"));