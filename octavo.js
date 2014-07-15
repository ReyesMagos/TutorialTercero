var http = require('http');
var utils = require('./utils.js');
var urlArray=[];
var count = process.argv.length-2;
var j=count;
var finalArray=[];

for (var i = 2; i < process.argv.length; i++) {
	processUrl(process.argv[i],i-2);
		
}


function processUrl(url, i){


	http.get(url,function(res){

		var respuesta ="";
		res.on('data',function(data){
			respuesta+=data;
			//console.log("data de "+ url+"; " + data);
		});



		res.on('end',function(){
			finalArray[i]=respuesta;
			count--;
			if(count==0)
				utils.printNow(finalArray);

			
			//console.log(respuesta);
		});
	});
}




