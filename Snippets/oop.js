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
  var user = Object.create(man);
  console.log('user color:', user.color);

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
  function sayHello () {
    console.log(this.name + ' says 您好 to world!');
  };
  Object.defineProperty(user, 'sayHello', {
    value: sayHello,
    writable: true,
    configurable: true,
    enumerable: true
  });


  user.sayHello();

  //Listing properties
  var propertiesAllOwn = Object.getOwnPropertyNames(user);
  console.log('propertiesAllOwn:', propertiesAllOwn);

  var propertiesEnumerable = Object.keys(user);
  console.log('propertiesEnumerable:', propertiesEnumerable);

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
