//check for the rights of the request
require("./addons");
module.exports.allow = function allow(token,request,callback){
  if(token === "Server"){
    callback(true);
  }
  if(token === "SU" && !request.contains("server_only")){
    callback(true);
  }
  if(request.contains("server_only") || request.contains("private") || request.contains("public")){
    if(request.contains("server_only")){
      callback(false);
    }
    if(request.contains("private") && ((token !="Server" || token != "SU"))){
      callback(false);
    }
    if(!checkToken(token)){
      callback(false)
    }
  }
    callback(true);
}
function checkToken(token){
  //this function is customizable. it should compare a given token with valid tokens and return true or false
  return true;
}
