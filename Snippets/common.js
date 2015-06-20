/**
 * Random a number
 *
 * 1. The Math.floor() function returns the largest integer less than or equal to a given number.
 *
 * 2. The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is,
 * from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.
 *
 * @param n  n is maximum number
 * @returns {number}
 */
function randomANumber(n) {
  return Math.floor(Math.random() * ( n + 1));
}

/**
 * analysis URL Search Parameters
 *
 * The URLUtils.search property is a DOMString containing a '?' followed by the parameters of the URL.
 * string = object.search;
 * object.search = string;
 *
 * // Let's an <a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/URLUtils.search?q=123"> element be in the document
 * var anchor = document.getElementByID("myAnchor");
 * var result = anchor.search; // Returns:'?q=123'
 *
 * @returns {Object}
 */
function analysisURLParameters() {
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

/**
 * Add Event Listener
 *
 * @param element
 * @param type
 * @param fn
 */
function attachEvent(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  }
}
