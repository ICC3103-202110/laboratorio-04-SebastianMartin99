function view(counter) {
    return ("   Count: " +counter+"\n   (+) (-)\n   (q) for quit");
}

function update(msg, counter) {
    if (msg == "+")
        return counter += 1;
    if (msg == "-")
        return counter -= 1;
    else
        return counter;
}

function app(counter){
    while(true) {
        const currentView = view(counter);
        console.clear()
        console.log(currentView);
        const prompt = require("prompt-sync")({sigint: true});
        const msg = prompt("What would you do? ");
        counter = update(msg, counter);
    }
}
app(0)
