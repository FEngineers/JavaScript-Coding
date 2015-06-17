/**
 * Object Oriented Programming
 *
 * Foundation: Basic Knowledge about Object in JavaScript, includes how to create object, how to manage properties
 *
 * Inheritance
 *
 *
 *
 * */


/**
 * Foundation
 */
(function () {
  console.log('******Foundation******');
  var man = Object.create(null);
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

  var user = Object.create(man);
  console.log('user color:', user.color);

  Object.defineProperty(user, 'name', {
    value: 'Steven Guo',
    writable: true,
    configurable: true,
    enumerable: true
  });
  console.log('user name:', user.name);
}());


/**
 * Inheritance
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
