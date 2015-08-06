function seqSearch (arr, data) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var curr = arr[i];
    if (curr === data) {
      return curr;
    }
  }
}
