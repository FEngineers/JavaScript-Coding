/**
 * Object Oriented Programming
 *
 * => Foundation: Basic Knowledge about Object in JavaScript, includes how to create object, how to manage properties
 *
 * => Prototype
 *
 * => Important Method:
 * Function.prototype.call()
 * Function.prototype.apply()
 * Function.prototype.bind()
 *
 * => Inheritance
 *
 *
 *
 * */

/**
 * Foundation
 */
(function () {
  console.log('******Foundation******');

  var user = Object.create(null);

  //Define one property
  Object.defineProperty(user, 'firstName', {
    value: 'Steven',
    writable: true,
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(user, 'lastName', {
    value: 'Guo',
    writable: true,
    configurable: true,
    enumerable: false
  });
  console.log('user firstName:', user.firstName);
  console.log('user lastName:', user.lastName);

  //Getter and Setter
  function getFullName () {
    return this.firstName + ' ' + this.lastName;
  }

  function setFullName (newName) {
    var names = newName.trim().split(/\s+/);
    this.firstName = names['0'] || '';
    this.lastName = names['1'] || '';
  }

  //We can not set writable here, as "A property cannot both have accessors and be writable or have a value"
  Object.defineProperty(user, 'name', {
    get: getFullName,
    set: setFullName,
    configurable: true,
    enumerable: true
  });

  console.log('user name:', user.name);

  user.name = 'Yinfeng Guo';
  console.log('user firstNmae:', user.firstName);


  //Define method for object
  //Object.defineProperty(user, 'sayHello', {
  //  value: function () {
  //    console.log(this.firstName + ' says 您好 to world!');
  //  }
  //});
  function sayHello (person) {
    console.log(this.name + ' says 您好 to ' + person);
  };

  Object.defineProperty(user, 'sayHello', {
    value: sayHello,
    writable: true,
    configurable: true,
    enumerable: true
  });


  user.sayHello('JavaScript');

  //Listing properties
  var propertiesAllOwn = Object.getOwnPropertyNames(user);
  console.log('propertiesAllOwn:', propertiesAllOwn);

  var propertiesEnumerable = Object.keys(user);
  console.log('propertiesEnumerable:', propertiesEnumerable);

}());


/**
 * 1. Function.prototype.call()
 *
 * The call() method calls a function with a given this value and arguments provided individually.
 *
 *
 *
 * 2. Function.prototype.apply()
 *
 * The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
 *
 *
 *
 * 3. Function.prototype.bind()
 *
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value,
 * with a given sequence of arguments preceding any provided when the new function is called.
 *
 */
(function () {
  console.log('******Call Apply Bind******');
  var result, boundAdd;

  var one = {
    value: 1
  };

  var two = {
    value: 2
  };

  var three = {
    value: 3
  };

  function add (increment, other) {
    return this.value + increment + (other || 0);
  }

  result = add.call(one, 1);
  console.log('add.call(one, 1):', result);

  result = add.call(two, 1, 2);
  console.log('add.call(two, 1, 2):', result);

  result = add.apply(one, [3]);
  console.log('add.apply(one, [3]):', result);

  result = add.apply(two, [3, 4]);
  console.log('add.apply(two, [3, 4]):', result);



  boundAdd = add.bind(three, 6, 8);
  result = boundAdd();
  console.log('boundAdd():', result);

  result = boundAdd.call(two, 1, 2);
  console.log('boundAdd.call(two, 1, 2):', result);

  result = boundAdd.apply(one, [3]);
  console.log('boundAdd.apply(one, [3]):', result);
}());

/**
 * Prototype
 */
(function () {
  console.log('******Prototype******');

  //Create Object
  var man = Object.create(null);

  //Define multiple properties use one method
  Object.defineProperties(man, {
    color: {
      value: 'Yellow',
      writable: true,
      configurable: true,
      enumerable: true
    },
    language: {
      value: 'Chinese',
      writable: true,
      configurable: true,
      enumerable: true
    }
  });

  //Create Child Object by pass an object as parent
  var steven = Object.create(man);
  console.log('user color:', steven.color);

  steven.name = 'Steven';

  man.hi = function (person) {
    console.log(this.name + ': hi ' + (person || 'Parents'));
  };

  steven.hi();

  steven.hi = function(person) {
    console.log(this.name + ': hello ' + (person || 'World'));
  };

  var yinfeng = Object.create(man);
  yinfeng.name = 'Yinfeng';
  yinfeng.hi = function(person) {
    console.log(this.name + ': 您好 ' + (person || 'China'));
  };

  steven.hi(yinfeng.name)

  steven.hi()

  yinfeng.hi(steven.name)

  delete yinfeng.hi

  yinfeng.hi(steven.name)
}());

/**
 * Mixins
 */
(function () {
  console.log('******Mixins******');

  // Aliases for the rather verbose methods on ES5
  var descriptor  = Object.getOwnPropertyDescriptor,
    properties  = Object.getOwnPropertyNames,
    define_prop = Object.defineProperty;

  // (target:Object, source:Object) → Object
  // Copies properties from `source' to `target'
  function extend(target, source) {
    properties(source).forEach(function(key) {
      define_prop(target, key, descriptor(source, key)) });

    return target
  }

  //Create Object
  var man = Object.create(null);

  //Define multiple properties use one method
  Object.defineProperties(man, {
    color: {
      value: 'Yellow',
      writable: true,
      configurable: true,
      enumerable: true
    },
    language: {
      value: 'Chinese',
      writable: true,
      configurable: true,
      enumerable: true
    }
  });

  //Create Child Object by pass an object as parent
  var steven = Object.create(man);
  steven.name = 'Steven';

  var yinfeng = Object.create(man);
  yinfeng.name = 'Yinfeng';


// A pianist is someone who can `play' the piano
  var pianist = Object.create(null)
  pianist.play = function() {
    console.log(this.name + ' starts playing the piano.');
  }

  // A singer is someone who can `sing'
  var singer = Object.create(null)
  singer.sing = function() {
    console.log(this.name + ' starts singing.');
  }

  // Then we can move on to adding those abilities to our main objects:
  extend(steven, pianist);
  steven.play();

  // We can see that all that ends up as an own property of steven. It is not shared.
  console.log('Object.keys(steven):', Object.keys(steven));

  // Then we can define yinfeng as a singer
  extend(yinfeng, singer);
  yinfeng.sing();

  // steven can't sing yet though
  //steven.sing()
  // => TypeError: Object #<Object> has no method 'sing'

  // But steven will inherit the `sing' method if we extend the Man prototype with it:
  extend(man, singer)

  steven.sing()
}());

/**
 * Inheritance
 *
 * Born from one parent by using Object.create(parentObj);
 */
(function () {
  console.log('******Inheritance******');
  var baseClass = {
    name: 'Steven'
  };

  var childClass = Object.create(baseClass);
  console.log('child name 1:', childClass.name);

  childClass.name = 'guoyinfeng';
  console.log('child name 2:', childClass.name);

  delete childClass.name;
  console.log('child name 3:', childClass.name);



}());
