/**
 * 需要被复制的对象需要考虑多种情况：
 * 数组
 * 正则表达式
 * 对象
 *
 * 对象里面可能又会有多种的数据类型
 *
 * deep clone 要考虑复制的深度
 * 一个对象可能嵌入了很多层的对象
 *
 * 需要考虑的东西：
 * 1. 数据类型:
 * 基本数据类型，变量里面存储的就是值，基本数据类型有number, string, boolean
 * 引用类型，变量里面存储的是引用地址
 *
 * 2. 递归算法:
 * 对于嵌套的结构，需要反复的复制
 *
 */
var clone = (function () {
  'use strict';
  var num1 = 10;
  var str1 = 'hi';
  var boo1 = true;
  var nul1 = null;
  var und1 = undefined;

  var reg1 = new RegExp('\\w+');
  var reg2 = reg1;
  reg2 = /ab+c/;

  console.log(typeof reg1);
  console.log(typeof reg2);
  console.log('reg1:', reg1);
  console.log('reg2:', reg2);

  var arr1 = ['1', '2', ['a', ['b']], '9'];

  var arr2 = arr1;


  function objToStr(o) {
    return Object.prototype.toString.call(o);
  }

  function isArray (o) {
    return typeof o === 'object' && objToStr(o) === '[object Array]';
  }

  function isRegExp (o) {
    return typeof o === 'object' && objToStr(o) === '[object RegExp]';
  }


  function deepClone (o) {
    var dest = null;

    if (typeof o !== 'object') {
      return o;
    }

    if (isArray(o)) {
      dest = [];
    } else if (isRegExp(o)) {

    }

    for (var i in o) {
      //dest.push(o[i]);
      dest[i] = deepClone(o[i]);
    }


    return dest;
  }

  /**
   * Clones (copies) an Object using deep copying.
   *
   * This function supports circular references by default, but if you are certain
   * there are no circular references in your object, you can save some CPU time
   * by calling clone(obj, false).
   *
   * Caution: if `circular` is false and `parent` contains circular references,
   * your program may enter an infinite loop and crash.
   *
   * @param `parent` - the object to be cloned
   * @param `circular` - set to true if the object to be cloned may contain
   *    circular references. (optional - true by default)
   * @param `depth` - set to a number if the object is only to be cloned to
   *    a particular depth. (optional - defaults to Infinity)
   * @param `prototype` - sets the prototype to be used when cloning an object.
   *    (optional - defaults to parent prototype).
   */
  function clone(parent, circular, depth, prototype) {
    var filter;
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      filter = circular.filter;
      circular = circular.circular
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined') {
      circular = true;
    }

    if (typeof depth == 'undefined') {
      depth = Infinity;
    }

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null)
        return null;

      if (depth == 0)
        return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        child = new Buffer(parent.length);
        parent.copy(child);
        return child;
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        }
        else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      for (var i in parent) {
        var attrs;
        if (proto) {
          attrs = Object.getOwnPropertyDescriptor(proto, i);
        }

        if (attrs && attrs.set == null) {
          continue;
        }
        child[i] = _clone(parent[i], depth - 1);
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
   * Simple flat clone using prototype, accepts only objects, usefull for property
   * override on FLAT configuration object (no nested props).
   *
   * USE WITH CAUTION! This may not behave as you wish if you do not know how this
   * works.
   */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
      return null;

    var c = function () {
    };
    c.prototype = parent;
    return new c();
  };

// private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  };
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  };
  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  };
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  };
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  };
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
})();

var a, b;

a = {foo: {bar: 'baz'}};  // initial value of a

b = clone(a);                 // clone a -> b
a.foo.bar = 'foo';            // change a

console.log(a);               // show a
console.log(b);               // show b



var arr = ['1', '2', ['a', ['b']], '9'];


var arrCloned = clone(arr);
arrCloned[2].pop();


//http://www.cnblogs.com/georgewing/archive/2010/11/17/1879873.html
//http://www.jsann.com/post/JavaScript_deep_copy_and_shallow_copy.html
//http://blog.chinaunix.net/uid-26672038-id-4441521.html
//http://www.2cto.com/kf/201201/116033.html
//http://www.2cto.com/kf/201409/332955.html
//http://stackoverflow.com/questions/11299284/javascript-deep-copying-object
