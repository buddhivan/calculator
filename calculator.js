function handleClick(event) {
    const innerText = event.target.innerText;
    if (innerText == "b"){
        console.log("delete");
    } else if (innerText == "="){
        console.log("equal");
    } else {
        console.log(innerText);
    }
}

function handleLoad() {
    const buttons = document.getElementsByClassName("button")
    for ( let k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
    }

}

window.onload = handleLoad;
