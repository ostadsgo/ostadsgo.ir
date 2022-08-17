console.log("Well from javascript!");

function getRandomColor() {
    const colors = ['#6E85B7', '#9CB4CC', '#68A7AD', '#8FBDD3', '#BE8C63', '#1572A1'];
    const randomPosition = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomPosition];
    return randomColor;
}


function applyColorToCardBorder() {
    const cards = document.getElementsByClassName("card");
    for(let card of cards) {
        const randomColor = getRandomColor();
        card.style.border = `3px solid ${randomColor}`;
    }
}


function applyColorToPostTag() {
    const tags = document.getElementsByClassName("tag");
    for(let tag of tags) {
        const randomColor = getRandomColor();
        tag.style.backgroundColor = `${randomColor}`;
        // console.log(tag);
    }
}


applyColorToCardBorder();
applyColorToPostTag();


