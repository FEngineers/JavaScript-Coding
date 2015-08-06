var flattenArr = (function () {
  'use strict';
  function flatten(arr) {
    function isArray(obj) {
      return obj instanceof Array;
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
      return flattedArr;
    }
  }


  return flatten;
}());

var arr = [1, [2], 3, 4, [[5]], [[[6]]]];
var flatted = flattenArr(arr);
console.log('result:', flatted);

