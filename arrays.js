var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = function(array, element) {
 return [...element, array];
}
var destructivelyAddElementToBeginningOfArray = (array, element) => {
return  array.push(element);
}
