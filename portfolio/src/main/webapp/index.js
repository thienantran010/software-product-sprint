/* helper functions */
function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

window.onload =  async function () {
    /* header animation */
    addClass(document.querySelector("h1"), "slide-in-animation");

    /* chat bubble animation */
    const dots = document.getElementsByClassName("receive dots")[0];
    const bio = document.getElementsByClassName("receive bio")[0];
    const section = document.getElementsByClassName("section bio")[0];

    const dotsArray = document.getElementsByClassName("dot");

    const options = {
        root: null,
        threshold: 1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(
         function dotAnimation(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    async function dotsAnim () {
                    
                        dotsArray[0].style.backgroundColor = "#63666A";
                        await delay(100);
                        dotsArray[0].style.backgroundColor = "#bbb"; //original dot color
                        await delay(100);
                        dotsArray[1].style.backgroundColor = "#63666A";
                        await delay(100);
                        dotsArray[1].style.backgroundColor = "#bbb"; //original dot color
                        await delay(100);
                        dotsArray[2].style.backgroundColor = "#63666A";
                        await delay(100);
                        dotsArray[2].style.backgroundColor = "#bbb"; //original dot color
                        await delay(100);

                        removeClass(dots, "show");
                        addClass(dots, "hide");
                        removeClass(bio, "hide");
                        addClass(bio, "show");
        
                }

                dotsAnim();
            }
            }
            )
        }, options);

    observer.observe(section);
}