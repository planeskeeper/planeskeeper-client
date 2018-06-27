'use strict';
var app = app || {};

(function(module){ // begin IIFE

  function Card(cardObj) { // Card object constructor
    this.card_id = cardObj.id, 
    this.name = cardObj.name, 
    this.image_url = cardObj.imageUrl || cardObj.image_url || 'https://image.ibb.co/imTHKo/magic_card_back_no_preview.png', 
    this.rarity = cardObj.rarity,
    this.set = cardObj.set, 
    this.body = cardObj.originalText || cardObj.body, 
    this.color = cardObj.colors || 'none';
    // Object.keys(cardObj).forEach(key => this[key] = cardObj[key]);
  } // end Card constructor 
  
  Card.user = []; //Array user owned cards? 
  Card.search = []; // Array of results from the API search
  // Card.all = []; // temporary place holder.  

  Card.prototype.toHtml = function (output) {
    if (output !== 'user' && output !== 'search') {
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
    console.log(`we are in loadAll for ${source} `);
    if (source !== 'user' && source !== 'search') {
      app.errorCallback('Card.loadAll called with first paramater not equal to "user" or "search" ');
    } else { // sort, instantiate, put in appropriate list
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

  Card.fetchAll = (user) => {
    console.log(`We are in Card.fetchAll for user: ${user}`);
    console.log(`Env apiUrl: ${app.ENVIROMENT.apiURL}`); 
    $.get(`${app.ENVIROMENT.apiURL}/collection/${user}`).then(results => {
      console.log(`Card.fetch put results in app.Card.user`);
      Card.loadAll('user', results); 
    }).catch(console.error); 
  }; // end Card.fetchAll 

  module.Card = Card; 
})(app); // end IIFE