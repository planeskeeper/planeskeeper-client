'use strict';

var app = app || {};

(function(module){ // start IIFE 

  module.cardView.initUserPage = () => {
    console.log('Show User Collection Page'); 
    app.showOnly('user'); 
    $('#collect-list').html(''); // removes all cards displayed user cards. 

  };

  // listners used only in user-view where they can search their collection
  

})(app); // end IIFE