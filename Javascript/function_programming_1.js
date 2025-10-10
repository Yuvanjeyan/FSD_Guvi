// Task 1
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
}

// Task 2
function celebrateStyler(reason) {
    var fontStyle = "color:tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy Birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(`%cHave a great day!`, fontStyle);
    }
}

// Task 3
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// ✅ Task 4: Corrected version
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Call the function with dynamic styles
styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions');
