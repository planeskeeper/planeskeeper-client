'use strict';

var app = app || {};

(function(module){ // start IIFE 

  module.cardView.initUserPage = () => {
    console.log('Show User Collection Page'); 
    app.showOnly('user'); 
    $('#collect-list').html(''); // removes all cards displayed user cards. 
    app.Card.user.map(a => a.toHtml('user')); // put their collection on the page!

  }; // end cardView.initUserPage

  module.cardView.collectionTemplate = cardObj => {
    let template = Handlebars.compile($('#collection-template').text());
    return template(cardObj);
  }; // end cardView.collectionTemplate 

  // listners used only in user-view where they can search their collection
  

})(app); // end IIFE