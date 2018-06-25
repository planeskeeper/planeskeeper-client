'use strict';

var app = app || {}

(function(module){
  let homeView = {}; 
  homeView.initIndexPage() {
    app.showOnly('home'); 
  };


  // listner for main page search
   $('#search-all').on('click', searchAll);

   function searchAll(e) { // currently just stubbed out. 
    //  e.preventDefault();
    //  $.get();  
   } // end searchAll
 
  // listner for action on each card in search result list  
  $('article').on('click', '.card-in-list', e => {
    let idChoice = `${$(this).attr('id')}`; 
    let action = e.body; 
    console.log(`On Card id: ${idChoice}`);
    console.log(`Your action: ${action}`); 
  }); // end listner for each card in search result list

  module.homeView = homeView; 
  
})(app);