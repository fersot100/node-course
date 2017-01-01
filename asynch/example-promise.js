
var works = true;

function doWork(data, callback) {
	callback('done');
}

function doWorkPromise(data){
	return new Promise(function (resolve, reject) { // a promise takes two functions as arguments pass / fail
		setTimeout(function(){
			if(works){
				resolve('Everthing worked!');
			}
			else{
				reject('Everything is broken!');
			}
		}, 2000);
	});
}

doWorkPromise('some data').then(function(data){
	console.log(data);
}, function (error){
	console.log(error);
});