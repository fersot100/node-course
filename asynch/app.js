var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs').option('location', {
	alias: 'l',
	describe: 'Allows user to specify location',
	demand: false,
	type: 'string'
}).help('help').argv;


if (typeof argv.location === 'string' && argv.l.length > 0){
	console.log('Has location: ' + argv.l);

	weather(argv.location).then( function(currentWeather){
			console.log(currentWeather);
		},
		function(error){
			console.log(error);
	});
}else{
	location().then(
		function(location){
			return weather(location.city); 
		}, function(error){console.log(error);})
	.then(function(currentWeather){
			console.log(currentWeather);
		}, function(error){console.log(error)});
}



