//initialize the server
let http = require("http");
let url = require("url");
let fs = require("fs");
let addons = require("./addons");
let rightsaccess = require("./checkaccessrights");

let server = http.createServer((req, res) => {
  //give back 200 code and set the content to website
  res.writeHead(200, {"Content-type": "text/html"});
  //write the get request
  console.log(url.parse(req.url, true));
  //analyze the GET request
  let get = url.parse(req.url, true);
  //if the requests does not ask for a specific site:
  if (get.pathname === "/") {
    console.log("NO REQUEST: Pathname " + __dirname + "/website/index.html");
    fs.readFile(__dirname + "/website/index.html", (err, data) => {
      if (data) {
        res.writeHead(200, {"Content-type":addons.getMT(get.pathname)});
        res.write(data);
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
      res.writeHead(400,{"Content-type":"text/html"});

      res.end("400 - Bad Request");
      return
    } else {
      console.log("test");
      //User request control rights
      rightsaccess.allow("user",get.pathname,function(tf){
        if(tf){
        //if Input is clean read file and return it if it exists
        console.log("Input clean: Pathname " + __dirname + "/website" + get.pathname);
        //add extension automatically
        if(!get.pathname.contains(".")){
          fs.readdirSync(__dirname+"/website").every(file =>{
            if("/"+file.split(".")[0] === get.pathname){
              get.pathname = "/"+file.toString();
              return false;
            }
            else{return true;}
          });
        }
        //if the request is not a content request
        /**if(!get.pathname.contains("content")){
          get.pathname = "/website" + get.pathname;
        }**/
        fs.readFile(__dirname + get.pathname, (err,data) => {
          console.log("a");
          if (data) {
            console.log("a2");
            res.writeHead(200, {"Content-type":addons.getMT(get.pathname)});
            res.write(data);
            res.end();
            return
          } else {
            console.log("404");
            //res.status = 404;
            res.writeHead(404,{"Content-type":"text/html"});
            res.end("404 - not found");
            return
          }
        });
    } else{                                                                       //not the required rights
      res.writeHead(401,{"Content-type":"text/html"});
      res.end("401 - not authorized");
    }
      });
    }
  }
});
server.listen(8080);
console.log("Server running on localhost:8080");
