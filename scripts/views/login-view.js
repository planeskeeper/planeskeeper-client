'use strict';

var app = app || {};

(function(module){ // start IIFE

  // Constructor
  function Users(usersObj) {
    Object.keys(usersObj).forEach(key => this[key] = usersObj[key]);
};

$('#login').on('click', handlForm);
    function handlForm(event) {
        event.preventDefault();
        let formData = {};
        formData.username = $('#username').val()
        let user = new Users(formData);
        console.log(user);
        user.postUser();

    };

    Users.prototype.postUser = function (callback) {
      $.post(`${app.ENVIROMENT.apiURL}/api/v1/users`, {
          username: this.username
      })
          .then(console.log('it works!'))
          .then(results => {
              Users.loadOne(results);
              callback();
          })
  };

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