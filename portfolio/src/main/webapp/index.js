import "https://github.com/flackr/scroll-timeline"

function addClass(element, className) {
    element.classList.add(className);
}

window.onload = function () {
    addClass(document.querySelector("h1"), "slide-in-animation");
}