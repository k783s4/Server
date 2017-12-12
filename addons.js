//Add function to strings---now you can ask string.contains(value)
String.prototype.contains = function(contain){
  if(this.indexOf(contain)> -1){
    return true;
  }
  else{
    return false;
  }
}
//Replace substring between indexes
String.prototype.replace = function(start,finish,replace){
  return this.substring(0,start) + replace + this.substring(finish);
}

let fs = require("fs");

//get the Internet Media Type and send the res accordingly
module.exports.getMT = function getMT(filename){
  if(!filename.contains(".")){
    return "text.html"
  }
    let data = fs.readFileSync(__dirname+"/content/server_only/filetypes.txt");
      let filetypes = data.toString().split("\r\n");
      i = 0;
      while(i < filetypes.length-1){
        if(filename.endsWith(filetypes[i].split(" ")[0])){
          return filetypes[i].split(" ")[1];
        }
        i++;
      }
      return "404i"
  }
