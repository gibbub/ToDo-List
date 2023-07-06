// This module provides a random motivating message

exports.generateText = function(tasksLeft) {
    let messages = [];
    
    if (tasksLeft === 0) {
        messages = [
            "Yayyy! All done!",
            "You did it! Now go take a break.",
            "Take that, to-do list!"
        ];
    }
    else {
        messages = [
        "Productivity!",
        "Booyah!",
        "Yessss.",
        "Look at how productive you're being!",
        "Phew. Glad that one's done!",
        "Got that one out of the way!",
        "Procrastination? Never heard of it.",
        ];
    }

    if (tasksLeft > 0 && tasksLeft < 4) {
        messages.push("Only "+ tasksLeft +" left!");
        messages.push("You're almost there!");
        messages.push(tasksLeft +" left to go.");
        messages.push("Just a few more!");
    }

    let len = messages.length;
    let index = Math.floor(Math.random() * len);

    return messages[index];
}
