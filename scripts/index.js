'use strict'


var app = app || {}

(function(module){

    let productionApi = '';
    let devApi = 'http://localhost:3000';

    module.isProduciton = /^(?!localhostr|127)/.test(windows.location.hostname);

    module.ENVIROMENT = {
        apiURL: module.isProduciton ? productionApi : devApi
    };

    function errorCallback(errorObj) {
        console.log(errorObj);

    };

})(app);

<<<<<<< HEAD
=======
$(document).ready(function () {

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

});

>>>>>>> 1a28c87dca4fc0f659340148bb791a13d3d08cdb
