<script>

/* define Card object and deck of cards here */
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
class Deck {
  constructor() {
    this.cards = [];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    //Makes a deck of 52 unique cards
    for (let suit of suits) {
      for (let value of values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }
}

//Creates a deck of cards
let deck = new Deck();

//Random number between 0 and however long the deck is
function getRandomInt() {
  return Math.floor(Math.random() * deck.cards.length);
}

const dealHand = () => {

  /* code to deal a card hand goes here */
  //Placement holder card
  let card = deck.cards[getRandomInt()];
  let handString = '';
  let indexValue = 0;
  //If the deck has feweer than 5 cards, it will make a new deck to deal from
  if (deck.cards.length < 5) {
    deck = new Deck();
    handString = 'Deck has been reshuffled <br>';
  }

  //Deals 5 cards and prints info
  for (let i = 0; i < 5; i++) {
    indexValue = getRandomInt();
    card = deck.cards[indexValue];
    //Removes the card from the deck
    deck.cards.splice(indexValue, 1);
    handString += "- " + card.value + ' of ' + card.suit + '<br>';
  }

  $("#card_hand").html(handString);

  return false; // prevent page reload
}

</script>