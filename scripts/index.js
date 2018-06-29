'use strict';
var app = app || {};

(function(module){ // Begin IIFE

  let productionApi = `https://planeskeeper.herokuapp.com/api/v1`;
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
  
  
  // event listner & handler for navigation 
  $('nav').on('click', '.tab', function(e) {
    e.preventDefault();
    let link = `${$(this).data('content')}`; 
    console.log(` You clicked ${link}`);
    if (link === 'home') app.cardView.initIndexPage();
    if (link === 'user') { 
      if (!app.user) app.cardView.initLoginPage('login'); 
      else { 
        app.Card.fetchAll(app.user.id);
      }
    }
    if (link === 'about') module.showOnly('about');
    if (link === 'login') app.cardView.initLoginPage('login'); 
    if (link === 'logoff') app.cardView.initLoginPage('logoff'); 
  }); // end event listner for navigation 
  
  // listner for main page search is in home-view.js, and so is the 
  // listner for actions on each card in search result
  
  $(document).ready(function () {
    if (app.user) {
      $('.user-login').html(app.user.username);
    } else { 
      $('.user-logoff').hide(); 
    }
    app.cardView.initIndexPage(); 
  }); // end on document load

  module.errorCallback = errorCallback; 
})(app); // End IIFE

// start of hover & click state on navigation. 
$(function(){
  $("#nav-home").on({
   mouseenter: function(){
    $(this).attr('src','images/hover-home.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/home-normal.png');
  },
  click: function(){
    $(this).attr('src', 'images/pushed-home.png')
  },

  });
  
});

$(function(){
  $("#nav-user").on({
   mouseenter: function(){
    $(this).attr('src','images/hover-cards.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/normal-cards.png');
  },
  click: function(){
    $(this).attr('src', 'images/pushed-cards.png')
  },

  });
  
});

$(function(){
  $("#nav-about").on({
   mouseenter: function(){
    $(this).attr('src','images/hover-about.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/normal-about.png');
  },
  click: function(){
    $(this).attr('src', 'images/pushed-about.png')
  },

  });
  
});

$(function(){
  $("#nav-login").on({
   mouseenter: function(){
    $(this).attr('src','images/hover-login.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/normal-login.png');
  },
  click: function(){
    $(this).attr('src', 'images/pushed-login.png')
  },

  });
  
});

$(function(){
  $("#search-img").on({
   mouseenter: function(){
    $(this).attr('src','images/hover-search.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/normal-search.png');
  },
  click: function(){
    $(this).attr('src', 'images/pushed-search.png')
  },

  });
// end of hover & click state on navigation. 
  
  
});