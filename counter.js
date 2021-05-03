function view(counter) {
    return ("   Count: " +counter+"\n   (+) (-)\n   (q) for quit")
}

function update(msg, counter){
    counter = 0
    if (msg == "+")
        return counter += 1
    if (msg == "-")
        return counter -= 1
    else;
        return counter = "counter"
}

const prompt = require("prompt-sync")(); 
const msg = prompt("What would you do? ");