require("./addons");
module.exports = function(token,request){
  if(token === "Server"){
    return true;
  }
  if(token === "SU" && !request.contains("server_only")){
    return true;
  }
  if(request.contains("server_only") || request.contains("private") || request.contains("public")){
    return false;
  }
  else{
    return true;
  }
}
