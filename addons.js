//Add function to strings---now you can ask string.contains(value)
String.prototype.contains = function(contain){
  if(this.indexOf(contain)> -1){
    return true;
  }
  else{
    return false;
  }
}
