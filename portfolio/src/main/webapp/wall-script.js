function onSubmit (e) {
    e.preventDefault();
    let textArea = document.getElementById('wall-input');
    let message = textArea.value;
    let p = document.createElement('p');
    let text = document.createTextNode(message);
    p.appendChild(text);

    let wall = document.getElementById('wall');
    wall.appendChild(p);

    message = "";

}

let form = document.querySelector('form');
form.addEventListener("submit", onSubmit);

async function showServerString() {
    const responseFromServer = await fetch('/hello');
    const textFromServer = await responseFromServer.text();
    const serverStringContainer = document.getElementById('server-string-container');
    serverStringContainer.innerHTML = textFromServer;
}