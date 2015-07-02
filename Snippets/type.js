(function () {
  var qualities = ['好', '坏'];
  var human = {};
  var ccps = [];
  var count = 0;

  human.quality = function () {
    var flag = Math.floor(Math.random() * 2);
    return qualities[flag];
  };

  for (var i = 0; i < 100; i++) {
    ccps.push(Object.create(human));
  }
  do {
    console.log(ccps[count].quality());
    ++count;
  } while (count < 100);

}());


///**
// * undefined
// */
//(function () {
//
//  console.log('******Undefined******');
//  //console.log('undefined variable steven::', steven);
//  //steven is not defined
//
//  var guoyinfeng;
//
//  console.log('declared but not yet initialized variable:', guoyinfeng);
//  console.log('typeof guoyinfeng:', typeof guoyinfeng)
//  console.log('typeof guoyinfeng === "undefined":', typeof guoyinfeng === "undefined")
//
//  var michael = {
//    role: 'singer'
//  };
//
//  console.log('michael.age:', michael.age);
//}());
//
//
///**
// * Primitive
// */
//(function () {
//  console.log('******Primitive******');
//  var name1 = 'Yinfeng';
//  console.log('name1 instanceof String:', name1 instanceof String);
//
//  var name2 = new String('Steven');
//  console.log('name2 instanceof String:', name2 instanceof String);
//}());
