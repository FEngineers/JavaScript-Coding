/**
 * Array.prototype.map()
 */
var flatten = (function () {
  'use strict';

  function _flatten(arr) {
    return arr.toString().split(',').map(function (v) {
      return +v;
    });
  }

  return _flatten;

}());

var arr2Flatten = [1, 2, 3, [4, 5, [6, 7]], [[[8]]]];

var flattedArr = flatten(arr2Flatten);

console.log(flattedArr);
