function sortSelection(arr) {
  var min;
  for (var outer = 0, len = arr.length; outer <= len - 2; outer++) {
    min = outer;
    for (var inner = outer+1; inner <= len -1; inner++) {
      if (arr[inner] < arr[min]) {
        min = inner;
      }
    }
    swap(arr, min, inner);
  }
}

function quicSort(arr) {
  var base = arr[0];
  var left = [];
  var right = [];

  for (var i = 1, len = arr.length; i < len; i++) {
    if () {

    }
  }
}

