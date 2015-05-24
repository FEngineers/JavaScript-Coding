# JavaScript-Tips
How to write good javascript code.

### be careful to use === or ==
avoid coding like "if(a='hi')"
we should use
```javascript
'hello' === varible or 'hello' == varible
```
instead
```javascript
variblae === 'hello' or variblae == 'hello'
```

### "for in" is not a good choice
remeber "for in" has bad performance then other loop statement, like for, while, do while.

### Semicolon Insertion
use
```javascript
return {
  status: true
};
```
instead
```javascript
return
{
  status: true
};
```
use
```javascript
if (boo) {
  //to do
}
```
instead
```javascript
if (boo)
{
  //to do
}
```

### Basic “short circuting” with || (Logical OR)
To set default values, instead of this:
```javascript
function documentTitle(theTitle) {
  if (!theTitle) {
    theTitle  = "Untitled Document";
  }
}
```
Use this:
```javascript
function documentTitle(theTitle) {
  theTitle  = theTitle || "Untitled Document";
}
```

### Block Scope
There is no block scope in js, we should declare variables at the beginning of function instead in the if statement or loop statement.

### Don't put method in Constructor, defined methods in prototype.
use
```javascript
function Person(name){
  this.name = name;
}
Person.prototype.sayHi = function () {
  alert('Hello ' + this.name);
}
```
instead
```javascript
function Person(name){
  this.name = name;
  this.sayHi = function () {
    alert('Hello ' + this.name);
  }
}
```

### Set default value in prototype instead in controller
user
```javascript
function Car(t) {
  if(t) {
    this.type = t;
  }
}
Car.prototype.type = 'gasoline';
```
instead
```javascript
function Car(t) {
  if(t) {
    this.type = t;
  } else {
    this.type = 'gasoline';
  }
}
```

# Thanks
### Books
JavaScript: The Good Parts

Professional JavaScript for Web Developers

编写高质量代码:改善JavaScript程序的188个建议

### Articles
[12 Simple (Yet Powerful) JavaScript Tips](http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/)
