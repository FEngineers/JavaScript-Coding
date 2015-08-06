/**
 * Array.isArray(obj)
 * Array.prototype.push()
 * Array.prototype.concat()
 */
var flatten = (function () {
  'use strict';

  function _flatten(arr) {
    var curr, flattedArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      curr = arr[i];
      if (Array.isArray(curr)) {
        flattedArr = flattedArr.concat(_flatten(curr));
      } else {
        flattedArr.push(curr);
      }
    }
    return flattedArr;
  }

  return _flatten;

}());

var arr2Flatten = [1, 2, 3, [4, 5, [6, 7]], [[[8]]]];

var flattedArr = flatten(arr2Flatten);

console.log(flattedArr);
