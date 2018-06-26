'use strict';

var app = app || {};

(function(module){ // start IIFE
  let cardView = {}; 

  cardView.initIndexPage = () => {
    console.log('init Index Page'); 
    app.showOnly('home'); 
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
    });
  }; // end getCArdsApi, which is our search-button handler
  

  // listner for main page search
  $('#search-button').click(getCardsApi);
  //  $('#search-all').on('click', searchAll);

  // listner for action on each card in search result list  
  // $('article').on('click', '.card-in-list', e => {
  //   let idChoice = `${$(this).attr('id')}`; 
  //   let action = e.body; 
  //   console.log(`On Card id: ${idChoice}`);
  //   console.log(`Your action: ${action}`); 
  // }); // end listner for each card in search result list

  module.cardView = cardView;
})(app); // end IIFE