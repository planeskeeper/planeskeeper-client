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