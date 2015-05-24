# JavaScript-Tips
Best practices for js coding.


## be careful to use === or ==
avoid coding like "if(a='hi')"
we should use

'hello' === varible or 'hello' == varible

instead

variblae === 'hello' or variblae == 'hello'


## "for in" is not a good choice
remeber "for in" has bad performance then other loop statement, like for, while, do while.


## Semicolon Insertion
use
```javascript
return {
  status: true
};
```
*instead*
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
*instead*
```javascript
if (boo)
{
  //to do
}
```
## Basic “short circuting” with || (Logical OR)
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

## Block Scope
There is no block scope in js, we should declare variables at the beginning of function instead in the if statement or loop statement.

# References
JavaScript: The Good Parts
[12 Simple (Yet Powerful) JavaScript Tips](http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/)
