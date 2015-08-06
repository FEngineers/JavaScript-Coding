/**
 * 1. 对于数组Array
 * child应该新建为[], 再把元素push进去
 *
 * 2. 对于日期Date
 * child应该使用new Date()方法创建
 * new Date();
 * new Date(value);
 * new Date(dateString);
 * new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
 * Date构造器可以传入多种不同的参数格式
 * 如果不传参数，则会创建一个当前系统的时间
 * 如果传入了大于两个参数，缺少的参数会自动补成1（如果缺少day参数）或者0（所有其他的参数均设成0）
 * 如果传入一个参数，并且传入的是整数类型的话，则是传入了1970年1月1日到需要创建日期的的毫秒数，可以通过dateObj.getTime()方法获取；如果传入的是字符串类型的话，则是传入的一个日期字符串，可以通过dateObj.toString()方法获取
 *
 * 3. 对于正则表达式
 * child应该使用new RegExp()方法创建
 * new RegExp(pattern[, flags])
 * 可以传入两个参数
 * pattern
 *
 */
var clone = (function () {
  function clone(parent) {
    function obj2Str(obj) {
      return Object.prototype.toString.call(obj);
    }

    function isArry(obj) {
      return typeof obj === 'object' && obj2Str(obj) === '[object Array]';
    }

    function isDate(obj) {
      return typeof obj === 'object' && obj2Str(obj) === '[object Date]';
    }

    function isRegExp(obj) {
      return typeof obj === 'object' && obj2Str(obj) === '[object RegExp]';
    }

    function _clone(parent) {
      var child;

      if (typeof parent !== 'object') {
        return parent;
      }

      if (isArry(parent)) {
        child = [];
      } else if (isDate(parent)) {
        child = new Date(parent.getTime());
        //或者使用parent.toString()
        //child = new Date(parent.toString());
      } else if (isRegExp(parent)) {

      } else {
        child = Object.create(null);
      }

      for (var i in parent) {
        console.log('parent[i]:', parent[i]);
        child[i] = _clone(parent[i]);
      }

      return child;
    }

    return _clone(parent);
  }

  return clone;
}());

//var arr1 = [1, '2', ['a', 'b'], 3, '4'];
//
//var arr2 = clone(arr1);
//
//console.log(arr2);
//
//arr2.pop();
//
//console.log(arr2);
//console.log(arr1);

//var date1 = new Date();
//var date2 = date1;
//var date2 = clone(date1);

//console.log(date1);
//console.log(date2);
//
//date2.setMonth(2);
//
//console.log(date2);
//console.log(date1);

//var regexp1 = new RegExp('\\w+');
//var regexp2 = regexp1;
//
//console.log(regexp1);
//console.log(regexp2);
//
//regexp2 = /ab+c/i;
//
//console.log(regexp1);
//console.log(regexp2);


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
steven = clone(job);

console.log('job:1:', job);
steven.happy.salay = 25;

console.log('job:2:', job);
console.log('steven:', steven);
