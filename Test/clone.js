var clone = (function () {
  function obj2Str (obj) {
    return Object.prototype.toString.call(obj);
  }

  function isArray(obj) {
    return typeof obj === 'object' && obj2Str(obj) === '[object Array]';
  }

  function isDate(obj) {
    return typeof obj === 'object' && obj2Str(obj) === '[object Date]';
  }

  function clone(parent) {
    if (typeof parent !== 'object') {
      return parent;
    }

    var child;

    if (isArray(parent)) {
      child = [];
    } else if (isDate(parent)) {
      child = new Date(parent.getTime());
    } else {
      child = Object.create(null);
    }

    for (var c in parent) {
      child[c] = clone(parent[c]);
    }

    return child;
  }

  return clone;
}());



var job = {
  company: 'eleme',
  position: 'front-end-developer',
  address: {
    city: 'shanghai',
    district: 'putuo'
  },
  happy: {
    salay: 20,
    computer: 'mackbook'
  }
};

//steven = job;
var steven = clone(job);

console.log('job:1:', job);
steven.happy.salay = 25;

console.log('job:2:', job);
console.log('steven:', steven);

var date1 = new Date();
var date2 = date1;
var date2 = clone(date1);

console.log(date1);
console.log(date2);

date2.setMonth(2);

console.log(date2);
console.log(date1);

var arr1 = [1, '2', ['a', 'b'], 3, '4'];

var arr2 = clone(arr1);

console.log(arr2);

arr2.pop();

console.log(arr2);
console.log(arr1);
