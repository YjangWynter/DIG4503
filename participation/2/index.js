//This is index.js
//imports server
let server = require('./server.js')
// outputs a string in html format with a bold style
let html = (message) => `<strong>${message}</strong>`;
//sets the message
let message = 'Hello Professor :)';
//calls the send function to return the message in html to the the browser
server.send(html(message))