/* helper functions */
function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}


window.onload = function () {
    /* header animation */
    addClass(document.querySelector("h1"), "slide-in-animation");

    /* chat bubble animation */
    const dots = document.getElementsByClassName("receive dots")[0];
    const bio = document.getElementsByClassName("receive bio")[0];
    const section = document.getElementsByClassName("section bio")[0];

    const options = {
        root: null,
        threshold: 0,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(
        function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    setTimeout(() => {
                        removeClass(dots, "show");
                        addClass(dots, "hide");
                        removeClass(bio, "hide");
                        addClass(bio, "show");
                    }, 2000);
                }
            }
            )
        }, options);

    observer.observe(section);
}