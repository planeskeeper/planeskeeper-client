'use strict';
var app = app || {};

(function (module) { // Begin IIFE

  let productionApi = 'https://planeskeeper.herokuapp.com/';
  let devApi = 'http://localhost:3000/api/v1';
  module.isProduciton = /^(?!localhostr|127)/.test(window.location.hostname);
  module.ENVIROMENT = {
    apiURL: module.isProduciton ? productionApi : devApi
  };

  function errorCallback(errorObj) {
    console.log(errorObj);
  };
  module.showOnly = (selector) => {
    $('.view').hide();
    // $('nav.menu').slideUp(350); // We could animate the nav, but class has not been set on navigation menu. 
    $(`.${selector}`).show();
  } // end .showOnly 

  // listner for main page search is in home-view.js, and so is the 
  // listner for actions on each card in search result

  $(document).ready(function () {
    // module.showOnly('home'); 
    // event listner & handler for navigation 
    $('nav').on('click', '.tab', function (e) {
      e.preventDefault();
      let link = `${$(this).data('content')}`;
      console.log(` You clicked ${link}`);
      if (link === 'home') app.cardView.initIndexPage();
      if (link === 'user') app.cardView.initUserPage();
      if (link === 'about') module.showOnly('about');
      if (link === 'login') app.cardView.initLoginPage('login');
      if (link === 'logoff') app.cardView.initLoginPage('logoff');
    }); // end event listner for navigation

    if (app.cardView.user) {
      $('.user-login').html(app.cardView.user);
    } else {
      $('.user-logoff').hide();
    }
  }); // end on document load

  module.errorCallback = errorCallback;
})(app); // End IIFE

// $(document).ready(function () {

//     $(".cross").hide();
//     $(".menu").hide();
//     $(".hamburger").click(function () {
//         $(".menu").slideToggle("slow", function () {
//             $(".hamburger").hide();
//             $(".cross").show();
//         });
//     });

//     $(".cross").click(function () {
//         $(".menu").slideToggle("slow", function () {
//             $(".cross").hide();
//             $(".hamburger").show();
//         });
//     });

// });
