"use strict";

var ngrok = require('ngrok');
var config = require('config') ;


module.exports = function ( option) {
	var options = {
	    proto: 'http', // http|tcp|tls 
	    addr: 8080, // port or network address 
	    auth: 'user:pwd', // http basic authentication for tunnel 
	    subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io 
	    authtoken: '12345', // your authtoken from ngrok.com 
	    region: 'us' // one of ngrok regions (us, eu, au, ap), defaults to us 
	}
	ngrok.connect(options, function (err, url) {
		console.log ( err) ;
		console.log ( url) ;
	});
};