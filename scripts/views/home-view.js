'use strict';

var app = app || {};

(function(module){ // start IIFE
  let cardView = {}; 

  cardView.initIndexPage = () => {
    console.log('init Index Page'); 
    app.showOnly('home'); 
    $('#main-search').html('');
  }; // end cardView.initIndexPage 
  
  cardView.searchTemplate = cardObj => {
    let template = Handlebars.compile($('#card-template').text());
    return template(cardObj);
  }; // end cardView.searchTemplate 

  let getCardsApi = function (event) {
    event.preventDefault();
    var cardName = $('#card-name-search').val();
    $.getJSON(`https://api.magicthegathering.io/v1/cards?name=${cardName}`, function (json) {
      app.Card.loadAll('search', json.cards); 
      $('#main-search').html(''); 
      app.Card.search.map(a => a.toHtml('search')); 
      // listner for action on each card in search result list  
      $('.add-card').on('click', e => {
        e.preventDefault(); 
        // note - e.target.id is the same as $(this).attr('id')
        // but only if we are inside function(e) and not arrow func
        let idChoice = e.target.id; 
        // app.user.id & app.user.username is set some time before this, we hope. 
        if (!app.user) {
          $('#main-search').html('<h2>Sorry, You must login to add a card!'); }
          else {
            let action = 'add'; 
            console.log(`On Card id: ${idChoice}`);
            console.log(`For user: ${app.user.id}`); 
            console.log(`Your action: ${action}`); 
            app.Card.edit(idChoice, app.user.id, action); 
          }

      }); // end listner for each card in search result list
    });
  }; // end getCArdsApi, which is our search-button handler
  

  // listner for main page search
  $('#search-button').click(getCardsApi);


  module.cardView = cardView;
})(app); // end IIFE