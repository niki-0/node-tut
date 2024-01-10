//allows us to set up a web server

const http = require("http");

//request object
//url - endpoint/address client is requesting
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  //accessing a resource that doesnt exist
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>`);
});

//indicates port our server is listening to
server.listen(1000);

//web servers keep on listening to requests, THUS WILL ALWAYS BE UP, when normally node filename usually exits
