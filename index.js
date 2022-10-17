
let player = {
    name: "Damian",
    chips: 125,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = "Player: " + player.name + " chips: " + player.chips + " USD"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 12 ) +1
    
    if (randomNumber === 1) {
        return randomNumber = 11;
    }
    else if (randomNumber > 10) {
        return 10;
    }
    else {
        return randomNumber
    }
}


function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard + " "
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want a new card?"
        isALive = true
    } else if (sum === 21) {
        message = "Congratulations! You have a blackjack!"
        hasBlackJack = true
        isALive = false
    } else { 
        message = "You're out of the game"
        isALive = false
    }
    messageEl.textContent = message
}


function newCard() {

    if (isALive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card;
    cards.push(card)
    renderGame()
    }
    
}


let castle = {
    name: "Proudmoore",
    price: 145,
    freeParking: true,
    tags: ["wifi", "view"]

}

console.log (castle.price)