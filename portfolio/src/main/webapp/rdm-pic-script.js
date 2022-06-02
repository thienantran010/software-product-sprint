function randomPicture () {
    let number = Math.floor(Math.random() * 21);
    let newSrc = `images/me/me-${number}.jpg`;
    let img = document.getElementById('selfie');
    img.src = newSrc;
}

let selfieButton = document.getElementById('new-selfie');
selfieButton.addEventListener("click", randomPicture);