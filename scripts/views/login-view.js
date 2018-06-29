'use strict';

var app = app || {};

(function(module){ // start IIFE

//   // Constructor
//   function Users(usersObj) {
//     Object.keys(usersObj).forEach(key => this[key] = usersObj[key]);
// };

// $('#new-login').on('click', handlForm);
//     function handlForm(event) {
//         event.preventDefault();
//         let formData = {};
//         formData.username = $('#new-username').val()
//         let user = new Users(formData);
//         console.log(user);
//         user.postUser();

//     };

//     Users.prototype.postUser = function (callback) {
//       $.post(`${app.ENVIROMENT.apiURL}/api/v1/users`, {
//           username: this.username
//       })
//           .then(console.log('it works!'))
//           .then(results => {
//               Users.loadOne(results);
//               callback();
//           })
//   };

  module.cardView.initLoginPage = (action) => { 
    app.showOnly('login'); 
    if( action === 'login') {
      console.log('User Login'); 
      // authenticate the user
      let user = 1; 
      app.user = user; 
      app.Card.fetchAll(app.user); 
    //   now Card.user is an array of all this user's collection
      console.log('User logged in!'); 
  
    } else { // (action === 'logoff')
      console.log('User Log-OFF'); 
      app.user = ''; 
    } // end if/else login/logout
    }; // end initLoginPage
  
})(app); // end IIFE