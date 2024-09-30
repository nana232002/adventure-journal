var readlineSync = require('readline-sync');
const suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const valueMap = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 0,
    "8": 8,
    "9": 9,
    "10": 10,
    "Jack": -1,
    "Queen": 12,
    "King": 13
};
const deck = []; // the array that have all the cards
 // insert the values into the array
for (let suit of suits) {
    for (let value of values) {
        deck.push({
            card: `${value} of ${suit}`,   // Card name, e.g., "King of Spades"
            value: valueMap[value]         // Corresponding numerical value
        });
    }
}

// const deck = []; // the array that have all the cards
//  // insert the values into the array
// for (let suit of suits) {
// for (let value of values) {
//     deck.push(`${value} of ${suit}`);
// }
// }

// Function to get a random card from the deck
function getRandomCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex].card;
}
let uniqeCard =getRandomCard(deck); // the unique card
const cards = []; // the cards array
for (let i=0 ;i<8;i++) {
cards[i] = [];
cards[i][0]= getRandomCard(deck);
cards[i][1]="card dawn";
}
let flag1=true;
let flage2 = true;
console.log("welcome to the golf card game")
let number =1 ;


while ( flag1 & flage2){ // the game loop
if (cards[0][1] != "card dawn" && cards[1][1] != "card dawn" && cards[2][1] != "card dawn" && cards[3][1] != "card dawn")
{
    flag1 = false;
}
if (cards[4][1] != "card dawn" && cards[5][1] != "card dawn" && cards[6][1] != "card dawn" && cards[7][1] != "card dawn")
    {
        flage2 = false;
    }
if (number % 3==0 | number ==1){
    console.log("-----Board-----");

    let result ="player 1 hand :";
    for (let i=0 ;i<4;i++) {
        result += cards[i][1] + " | ";
        }
    console.log(result);
    let result2 ="player 2 hand :"
    
    for (let i=4 ;i<8;i++) {
        result2 += cards[i][1] + " | ";
    }
    console.log(result2);  
}
uniqeCard =getRandomCard(deck);
console.log( "the randomCard is :" + uniqeCard);

turn (number);
number ++;
}

function turn( num){ 
    if (num % 2 ==1){ // player 1 turn 
        console.log(" player 1 turn ");
        let answer1 = readlineSync.question("Choose action: 1) Draw from Deck 2) Take from discard pile: ");
        if (answer1 === "1") {
            let answer = readlineSync.question("which card (1-4) you want to show");
            if ( answer > 4 || answer <0 || cards[answer-1][1] != "card dawn" )
                {
                console.log("\nInvalid choice. Again!!\n");
                turn(num);
                }
            else{
                cards[answer-1][1]= cards[answer-1][0];
                }
    }
    else if (answer1 === "2") {
        let answer3 = readlineSync.question( "which card (1-4) you want to replace");
        if ( answer3 > 4 || answer3 <0 || cards[answer3-1][1] != "card dawn" )
            { console.log("\nInvalid choice. Again!!\n");
            turn(num);
            }
            else{
                cards[answer3-1][1]= uniqeCard;
                }
                        }
            else { console.log("\nInvalid choice. Again!!\n");
                turn(num);
            }
            }
            if (num % 2 ==0){ // player 2 turn
                console.log(" player 2 turn ");
                let answer4 = readlineSync.question("Choose action: 1) Draw from Deck 2) Take from discard pile: ");
                if (answer4 === "1") {
                    let answer5 = readlineSync.question("which card (1-4) you want to show");
                    const y = parseInt(answer5)+3;
                    if ( answer5 > 4 || answer5 <0 || cards[y][1] != "card dawn" )
                        {
                        console.log("\nInvalid choice. Again!!\n");
                        turn(num);
                        }
                    else{
                        cards[y][1]= cards[y][0];
                        }  
            }
            else if (answer4 === "2") {
                let answer6 = readlineSync.question( "which card (1-4) you want to replace");
                const x = parseInt(answer6)+3;
                if ( answer6 > 4 || answer6 <0 || cards[x][1] != "card dawn" )
                    { console.log("\nInvalid choice. Again!!\n");
                    turn(num);
                    }
                    else{
                        cards[x][1]= uniqeCard;
                        }
                                }
                    else { console.log("\nInvalid choice. Again!!\n");
                        turn(num);
                        }
                
                    }
                        }     
score (cards , deck);
function score (cards , deck){
    let sum1 =0;
    let sum2 =0;
    for (let i=0 ;i<4 ; i++)
    { 
        const value = getCardIndex(deck,cards[i][1]);
        sum1 += deck[value].value;
        const value1 = getCardIndex(deck,cards[i+4][1]);
        sum2 += deck[value1].value;
    }
    console.log("the score of the first player is :"+sum1);
    console.log("the score of the second player is :"+sum2);
    if (sum1<sum2){
        console.log("the winner is : player 1" );
    }
    else{console.log("the winner is : player 2" ); }
}
// Function to get the index of a specific card in the deck
function getCardIndex(deck, cardName) {
    for (let i = 0; i < deck.length; i++) {
      if (deck[i].card === cardName) {
        return i; // Return the index of the card
      }
    }
}

