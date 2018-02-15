let fs = require('fs');
let request = require('request');

// console.log(process.argv[2]);
// console.log('hello');
// fs.writeFile('jokes.txt','hii there');

   // console.log('responced'); // Show the JSON for the Star Wars Character
   let jokeSite = {
   	url: "https://icanhazdadjoke.com/search?term=" + process.argv[2],
   	headers: {
   		'Accept': 'application/json'
   	}
   }

   request(jokeSite, function(error, response, body) {

   	// console.log(body)s;
   	if(!error && response.statusCode == 200) {
   		// console.log('hello');
   		let parcedBody = JSON.parse(body);
   		let result = parcedBody.results;
   		let randomJoke = Math.floor(Math.random()*(result.length-1));
   		console.log(result[randomJoke].joke);
   		// fs.writeFile('jokes.txt',result[randomJoke].joke);
   		fs.open('jokes.txt','a+',function(error, fd) {
   			fs.write(fd,result[randomJoke].joke + '\n');   			
   		})
   	}
   	else if(error)
   		console.log('something went wrong: ' , error);
   })

