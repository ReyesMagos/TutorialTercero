var http = require('http');
var url = process.argv[2];
http.get(url,function(response){
	response.setEncoding('utf8');
	var res="";
	var sum =0;
	response.on('data',function(data){
		
		res+=data;
		console.log(res.host());
	});

	response.on('error', function(err){
		console.log('Error: '+ err);
	});

	response.on('end', function(){
		//console.log("fin");
		 sum = res.length;
		 console.log(sum);
		console.log(res);
	}); 

});