//Remember promises are calls not functions
//Promises take one parameter which is a 
//function with resolve and reject parameters
//A promise typically returns a callback function resolve or reject
// function doWork(fail) {
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			console.log('done');
// 			if(fail){
// 				reject('Error');
// 			}else{
// 				resolve();
// 			}
			

// 		},2000);
// 	});
// }

//doWork will return a promise and we invoke the .then
//method of the returned promise which is the callback
//function in the parameter of the Promise

// doWork().then(function(){
// 	return doWork(true);
// }).then( function(){
// 	console.log('all done');
// }).catch(function(error){
// 	console.log(error);
// });


function getWeather (location) {
	 
	return new Promise(function(resolve, reject){
		resolve('It is hot in ' + location);
	});
}

function getLocation(){
	return new Promise(function(resolve,reject){
		resolve('Los Angeles');
	});
}

var alocation;
getLocation().then(function(location){
	return getWeather(location);
}).then(function(message){
	console.log(message);
});

