//setup parameters for webserver
const http = require("http");
const hostname = "127.0.0.1";
const port = 8989;

//creating time and date
var today = new Date();
var date = today.getFullYear()+'-' + (today.getMonth()+1) + '-' + today.getDate();
var time = " "+ today.getHours() +":" + today.getMinutes() + ":" + today.getSeconds();
var currentDate = date + time;

//front-end of webserver
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("The current time and date: " + currentDate);
});


//feedback from console
server.listen(port, hostname, () => {
    console.log("server is running");
});