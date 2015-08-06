function flattenArr(arr) {
  'use strict';

  return arr.join(',').split(',').map(function (v) {
    return +v;
  });
}

var arr = [1, [2], 3, 4, [[5]], [[[6]]]];
var flatted = flattenArr(arr);
console.log('result:', flatted);
