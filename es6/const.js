/**
 * node --harmony const.js
 */
(function () {
  const PI = 3.1415;

  console.log(PI);

  PI = 3;

  console.log(PI);
}());
