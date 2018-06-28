'use strict';

var app = app || {};

(function(module){ // start IIFE 

  module.cardView.initUserPage = () => {
    console.log('Show User Collection Page'); 
    app.showOnly('user'); 
    $('#collect-list').html(''); // removes all cards displayed user cards. 
    let user = 1; 
    app.user = user; 
    app.Card.fetchAll(app.user); // Card.user is an array of all this user's collection
    console.log('so put it on the page!'); 
    
    app.Card.user.map(a => a.toHtml('user'));

  }; // end cardView.initUserPage

  module.cardView.collectionTemplate = cardObj => {
    let template = Handlebars.compile($('#collection-template').text());
    return template(cardObj);
  }; // end cardView.collectionTemplate 

  // listners used only in user-view where they can search their collection
  

})(app); // end IIFE