var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = (array, element) => {
 return [element, ...array];
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
   array.unshift(element);
}

var addElementToEndOfArray = (array, element) => {
  return [...array, element];
}

var destructivelyAddElementToEndOfArray = (array, element) =>{
  array.push(element);
}

var accessElementInArray = (array,index) => {
  return array[index];
}
