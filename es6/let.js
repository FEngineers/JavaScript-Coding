//node --harmony --use-strict let.js
//node --harmony let.js

(function () {
  'use strict';
  if (true) {
    let a = 10;
    var b = 1;
  }
  console.log(a);
  console.log(b);
}());

(function () {
  'use strict';
  var a = [];
  for (var i = 0; i < 10; i++) {
    var c = i;
    a[i] = function () {
      console.log(c);
    };
  }
  a[6]();
}());

(function () {
  'use strict';
  var a = [];
  for (var i = 0; i < 10; i++) {
    let c = i;
    a[i] = function () {
      console.log(c);
    };
  }
  a[6]();
}());
