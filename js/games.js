/***************************************************
PLAYING CARD FUNCTIONS
****************************************************/

//Create new deck of cards (non shufled)
function CreateCardDeck()
{
    var cardDeck = [];
    var suits = ["hearts","clubs","spades","diamonds"];
    var cardValue = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];

    for(var i=0;i<suits.length;i++)
    {
        for(var j=0;j<cardValue.length;j++)
        {
            var newCard = {
                suit: suits[i],
                value: cardValue[j]
            };
            cardDeck.push(newCard);
        }
    }
    return cardDeck;
}


//Shuffle Deck
//Used this after my own version was very inefficent
//http://bost.ocks.org/mike/shuffle/
function ShuffleCardDeck(cardDeck)
{
    var m = cardDeck.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = cardDeck[m];
        cardDeck[m] = cardDeck[i];
        cardDeck[i] = t;
    }
    return cardDeck;
}


//Returns new shuffled deck
function newShuffledDeck()
{
    var cardDeck = CreateCardDeck();
    var newShuffle = ShuffleCardDeck(cardDeck);
    return newShuffle;
    
}