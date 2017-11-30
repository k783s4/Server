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
