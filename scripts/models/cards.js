'use strict';
var app = app || {};

(function(module){ // begin IIFE

  function Card(cardObj) { // Card object constructor
    this.api_card_id = cardObj.id, 
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
      if (output === 'search') {
        $('#main-search').append(app.cardView.searchTemplate(this)); 
      }
      if (output === 'user') { 
        console.log('we are inside .toHtml for user collection page');
        $('#collect-list').append(app.cardView.collectionTemplate(this)); 
        // $('#collect-list').append(app.cardView.searchTemplate(this)); 
        // print it to the appropriate location
      } 
    } // if we had any more .toHtml conditions, they would go here. 
    
  } // end prototype.toHtml

  Card.edit = function (idChoice, user_id, action) {
    if (action = 'add') { // after a search, user decided to add this card
      console.log(`We are in Card.edit with ${idChoice}, ${user_id}, ${action}`); 
      // does our DB cards table already have this card? If not, add it. 
      let payload = {}; 
      // find the object in the Card.search array with matching api_card_id, return this object as payload
      Card.search.map(cardObj => {
        if(cardObj.api_card_id = idChoice) payload = cardObj;
      }); 
      payload.user_id = user_id; 
      $.post(`${app.ENVIROMENT.apiURL}/collection`, payload)
        .then(results => {
          console.log(results);
      }); // end $.post
    } else if (action = 'plus') { // from collections page, user says they got another copy of this card
      let card_id = idChoice; // assume we were passed the actual DB cards table id for this card
      // upsert into users_cards for this user_id and card_id
    } else if (action = 'minus') { // from collections page, user says they have 1 less of this card
      let card_id = idChoice; // assume we were passed the actual DB cards table id for this card
      // if the amount in users_cards is only 1, send an error that they need to click delete
      // else update user_cards with 1 minus on amount value in the users_cards table 
    } else if (action = 'delete') { // remove this card from the user's collection
      let card_id = idChoice; // assume we were passed the actual DB cards table id for this card
      // delete from users_cards table regardless of number of cards the user has
      // ?? do we want to see if we should remove it from the cards table (because no one has this card now)?
    } else { // we want to edit that is not an add, plus, minus, or delete
      // what else do we edit? 
      // return an error code since we've captured all condidtions?
    }
  
  }; // end Card.add funciton. 

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