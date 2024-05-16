"use strict";

module.exports = or;

function or(arr, callback, context) {
    var el;
    for (var i = 0, l = arr.length; i < l; i++) {
        el = arr[i];
        if (callback.call(context, el, i, arr)) {
            return el;
        }
    }
}
