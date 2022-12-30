function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(shout) {
    console.log('hello'.toUpperCase()); 
}

function logWhisper(whisper) {
    console.log('hello'.toLowerCase());
}

function sayHiToHeadphonedRoommate(hello) {
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var loveAnswer = "I would love to!";
    if (hello.toLowerCase(hello) === hello) {
        return cantAnswer;
    }
    else if (hello.toUpperCase(hello) === hello) {
        return yesAnswer;
    }
    else if ("Let's have dinner together!" === hello) {
        return loveAnswer;
    }    
}