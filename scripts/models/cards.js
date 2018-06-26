'use strict';

//Array of cards
Card.all = [];

//Card object
function Card(cardObj) {
    Object.keys(cardObj).forEach(key => this[key] = cardObj[key]);
}