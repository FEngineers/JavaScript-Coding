function extend(target, source) {
  var descriptors = Object.getOwnPropertyDescriptor;
  var properties = Object.getOwnPropertyNames;
  var definedProperty = Object.defineProperties;

  properties(source).forEach(function (key) {
    definedProperty(target, key, descriptors(source, key));
  });
}

function extend(target, source) {
  var descriptor = Object.getOwnPropertyDescriptor;
  var properties = Object.getOwnPropertyNames;
  var defineProperty = Object.defineProperty;

  properties(source).forEach(function (key) {
    defineProperty(target, key, descriptor(source, key));
  });
}

