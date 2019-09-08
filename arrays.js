var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = function(array, element) {
 return [...element, array];
}
var destructivelyAddElementToBeginningOfArray = (array, element) => {
return  array.unshift(element);
}

var addElementToEndOfArray = (array, element) => {
  return [array, ...element];
}
