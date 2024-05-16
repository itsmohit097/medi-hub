Returns the element of an array when the callback returns true.

Purpose
---

This module provides a similar function as `Array.prototype.filter`, but
it returns the element, not an array. And it stops looping as soon as it
finds a result.

Usage
---

```javascript
var arr = ['item', 'other', 'finally'];

var item = or(arr, function(item) {
    return item === 'other';
});

console.log(item); // "other"

// Real world example
var matchesSelector = or(['matchesSelector', 'mozMatchesSelector',
    'webkitMatchesSelector', 'oMatchesSelector',
    'msMatchesSelector'], function(shim) {
    return shim in document.documentElement;
});

document.getElementById('some')[matchesSelector]('#some'); // true
```

API
---

The module returns a function accepting the following arguments:

- `array`: the array on which to iterate
- `callback`: the function being called
- `context`: the context on which to call the callback

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
