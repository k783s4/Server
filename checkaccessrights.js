//check for the rights of the request
require("./addons");
module.exports = function(token,request){
  if(token === "Server"){
    return true;
  }
  if(token === "SU" && !request.contains("server_only")){
    return true;
  }
  if(request.contains("server_only") || request.contains("private") || request.contains("public")){
    if(request.contains("server_only")){
      return false;
    }
    if(request.contains("private") && (token !="Server" || token != "SU")){
      return false;
    }
  }
  else{
    return true;
  }
}
