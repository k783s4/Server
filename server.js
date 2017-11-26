//initialize the server
let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer((req, res) => {
  //give back 200 code and set the content to website
  res.writeHead(200, "text/html");
  //write the get request
  console.log(url.parse(req.url, true));
  //analyze the GET request
  let get = url.parse(req.url, true);
  //if the requests does not ask for a specific site:
  if (get.pathname === "/") {
    console.log("NO REQUEST: Pathname " + __dirname + "\\website\\index.html");
    fs.readFile(__dirname + "\\website\\index.html", (err, data) => {
      if (data) {
        res.write(data.toString());
        res.end();
        return
      }
      if (err) {
        console.log(err.toString());
      }
    });
  } else {
    //clean input
    if (!get.pathname === "[a-zA-Z./]" || get.pathname.indexOf("..") !== -1) {
      console.log("Illegal charachters in request");
      res.status = 404;
      res.end();
      return
    } else {
      //if Input is clean read file and return it if it exists
      console.log("Input clean: Pathname " + __dirname + "\\website" + get.pathname);
      //FOR LATER : if a user does not enter .html add it automatically-------maybe should make it so we can also use .php or .js
      fs.readFile(__dirname + "\\website" + get.pathname, (err,data) => {
        if (data) {
          res.write(data.toString());
          res.end();
          return
        } else {
          res.status = 404;
          res.end();
          return
        }
      });
    }
  }
});
server.listen(8080);
