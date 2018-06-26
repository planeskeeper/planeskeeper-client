'use strict';

var app = app || {};

(function(module){ // start IIFE

  module.cardView.initLoginPage = (action) => { 
    app.showOnly('login'); 
    if( action === 'login') {
      console.log('User Login'); 
      // authenticate the user
    } else { // (action === 'logoff')
      console.log('User Log-OFF'); 
    } // end if/else login/logout
    }; // end initLoginPage
  
})(app); // end IIFE