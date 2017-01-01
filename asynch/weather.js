var request = require('request');

 module.exports = function getweather(location) {
	var encodedComponent = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+
	 encodedComponent +'&appid=ea5dcfc44a032a10484cd4c3bc919d70&units=imperial';
	return new Promise(function(resolve, reject){
		request({
		url: url,
		json: true
		}, function (error, response, body){
			if(error) {
				reject(error);
			} else{
				//console.log(JSON.stringify(body, null, 4));
				// parameters: (content, ?, indend spaces)
				resolve('It is ' + body.main.temp + 'F in ' + body.name);
			}
		});
	});
}


 //function(location, callback) {// Built in node variable
// 	var encodedComponent = encodeURIComponent(location);
// 	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+
// 	 encodedComponent +
// 	 '&appid=ea5dcfc44a032a10484cd4c3bc919d70&units=imperial';

// 	if(!location){
// 		return callback('No location Provided');
// 	}
// 	request({
// 	url: url,
// 	json: true
// 	}, function (error, response, body){
// 			if(error) {
// 				console.log('Unable to fetch weather.');
// 			} else{
// 				//console.log(JSON.stringify(body, null, 4));
// 				// parameters: (content, ?, indend spaces)
// 				callback('It is ' + body.main.temp + 'F in ' + body.name);
// 			}

// 	});
// }


