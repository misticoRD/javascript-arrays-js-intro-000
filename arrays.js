var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
var addElementToBeginningOfArray = (array, element) => {
 return [element, ...array];
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
  return array.unshift(element)
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

var destructivelyRemoveElementFromBeginningOfArray = function (array){
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = function(array){
return  array.slice(1);
}
