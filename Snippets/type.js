/**
 * undefined
 */
(function () {

  console.log('******Undefined******');
  //console.log('undefined variable steven::', steven);
  //steven is not defined

  var guoyinfeng;

  console.log('declared but not yet initialized variable:', guoyinfeng);
  console.log('typeof guoyinfeng:', typeof guoyinfeng)
  console.log('typeof guoyinfeng === "undefined":', typeof guoyinfeng === "undefined")
}());


/**
 * Primitive
 */
(function () {
  console.log('******Primitive******');
  var name1 = 'Yinfeng';
  console.log('name1 instanceof String:', name1 instanceof String);

  var name2 = new String('Steven');
  console.log('name2 instanceof String:', name2 instanceof String);
}());
