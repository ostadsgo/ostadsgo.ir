console.log("Well hello there!");


const colors = ['#6E85B7', '#9CB4CC', '#68A7AD', '#8FBDD3', '#BE8C63', '#1572A1'];
const cards = document.getElementsByClassName("card");


for(let card of cards) {
    const randomPosition = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomPosition];
    card.style.border = `3px solid ${randomColor}`;
}

