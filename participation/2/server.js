//This is server.js which exports to index.js
//expects: character string
//returns: a server on port 8080 with an html document
const server = (message) => {
    //imports the http module
    var http = require('http');
    //imports the os module
    var os = require('os');
    //create a server
    let response =  http.createServer(function (req, res) {
        //writes a 200 request to the headers
        res.writeHead(200, {
            //writes an object stating content type and character set
            'Content-Type': 'text/html',
            'charset': 'UTF-8'

        });
        //the response ends with the message sent to the document along with the details of the os and arch
        res.end(message + '<br> You are running this on '+ os.platform() + ' with a '+ os.arch()+' architecture.');
        //displays on port 8080
    }).listen(8080);
    //returns response from the server
    return response
}
//exports a new attribute called send that returns the server function
module.exports.send = server;