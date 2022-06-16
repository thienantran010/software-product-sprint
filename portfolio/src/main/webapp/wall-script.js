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
        const message = document.createElement("p");
        const name = document.createElement("span");
        const timestamp = document.createElement("span");

        const messageTextNode = document.createTextNode(post.message);
        const nameTextNode = document.createTextNode(post.name);
        const timestampTextNode = document.createTextNode(post.timestamp.toString());

        message.appendChild(messageTextNode);
        name.appendChild(nameTextNode);
        timestamp.appendChild(timestampTextNode);

        document.body.appendChild(message);
        document.body.appendChild(name);
        document.body.appendChild(timestamp);
    })
}

showWall();