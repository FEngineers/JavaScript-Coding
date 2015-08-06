var sort = (function () {
  'use strict';

  function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  function selectionSort(arr) {
    var min;
    for (var outer = 0, len = arr.length; outer <= len - 2; ++outer) {
      min = outer;
      for (var inner = outer + 1; inner <= len - 1; ++inner) {
        if (arr[inner] < arr[min]) {
          min = inner;
        }
      }
      swap(arr, outer, min);
    }
  }

  return selectionSort;
}());

var arr = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72];
sort(arr);
console.log(arr);
