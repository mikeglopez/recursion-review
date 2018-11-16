// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // if null
  //    return 'null'

  if (obj === null) {
    return 'null';
  }

  // if undefined OR function (typeof input === 'function')
  //    return undefined;

  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  }

  // if number
  //    return number.toString();

  if (typeof obj === 'number') {
    return obj.toString();
  }

  // if string
  //    return string

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // if boolean
  //    return " + boolean + "

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  // if array
  // var ouput = '[';
  //    for each element in the array..
  //        output += stringifyJSON(element)
  // output += "]"
  // return output

  if (Array.isArray(obj)) {
    if (obj.length === 0) { return '[]'; }
    //var output = "[";
    var output = obj.reduce(function(acc, cur) {
      return acc + stringifyJSON(cur) + ',';
    }, '[');
    // [1,2,
    output = output.slice(0, -1);
    return output + ']';
  }

  if (typeof obj === 'object') {
    var output = '{';
    for (key in obj) {
      if (!(obj[key] === undefined) && !(typeof obj[key] === 'function')) {
        output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }

    if (output !== '{') {
      output = output.slice(0, -1);
    }
    return output + '}';
  }

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

// Pomander errors
// 11:12  warning  Strings must use singlequote   quotes
// 50:36  warning  Strings must use singlequote   quotes
// 54:8   warning  Strings must use singlequote   quotes
// 56:28  warning  A space is required after ','  comma-spacing
// 57:21  warning  Strings must use singlequote   quotes
// 61:21  error    Missing semicolon              semi
// 68:20  warning  Strings must use singlequote   quotes
// 69:30  warning  A space is required after ','  comma-spacing
// 71:21  warning  Strings must use singlequote   quotes
