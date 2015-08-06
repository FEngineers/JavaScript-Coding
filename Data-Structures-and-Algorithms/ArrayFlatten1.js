/**
 * Only use Array.prototype.push()
 */
var flatten = (function () {
  'use strict';

  function flatten(arr2Flatten) {
    function obj2Str(obj) {
      return Object.prototype.toString.call(obj);
    }

    //Array.isArray(obj) ie9 above support
    function isArray(obj) {
      return typeof obj === 'object' && obj2Str(obj) === '[object Array]';
    }

    var flattedArr = [];
    function _flatten(arr) {
      var curr;
      for (var i = 0, len = arr.length; i < len; i++) {
        curr = arr[i];
        if (isArray(curr)) {
          _flatten(curr);
        } else {
          flattedArr.push(curr);
        }
      }
    }
    _flatten(arr2Flatten);
    return flattedArr;
  }

  return flatten;
}());

var arr2Flatten = [1,2,3,[4,5, [6,7]], [[[8]]]];

var flattedArr = flatten(arr2Flatten);

console.log(flattedArr);
