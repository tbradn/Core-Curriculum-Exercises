let readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?\n");

if (name[name.length - 1] === "!") {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}!!! NICE TO SEE YOU!!!`);
}   else {
    console.log(`Hello ${name}. Nice to see you.`);
}