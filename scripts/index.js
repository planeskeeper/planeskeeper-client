'use strict';
var app = app || {}

(function(module){ // Begin IIFE

  let productionApi = '';
  let devApi = 'http://localhost:3000';

  module.isProduciton = /^(?!localhostr|127)/.test(windows.location.hostname);

  module.ENVIROMENT = {
    apiURL: module.isProduciton ? productionApi : devApi
  };

  function errorCallback(errorObj) {
      console.log(errorObj);
  };
  module.showOnly = (selector) => {
    $('.view').hide();
    // $('nav.menu').slideUp(350); // We could animate the nav, but class has not been set on navigation menu. 
    $(selector).show();
  }
  
  // event listner & handler for navigation 
  $('nav').on('click', '.tab', e => {
    event.preventDefault();
    let link = `${$(this).data('content')}`; 
    console.log(` You clicked ${link}`);
    if (link === 'home') app.cardView.initIndexPage);
    if (link === 'user') app.cardView.initUserPage); 
    if (link === 'about') module.showOnly('.about');
    if (link === 'login') app.cardView.initLoginPage('login')); 
    if (link === 'logout') app.cardView.initLoginPage('logout')); 
  }); // end event listner for navigation 

  // listner for main page search is in home-view.js, and so is the 
  // listner for actions on each card in search result


  module.errorCallback = errorCallback; 

})(app); // End IIFE