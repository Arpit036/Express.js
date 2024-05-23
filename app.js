const express = require("express");
const { Server } = require("http");

const app = express();

// app.get(route, callback)
app.get("/", (req, res)=>{
  res.send("Hello from the express");
});

app.listen(3000, ()=>{
    console.log("listening world form the express");
})

/*
the callback function has 2 parameters, request(req) and response(res).
the request object(req) represents the http request and has properties
for the request query string, paramteres, body, http headers, etc.

similarly, the response object represents the http response
that the express app sends when it receives an http request.
*/

/*
API 

get - read data from Server
post - create data in Server
put - update data in Server
delete - delete data from server 
*/
