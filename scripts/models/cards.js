'use strict';

//Array of cards
Card.all = [];

//Card object
function Card(cardObj) {
    Object.keys(cardObj).forEach(key => this[key] = cardObj[key]);
}

Card.prototype.toHtml = function () {
    var template = Handlebars.compile($('#card-list-template').text());
    return template(this);
}

var getCardsApi = function (event) {
    event.preventDefault();
    Card.all = [];
    var cardName = $('#card-name-search').val();

    $.getJSON(`https://api.magicthegathering.io/v1/cards?name=${cardName}`, function (json) {
        console.log(json);
        Card.all = json;
        console.log(Card.all);
       for(var i in Card.all){
           new Card(Card.all[i])
           
       }
    });
};

$('#search-button').click(getCardsApi);