/*-------------------------------- Constants --------------------------------*/
const suits = ["spades", "diamonds", "clubs", "hearts"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const playerCash = 1000;

/*--------------------------------Game State Variables --------------------------------*/
let dealerCards = [];
let playerCards = [];
let playerCurrentCash;
let playerCurrentBet;
let deck = [];
/*------------------------ Cached Element References ------------------------*/
const playerCardsEl = document.getElementById('playerCardStack'); //Dont forget to style this so it shows up. This is where the cards will be displayed 
const dealerCardsEl = document.getElementById('dealerCardStack'); //Dont forget to style this
const hitButton = document.getElementById('hitButton');
const stayButton = document.getElementById('stayButton');
const playButton = document.getElementById('playButton');
const doubleDownButton = document.getElementById('doubleDownButton');
const splitButton = document.getElementById('hitButton');
/*----------------------------- Event Listeners -----------------------------*/
hitButton.addEventListener('click', hit);
stayButton.addEventListener('click', dealerTurn);
playButton.addEventListener('click', init);
doubleDownButton.addEventListener('click', doubleDown);
splitButton.addEventListener('click', split);

/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log('init');
    //1. This will not be kicked off until user places bet
    //If user bet, proceed
    //placeBet();
    //2. call Deal()
    firstDeal();
}

function reset() {
    console.log('reset');
    //2. refresh all game stats and set everything back to zero
}

function placeBet() {
    const bet = prompt('Please enter a bet less than 1000');
    console.log(bet);
    playerCurrentBet = bet;
}

function firstDeal() {
    //Shuffle and create deck
    deck = []
    for (i = 0; i < 13; i++) {
        deck.push(cardValues[i] + 'S');
        deck.push(cardValues[i] + 'D');
        deck.push(cardValues[i] + 'C');
        deck.push(cardValues[i] + 'H');
    }
    console.log(deck);

    //Deal a random int index card to the player, remove from deck
    const dealerFirstCard = hit();
    const playerFirstCard = hit();
    const dealerSecondCard = hit();
    const playerSecondCard = hit();
    console.log(deck);
    dealerCards.push(dealerFirstCard, dealerSecondCard);
    playerCards.push(playerFirstCard, playerSecondCard);
    //Wait for user input...
    console.log(`dealer first card: ${dealerFirstCard} dealer second card ${dealerSecondCard} player first card: ${playerFirstCard} player second card:${playerSecondCard}`);

    //Render dealer and player card images
    alert(`Dealer:${dealerCards} Player: ${playerCards}`);
}

function hit() {
    //Return and remove random card from deck
    return deck.splice([Math.floor(Math.random() * deck.length)], 1);
}

function dealerTurn() {
    //After player is done betting, doubling down, splitting, entering input...

    //Dealer shows all of his cards
    //If dealer has 16 or less, must hit until passes 16
    let handValue = calculateCards(dealerCards);
    console.log(`handValue: ${handValue}`);

    
    //call DecideRoundWinner()
}

function calculateCards(playerCardArray) {
    let total = 0;
    console.log(`playerCardArray: ${playerCardArray}`);
    playerCardArray.forEach(card => {
        console.log(`card: ${card}`)
        let cardValue = String(card).substring(0,1);
        console.log(`cardvalue: ${cardValue}`);
        if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') {
            total += 10;
        }
        else if (cardValue === 'A') {
            total += 11;
        }
        else {
            total += parseInt(cardValue);
        }
    })
    return total;
}

function doubleDown() {
    
}

function split() {

}

function DecideRoundWinner() {
    //If player wins round...Play celebratory winning audio or animation

    //If player loses round...Play crowd sad audio or animation

    //clear game table and prepare for next round

}

function renderCards() {

}
