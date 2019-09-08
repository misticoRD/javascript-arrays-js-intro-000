var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = (array, element) => {
 return array.shift(element);
}
var destructivelyAddElementToBeginningOfArray = (array, element) => {
return  array.unshift(element);
}

var addElementToEndOfArray = (array, element) => {
  return [array, ...element];
}

var destructivelyAddElementToEndOfArray = (array, element) =>{
  return array.push(element);
}
