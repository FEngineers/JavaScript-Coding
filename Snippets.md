### Random a number
```javascript
Math.floor(Math.random() * ( n + 1));
```
n is maximum number

### Set Interval
```javascript
var id = window.setInterval(functionName, 1000); 
window.clearInterval(id); 
```

### URL Search Parameters
```javascript
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
```

### Add Event Listener
```javascript
function attachEvent(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, fn);
    }
}
```
