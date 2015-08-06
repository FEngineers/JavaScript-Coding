var sort = (function () {
  'use strict';

  function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  function bubbleSort(arr) {
    var numElements = arr.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
      console.log('outer::', outer);
      for (var inner = 0; inner <= outer; ++inner) {
        console.log(inner, arr[inner]);
        console.log(inner+1, arr[inner+1]);
        if (arr[inner] > arr[inner + 1]) {
          swap(arr, inner, inner + 1);
        }
      }
    }
  }

  return bubbleSort;
}());

var arr = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72];
sort(arr);
console.log(arr);
