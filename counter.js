function view(counter) {
    return ("   Count: " +counter+"\n   (+) (-)\n   (q) for quit");
}

function update(msg, counter) {
    if (msg == "+")
        return counter += 1;
    if (msg == "-")
        return counter -= 1;
    if (msg == "q")
        return counter = "break";
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
        if (counter == "break") //Condición para terminar el programa si el usuario ingresa "q"
            break
    }
}
app(0)
