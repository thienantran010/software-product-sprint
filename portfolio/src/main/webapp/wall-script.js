/*helper functions */
function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}


async function showServerString() {
    const responseFromServer = await fetch('/hello');
    const quoteList = await responseFromServer.json();
    let number = Math.floor(Math.random() * 3);
    const serverStringContainer = document.getElementById('server-string-container');
    serverStringContainer.innerText = quoteList[number];
}

async function showWall() {
    const responseFromServer = await fetch('/show-post');
    const postList = await responseFromServer.json();

    postList.forEach((post) => {
        const post = document.createElement("div");
        addClass(post, "post");
        const message = document.createElement("p");
        addClass(message, "message");
        const name = document.createElement("span");
        addClass(name, "name");
        const timestamp = document.createElement("span");
        addClass(timestamp, "timestamp");

        const messageTextNode = document.createTextNode(post.message);
        const nameTextNode = document.createTextNode(post.name);
        const timestampTextNode = document.createTextNode(post.timestamp.toString());

        message.appendChild(messageTextNode);
        name.appendChild(nameTextNode);
        timestamp.appendChild(timestampTextNode);

        post.appendChild(message);
        post.appendChild(name);
        post.appendChild(timestamp);

        const wall = document.getElementById("wall");
        wall.appendChild(post);
    })
}

showWall();