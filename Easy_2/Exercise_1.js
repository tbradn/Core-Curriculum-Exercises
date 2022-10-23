function greetings(name, status) {
    return `Hello, ${name.join(" ")}! Good to see a ${status["title"]} ${status["occupation"]
    } around.`;
}

console.log(
    greetings(["Mike", "Lawhorn"], { title: "Master", occupation: "Electrician"}));