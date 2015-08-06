var sort = (function () {
  'use strict';

  function quickSort(arr) {
    if (arr.length <= 1 ) {
      return arr;
    }

    var base = arr[0];
    var left = [];
    var right = [];
    var curr;

    for (var i = 1, len = arr.length; i < len; ++i) {
      curr = arr[i];
      if (curr < base) {
        left.push(curr);
      } else {
        right.push(curr);
      }
    }

    return quickSort(left).concat(base, quickSort(right));

  }

  return quickSort;
}());

var arr = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72];
var hi = sort(arr);
console.log(hi);
