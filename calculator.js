function handleLoad() {
    const buttons = document.getElementsByClassName("button");
    for (let k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
    }
}

function handleClick(event) {
    const innerText = event.target.innerText;
    if (innerText == "b"){
        backSpace();
    } else if (innerText == "="){
        equal();
    } else if (innerText == "AC"){ 
        clearScreen();
    } else {
        addToScreen(innerText);
    }
}

function addToScreen(text) {
    const screen = document.getElementById("screen");
    const lastChar = screen.innerText.charAt(screen.innerText.length - 1);

    if (text == "+" || text == "-" || text == "*" || text == "/" || text =="." ) { 
        if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*" || lastChar == "." || lastChar =="" ) {    
            return;
        }
    }
    screen.innerText = screen.innerText + text;
}

function clearScreen() {
    const screen =  document.getElementById("screen");
    screen.innerText = "";
}

function backSpace() {
    const screen =  document.getElementById("screen");
    screen.innerText = screen.innerText.slice(0, -1);
}
function equal() {
    const screen = document.getElementById("screen");
    screen.innerText = eval(screen.innerText);
}

window.onload = handleLoad;
