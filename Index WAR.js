// Needed to shuffle the array... this came after I built my array but had to precede the array
//Fisher-Yates (aka Knuth) Shuffle method used. Found at stackoverflow.com used the longer form to better understand
// what I was doing and how the code used the inputs of the array. 

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
// Needed a deck of 52 cards, was easier at first to create an array of 52 elements
// unicode key: \u2660 = spades \u2665 = hearts \u2666 = diamonds \u2663= clubs
// This wasn't necessary but makes the final product look more like a card game

let deck = [
    "01-Ace \u2660", "01 Ace \u2665", "01-Ace \u2666", "01-Ace \u2663",
    "02-Two \u2660", "02 Two \u2665", "02-Two \u2666", "02-Two \u2663",
    "03-Three \u2660", "03 Three \u2665", "03-Three \u2666", "03-Three \u2663",
    "04-Four \u2660", "04 Four \u2665", "04-Four \u2666", "04-Four \u2663",
    "05-Five \u2660", "05 Five \u2665", "05-Five \u2666", "05-Five \u2663",
    "06-Six \u2660", "06 Six \u2665", "06-Six \u2666", "06-Six \u2663",
    "07-Seven \u2660", "07 Seven \u2665", "07-Seven \u2666", "07-Seven \u2663",
    "08-Eight \u2660", "08 Eight \u2665", "08-Eight \u2666", "08-Eight \u2663",
    "09-Nine \u2660", "09 Nine \u2665", "09-Nine \u2666", "09-Nine \u2663",
    "10-Ten \u2660", "10 Ten \u2665", "10-Ten \u2666", "10-Ten \u2663",
    "11-Jack \u2660", "11 Jack \u2665", "11-Jack \u2666", "11-Jack \u2663",
    "12-Queen \u2660", "12 Queen \u2665", "12-Queen \u2666", "12-Queen \u2663",
    "13-King \u2660", "13 King \u2665", "13-King \u2666", "13-King \u2663",
];
shuffle(deck);
console.log (deck);     //Log the deck to check that the deck is shuffled

// need to get a card for each player, simpler to use pop and shift to pull the first and last element for comparison
let round = 1       //needed to start on round 1 and use 27 rounds to avoid starting at the index (0)
let player1 = 0 
let player2 = 0

while (round < 27) {

    console.log ("Round " + round);    

    let card1 = deck.shift();                       //Pull the first card of the array
    let cardVal1 = card1.substring(0,2);            //substring sets the card value using the first two characters in
                                                    // the string which happen to be numerals for a comparison in the "if" function later
console.log (card1.substring(3,));                  // log out player1 card and using substring just log name and icon of card

    let card2 = deck.pop();                         //Pull the last card of the array
    let cardVal2 = card2.substring(0,2);

console.log (card2.substring(3,));

 
    if (cardVal1 > cardVal2) {          // if else statement to determine winner
        player1 ++;
        console.log("player1 Wins " + "Score " + player1 + "/" + player2);
    } else if (cardVal1 < cardVal2) {
        player2 ++;
        console.log("player2 Wins " + "Score " + player1 + "/" + player2);
    }
        else {
        console.log("Tie no points");
    }
    
round++;


}
    
console.log( "Player 1 score " + player1 + " Player 2 score " + player2 );
if (player1 > player2) {
    console.log ("Winner PLAYER 1!");
    } else {
        console.log ("Winner Player 2!");
    }
console.log("Game Over " + (round - 1) + " rounds played"); // logs the number of rounds played to confirm

console.log("Refresh to play again!")