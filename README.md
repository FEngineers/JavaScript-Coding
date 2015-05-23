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
return {
  status: true
};
*instead*
return
{
  status: true
};

use
if (boo) {
  //to do
}
*instead*
if (boo)
{
  //to do
}

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
