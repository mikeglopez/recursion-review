// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // if null
  //    return 'null'

  // if undefined OR function (typeof input === 'function')
  //    return undefined;

  // if number
  //    return number.toString();

  // if string
  //    return string

  // if boolean
  //    return " + boolean + "

  // if array
  // var ouput = '[';
  //    for each element in the array..
  //        output += stringifyJSON(element)
  // output += "]"
  // return output

  // if object
  //  var output = '{'
  //    for (key in object)..
  //      output += 'key:' + stringifyJSON(object[key]) + ','
  // return output + '}'

};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Description

// Undefined	"undefined"
// Null	"object" (see below)
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Symbol (new in ECMAScript 2015)	"symbol"
// Host object (provided by the JS environment)	Implementation-dependent
// Function object (implements [[Call]] in ECMA-262 terms)	"function"
// Any other object	"object"
