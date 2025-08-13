function handleClick(event) {
    const innerText = event.target.innerText;
    if (innerText == "b"){
        console.log("delete");
    } else if (innerText == "="){
        console.log("equal");
    } else {
        addToScreen(innerText);
    }
}

function handleLoad() {
    const buttons = document.getElementsByClassName("button");
    for ( let k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
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

window.onload = handleLoad;
