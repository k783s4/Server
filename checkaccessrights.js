//check for the rights of the request
require("./addons");
module.exports.allow = function allow(token,request,callback){
  console.log("dwad");
  if(token === "Server"){
    console.log("d");
    callback(true);
  }
  console.log("1");
  if(token === "SU" && !request.contains("server_only")){
    console.log("n");
    callback(true);
  }
  console.log("2");
  if(request.contains("server_only") || request.contains("private") || request.contains("public")){
    if(request.contains("server_only")){
      console.log("c");
      callback(false);
    }
    console.log("3");
    if(request.contains("private") && ((token !="Server" || token != "SU"))){
      console.log("b");
      callback(false);
    }
    console.log("4");
  }
    console.log("callbackstandatrd");
    callback(true);
}
