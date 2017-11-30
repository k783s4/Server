//return services is JSON format taking in account the users rights
let check = require("./checkaccessrights");
let fs = require("fs");
module.exports = function(rights){
  //get framework
  fs.readFile("./content/server_only/file_db.frw",function(err,data){
    if(err){
      console.log("An error occurred while reading file_db.frw in Services");
      return "err";
    }
    //get max amount of services allowed to run on this server
    let maxServices = data.toString().split(";")[0].split("= ")[1];
    console.log("MaxServices: " + maxServices);
    //process framework
    let temp = data.toString()
    let services;
    //get the services without information but with access rights
    let i = 0;
    while(!i=-1 && i<maxServices){
      i++;
      temp = titles.replace(titles.indexOf("{",i),titles.indexOf("}",i),"");
      services.push(temp);
  }
    //check services for rights
    i = 0;
    while(i<services.length-1){
      //if the service requires rights above the ones given delete it from the accessible services list
      if(!checkaccessrights(services[i].substring(services[i].indexOf("("),services[i].indexOf(")")))){
        services = services.splice(i,1);
      }
    }
    //return services
    i = 1;
    while(i<services.length){
      services[i-1] = services[i-1].replace(services[i-1].indexOf("("),services.indexOf(")"),"");
      i++;
    }
    return services;
  })
}
