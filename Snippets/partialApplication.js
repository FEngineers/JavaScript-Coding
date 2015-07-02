(function () {
  function bindFirstArg(fn, a) {
    return function (b) {
      return fn(a, b);
    }
  }

  function add(a, b) {
    console.log(a + '+' + b + ':', a+b);
  }

  var makeAdder = bindFirstArg(bindFirstArg, add);

  /*
  makeAdder = function (b) {
    return bindFirstArg(add, b);
  }
  */

  console.log('makeAdder:', makeAdder);
  var addOne = makeAdder(1);

  /*
   addOne = bindFirstArg(add, 1);

   addOne = function (b) {
    return add(1, b);
   }
   */
  console.log('addOne:', addOne);
  addOne(2);

  addOne(3);
}());
