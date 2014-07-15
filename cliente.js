var http= require('http');
var utils = require('./clienteUtil')
//var url = process.argv[2];
//Sublime text y Dash

for (var i = 2; i < process.argv.length; i++) {
		processUrl(process.argv[i]);

};

function processUrl(url){

	http.get(url,function(response){

		var content ="";
		//data, error,end
		response.setEncoding('utf8');
		response.on('data', function(data){
			content+=data;
			//console.log(data);
		});

		response.on('error', function(err){
			console.log('Error encontrado '+ err);
		});

		response.on('end',function(){
			console.log('Todos los Datos Recibidos de la url: ' +url);
			utils.printContent(content);
		});

	});
}