// // include http module in the file
// var http = require('http');

// // create a server listening on 8087
// http.createServer(function (req, res) {
//     // write the response and send it to the client
//     res.writeHead(200, {'Content-Type': 'text/html'}); 
//     res.write('Node.js says hello!');
//     res.end();
// }).listen(8087);


// process.argv is the array that contains command line arguments
// print all arguments using forEach
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });


// var calculator = require('./calculator');

// var a=0, b=5;

// console.log("Addition : "+calculator.add(a,b));
// console.log("Subtraction : "+calculator.subtract(a,b));
// console.log("Multiplication : "+calculator.multiply(a,b));


// include the module that you like extend
// var fs = require('fs');

// // add a new function, printMessage(), to the module
// fs.printMessage = function(str){
//     console.log("Message from newly added function to the module");
//     console.log(str);
// }

// // re-export the module for changes to take effect
// module.exports = fs

// // you may use the newly added function
// fs.printMessage("Success");


// var fs = require('fs');

// // read file sample.txt
// var data = fs.readFileSync('sample.txt');
// console.log("Reading file completed : " + new Date().toISOString());

// console.log("After readFileSync statement : " + new Date().toISOString());


// var fs = require('fs');

// // read file sample.txt
// fs.readFile('sample.txt',
//     // callback function that is called when reading file is done
//     function(err, data) {        
//         if (err) throw err;
//         // data is a buffer containing file content
//         console.log("Reading file completed : " + new Date().toISOString());
// });

// console.log("After readFile asynchronously : " + new Date().toISOString());


// var fs = require('fs');

// fs.rename('sample.txt', 'sample_old.txt',
//     // 1st call back function
//     function (err) {
//         if (err) throw err;
//         console.log('File Renamed.');
//         fs.unlink('sample_old.txt',
//             // 2nd call back function
//             function (err) {
//                 if (err) throw err;
//                 console.log('File Deleted.');
//             }
//         ); 
//     }
// );


let http = require('http');

http.createServer(function(req, res) {
	// http header
    // 200 - is the OK message
    // to respond with html content, 'Content-Type' should be 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Node.js'); //write a response to the client
    res.end(); //end the response
}).listen(9000);