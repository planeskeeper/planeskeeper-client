'use strict';
var app = app || {};

(function(module){ // Begin IIFE


  function Card(cardObj) { // Card object constructor
    this.card_id = cardObj.id, 
    this.name = cardObj.name, 
    this.image_url = cardObj.imageUrl, 
    this.rarity = cardObj.rarity,
    this.set = cardObj.setName, 
    this.body = cardObj.originalText, 
    this.color = cardObj.colors
    // Object.keys(cardObj).forEach(key => this[key] = cardObj[key]);
  } // end Card constructor 
  
  Card.user = []; //Array user owned cards? 
  Card.search = []; // Array of results from the API search
  // Card.all = []; // temporary place holder.  

  Card.prototype.toHtml = function (output) {
    if (output !== 'user' || 'search') {
      app.errorCallback('Card.toHtml called with paramater not equal to "user" or "search" ');
    } else {
      if (output = 'search') {
        $('#main-search').append(app.cardView.searchTemplate(this)); 
      }
      // if (output = 'user') { 
      //   app.CardView.userTemplate(this); 
      //   // print it to the appropriate location
      // } 
    } // if we had any more .toHtml conditions, they would go here. 
    
  } // end prototype.toHtml

  Card.loadAll = (source, rows) => {
    if (source !== 'user' || 'search') {
      app.errorCallback('Card.loadAll called with first paramater not equal to "user" or "search" ');
    } else {

      rows.sort((a,b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) { return -1 }
        if (a.name.toUpperCase() > b.name.toUpperCase()) { return 1 }
        return 0; 
      }); // end of sort funciton. 
      Card.tmp = rows.map(cardObj => new Card(cardObj));
      if (source = 'user') Card.user = Card.tmp;
      if (source = 'search') Card.search = Card.tmp;
      // Card.tmp is destroyed once outside of .loadAll function 
    } // end if (paramater input error) - else instantiate and put in assigned list
  } // end of Card.loadAll

  module.Card = Card; 

})(app); // end IIFE

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

